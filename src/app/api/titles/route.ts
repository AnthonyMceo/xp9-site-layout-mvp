import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { generatePlaceholderPdf } from "@/lib/pdf/generate-placeholder-pdf";
import { r2UploadPublic } from "@/lib/r2";
import { slugify, withSlugSuffix } from "@/lib/slug";

const TitleCreateSchema = z.object({
  titleName: z.string().min(1).max(140),
  authorName: z.string().min(1).max(140),
  summary: z.string().min(1).max(2000),
  coverUrl: z.string().url().optional(),
});

async function getOrCreateUser(clerkUserId: string) {
  const existing = await prisma.user.findUnique({ where: { clerkUserId } });
  if (existing) return existing;

  const client = await clerkClient();
  const user = await client.users.getUser(clerkUserId);
  const email =
    user.primaryEmailAddress?.emailAddress ?? user.emailAddresses?.[0]?.emailAddress;
  if (!email) {
    throw new Error("Clerk user is missing an email address.");
  }

  return prisma.user.create({
    data: {
      clerkUserId,
      email,
    },
  });
}

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkUserId: userId } });
  if (!user) return NextResponse.json({ titles: [] });

  const titles = await prisma.title.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      titleName: true,
      authorName: true,
      summary: true,
      slug: true,
      coverUrl: true,
      pdfUrl: true,
      status: true,
      createdAt: true,
      subscription: { select: { status: true, trialEndsAt: true, graceEndsAt: true } },
    },
  });

  return NextResponse.json({ titles });
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const parsed = TitleCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { titleName, authorName, summary } = parsed.data;
  const coverUrl = parsed.data.coverUrl ?? "/cover-placeholder.svg";

  const user = await getOrCreateUser(userId);

  const uuid = crypto.randomUUID();
  const slugBase = slugify(titleName);
  const slug = withSlugSuffix(slugBase, uuid.slice(0, 6));

  const pdfBytes = await generatePlaceholderPdf({ title: titleName, author: authorName, uuid });
  const pdfFileName = `xp9-${uuid}.pdf`;

  let pdfUrl: string | null = null;
  try {
    pdfUrl = await r2UploadPublic({
      key: `pdf/${pdfFileName}`,
      body: pdfBytes,
      contentType: "application/pdf",
    });
  } catch {
    pdfUrl = null;
  }

  const now = new Date();
  const trialEndsAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

  const created = await prisma.title.create({
    data: {
      id: uuid,
      userId: user.id,
      titleName,
      authorName,
      summary,
      slug,
      coverUrl,
      pdfUrl: pdfUrl ?? `/api/titles/${uuid}/pdf`,
      status: "ACTIVE",
      publicSlugs: { create: { slug, isActive: true } },
      files: {
        createMany: {
          data: [
            { fileType: "COVER", fileUrl: coverUrl },
            { fileType: "PDF", fileUrl: pdfUrl ?? `/api/titles/${uuid}/pdf` },
          ],
        },
      },
      subscription: {
        create: {
          status: "TRIALING",
          trialEndsAt,
          currentPeriodEndsAt: trialEndsAt,
        },
      },
    },
    select: { id: true, slug: true },
  });

  return NextResponse.json({ titleId: created.id, slug: created.slug }, { status: 201 });
}


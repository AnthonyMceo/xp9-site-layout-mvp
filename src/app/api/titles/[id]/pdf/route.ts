import { NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { generatePlaceholderPdf } from "@/lib/pdf/generate-placeholder-pdf";

const ParamsSchema = z.object({ id: z.string().uuid() });

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const parsed = ParamsSchema.safeParse(params);
  if (!parsed.success) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const title = await prisma.title.findUnique({
    where: { id: parsed.data.id },
    include: { subscription: true },
  });

  if (!title) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const status = title.subscription?.status ?? "UNPAID";
  if (!(status === "ACTIVE" || status === "TRIALING")) {
    return NextResponse.json({ error: "PDF disabled" }, { status: 403 });
  }

  const bytes = await generatePlaceholderPdf({
    title: title.titleName,
    author: title.authorName,
    uuid: title.id,
  });

  return new NextResponse(Buffer.from(bytes), {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": `attachment; filename="xp9-${title.id}.pdf"`,
      "cache-control": "public, max-age=300",
    },
  });
}


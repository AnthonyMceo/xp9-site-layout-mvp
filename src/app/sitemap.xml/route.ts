import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

function xmlEscape(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const staticPaths = [
    "/",
    "/how-it-works",
    "/pricing",
    "/faq",
    "/contact",
    "/terms",
    "/privacy",
  ];

  const titles = await prisma.title.findMany({
    where: {
      status: "ACTIVE",
      subscription: {
        is: {
          status: { in: ["ACTIVE", "TRIALING", "PAST_DUE", "UNPAID"] },
          OR: [{ graceEndsAt: null }, { graceEndsAt: { gt: now } }],
        },
      },
    },
    select: { slug: true, updatedAt: true },
    orderBy: { updatedAt: "desc" },
  });

  const urls: { loc: string; lastmod?: string }[] = [
    ...staticPaths.map((p) => ({ loc: `${baseUrl}${p}` })),
    ...titles.map((t) => ({
      loc: `${baseUrl}/book/${t.slug}`,
      lastmod: t.updatedAt.toISOString(),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => {
    const loc = xmlEscape(u.loc);
    const lastmod = u.lastmod ? `<lastmod>${xmlEscape(u.lastmod)}</lastmod>` : "";
    return `<url><loc>${loc}</loc>${lastmod}</url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}


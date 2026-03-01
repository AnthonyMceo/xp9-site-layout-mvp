import { notFound } from "next/navigation";
import Image from "next/image";

import { prisma } from "@/lib/prisma";
import { computeHidden, computePdfEnabled } from "@/lib/subscription-rules";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShareButtons } from "@/app/(marketing)/book/[slug]/share-buttons";

export const dynamic = "force-dynamic";

function Cover({ coverUrl, title }: { coverUrl: string | null; title: string }) {
  const src = coverUrl || "/cover-placeholder.svg";
  const isExternal = /^https?:\/\//.test(src);

  return (
    <Image
      src={src}
      alt={`${title} cover`}
      width={600}
      height={900}
      className="h-auto w-full rounded-lg border bg-background object-cover"
      unoptimized={isExternal}
      priority={false}
    />
  );
}

export default async function PublicBookPage({
  params,
}: {
  params: { slug: string };
}) {
  const title = await prisma.title.findUnique({
    where: { slug: params.slug },
    include: { subscription: true },
  });

  if (!title) notFound();

  const subscription = title.subscription;
  const status = subscription?.status ?? "UNPAID";
  const isHidden = subscription
    ? computeHidden({ status: subscription.status, graceEndsAt: subscription.graceEndsAt })
    : false;
  if (isHidden || title.status === "HIDDEN") notFound();

  const pdfEnabled = subscription ? computePdfEnabled(subscription.status) : false;

  const lookInside = [
    "This is a placeholder Look Inside preview for MVP validation.",
    "The real AI book generator is not enabled yet.",
    "Your public page, subscription rules, and download entitlement are what we’re validating now.",
  ];

  return (
    <MaxWidthWrapper className="py-12 sm:py-16">
      <div className="grid gap-10 md:grid-cols-[360px_1fr]">
        <div className="space-y-4">
          <Cover coverUrl={title.coverUrl} title={title.titleName} />

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-base">Download</CardTitle>
              <div className="text-sm text-muted-foreground">
                {pdfEnabled ? (
                  "PDF is available."
                ) : (
                  "PDF disabled when subscription is unpaid."
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full" disabled={!pdfEnabled}>
                <a href={title.pdfUrl ?? "#"} target="_blank" rel="noreferrer">
                  Download PDF
                </a>
              </Button>
              <Button type="button" className="w-full" variant="outline" disabled>
                Buy (coming soon)
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{status}</Badge>
              <Badge variant="outline">ID: {title.id}</Badge>
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight">
              {title.titleName}
            </h1>
            <div className="text-lg text-muted-foreground">{title.authorName}</div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {title.summary}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Look Inside</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {lookInside.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-2">
            <div className="text-sm font-medium">Share</div>
            <ShareButtons path={`/book/${title.slug}`} />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}


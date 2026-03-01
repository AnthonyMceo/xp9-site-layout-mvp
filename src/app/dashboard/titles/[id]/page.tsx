import Link from "next/link";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { computePdfEnabled } from "@/lib/subscription-rules";
import { SubscribeButton } from "@/app/dashboard/titles/[id]/subscribe-button";
import { getDefaultUser } from "@/lib/default-user";

export default async function TitleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getDefaultUser();

  const title = await prisma.title.findFirst({
    where: { id: params.id, userId: user.id },
    include: { subscription: true },
  });
  if (!title) notFound();

  const subscriptionStatus = title.subscription?.status ?? "UNPAID";
  const pdfEnabled = title.subscription ? computePdfEnabled(title.subscription.status) : false;

  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{title.titleName}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{title.authorName}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{subscriptionStatus}</Badge>
          <Button asChild variant="outline">
            <Link href={`/book/${title.slug}`} target="_blank">
              View public page
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Public link</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-muted-foreground">
              Shareable URL:
              <div className="mt-1 break-all font-mono text-xs text-foreground">
                /book/{title.slug}
              </div>
            </div>
            <Button asChild>
              <Link href={`/book/${title.slug}`} target="_blank">
                Open public page
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">PDF download</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-muted-foreground">
              {pdfEnabled
                ? "PDF is enabled for this title."
                : "PDF is disabled when the subscription is unpaid."}
            </div>
            <Button asChild disabled={!pdfEnabled}>
              <a href={title.pdfUrl ?? "#"} target="_blank" rel="noreferrer">
                Download file
              </a>
            </Button>
            <SubscribeButton titleId={title.id} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Summary</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          {title.summary}
        </CardContent>
      </Card>
    </div>
  );
}


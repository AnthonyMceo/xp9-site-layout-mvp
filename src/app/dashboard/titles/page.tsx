import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { getMockUser } from "@/lib/mock-user";

export default function DashboardTitlesPage() {
  const TitlesList = async () => {
    const user = await getMockUser();

    const titles = await prisma.title.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: { subscription: true },
    });

    if (titles.length === 0) {
      return (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">No titles yet</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Create your first title to generate a public page and placeholder PDF.
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="grid gap-4">
        {titles.map((t) => (
          <Card key={t.id}>
            <CardHeader className="space-y-1">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <CardTitle className="text-base">{t.titleName}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{t.subscription?.status ?? "UNPAID"}</Badge>
                  <Badge variant="outline">{t.status}</Badge>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{t.authorName}</div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="line-clamp-2 text-sm text-muted-foreground">
                {t.summary}
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/book/${t.slug}`} target="_blank">
                    Public page
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={`/dashboard/titles/${t.id}`}>Manage</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Titles</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Each title gets its own subscription, public slug, and PDF.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/titles/new">New title</Link>
        </Button>
      </div>

      <TitlesList />
    </div>
  );
}


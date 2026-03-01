import Link from "next/link";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <MaxWidthWrapper className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Launch your book publicly in minutes.
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Create a professional book page with cover, summary, preview, and
              managed file access — all under your own title subscription.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/dashboard/titles/new">Create your first title</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/how-it-works">See how it works</Link>
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              $10 per active title · 30-day free trial
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="py-14">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Professional book pages, without the overhead.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Title creation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Create a title with name, author, description, and cover.
                Instantly generate a live public page.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shareable public links</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Each title receives a permanent public URL you can share
                anywhere.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Managed file access</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Attach a downloadable book file to your title and control access
                through subscription status.
              </CardContent>
            </Card>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="border-t bg-muted/20">
        <MaxWidthWrapper className="py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Built for modern independent publishers.
              </h2>
              <p className="mt-3 text-muted-foreground">
                XP9 provides the infrastructure to host and manage book titles
                professionally. Launch public book pages today. Expand into full
                publishing workflows when ready.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <Link href="/pricing">View pricing</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/signup">Create account</Link>
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Everything your listing needs</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                - Public book page with a clean layout
                <br />- Cover, summary, and preview section
                <br />- Shareable link you can post anywhere
                <br />- Subscription-backed access to downloads
              </CardContent>
            </Card>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}


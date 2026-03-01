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
            <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
              MVP preview: placeholder PDFs + public book pages
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Launch public book pages today. Generate the real books later.
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              XP9 validates the end-to-end flow: create a title, get a shareable
              public link, and deliver a uniquely identified placeholder PDF.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/signup">Create account</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/how-it-works">How it works</Link>
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              $10/month per active title • 30-day free trial
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="py-14">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Title creation flow</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Title, author, summary, cover placeholder, confirm. We generate
                a UUID + public slug automatically.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shareable public pages</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Public `/book/[slug]` pages show cover, summary, look-inside,
                and a controlled PDF link.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Subscriptions per title</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Stripe trials + grace periods. If unpaid, the public page stays
                visible while PDF access is disabled.
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
                Validate demand before building the generator.
              </h2>
              <p className="mt-3 text-muted-foreground">
                The AI book engine is intentionally out of scope for this MVP.
                Instead, we prove the customer journey, billing rules, and
                product pages end-to-end.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <Link href="/pricing">See pricing</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/faq">Read FAQ</Link>
                </Button>
              </div>
            </div>
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle>What you’ll get in the MVP</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                - Accounts (email + Google)
                <br />- Dashboard for titles
                <br />- Mock PDFs (`pdf-lib`) stored in R2
                <br />- Public product pages + sitemap
                <br />- Stripe subscriptions per title
              </CardContent>
            </Card>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}


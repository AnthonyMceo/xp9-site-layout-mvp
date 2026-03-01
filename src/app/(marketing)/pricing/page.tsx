import Link from "next/link";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  return (
    <MaxWidthWrapper className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Pricing
        </h1>
        <p className="mt-3 text-muted-foreground">
          One simple rule: subscriptions are attached per title.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl">
        <Card className="relative">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Per-title subscription</CardTitle>
              <Badge variant="secondary">30-day trial</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-4xl font-semibold tracking-tight">
                $10<span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                per active title
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div>- Public product page (`/book/[slug]`)</div>
              <div>- Placeholder PDF generation + storage</div>
              <div>- Look Inside preview + share links</div>
              <div>- Title-level billing and entitlement</div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full">
                <Link href="/signup">Start free trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>

            <div className="rounded-lg border bg-muted/20 p-4 text-sm text-muted-foreground">
              If payment fails, the public page can remain visible while the PDF
              link is disabled. After the grace period, the public page is
              hidden.
            </div>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
}


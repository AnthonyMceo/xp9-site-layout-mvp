import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <MaxWidthWrapper className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-muted-foreground">
          These terms govern access to the XP9 platform and services.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Service terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              XP9 provides infrastructure to host public book pages and manage
              access to downloadable files under per-title subscriptions.
            </p>
            <p>
              Billing is per-title and may restrict access to downloads if a
              subscription becomes unpaid.
            </p>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
}


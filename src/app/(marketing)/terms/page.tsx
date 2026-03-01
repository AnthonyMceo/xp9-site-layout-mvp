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
          Placeholder terms for the MVP. Replace with your finalized legal copy.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">MVP disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              XP9 currently generates placeholder PDFs and public book pages to
              validate product flow. The AI book generator is not included yet.
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


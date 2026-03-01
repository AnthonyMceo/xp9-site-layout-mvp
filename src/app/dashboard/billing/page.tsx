import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Stripe subscription management will be wired next.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Billing portal placeholder</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          This MVP will create a Stripe subscription per title (30-day trial) and
          apply grace period rules to public pages + PDF access.
        </CardContent>
      </Card>
    </div>
  );
}


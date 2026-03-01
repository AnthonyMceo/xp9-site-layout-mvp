import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Subscriptions are managed per title.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Per-title subscriptions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Start or manage a subscription from each title’s page. Active
          subscriptions keep your listing live and downloads available.
        </CardContent>
      </Card>
    </div>
  );
}


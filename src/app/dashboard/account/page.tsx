import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccountPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Account</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account settings and profile.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Account placeholder</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Clerk profile settings can be embedded here once you decide the exact
          UX.
        </CardContent>
      </Card>
    </div>
  );
}


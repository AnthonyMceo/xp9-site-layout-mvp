import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <MaxWidthWrapper className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-muted-foreground">
          This policy describes how XP9 collects and uses information.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              We collect account information needed to provide the service and
              attach subscriptions to titles.
            </p>
            <p>
              Public book pages may expose title metadata you choose to publish
              (title, author name, and summary).
            </p>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
}


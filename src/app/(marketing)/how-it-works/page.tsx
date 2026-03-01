import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Create your title",
    body: "Enter the book name, author, summary, and add a cover.",
  },
  {
    title: "Publish your book page",
    body: "We generate a public product page with a structured layout, preview section, and file delivery.",
  },
  {
    title: "Share your link",
    body: "Distribute your book page anywhere online.",
  },
  {
    title: "Maintain active hosting",
    body: "Each title remains live under an active subscription.",
  },
];

export default function HowItWorksPage() {
  return (
    <MaxWidthWrapper className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          How it works
        </h1>
        <p className="mt-3 text-muted-foreground">
          XP9 helps you publish professional book pages and keep each title live
          under a simple, per-title subscription.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {steps.map((step, i) => (
          <Card key={step.title}>
            <CardHeader>
              <CardTitle>
                Step {i + 1}: {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {step.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}


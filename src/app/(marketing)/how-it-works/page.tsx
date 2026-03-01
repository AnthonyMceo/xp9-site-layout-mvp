import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Create a title",
    body: "Enter title name, author name, and a short summary. Upload a cover or use a placeholder.",
  },
  {
    title: "We generate a placeholder PDF",
    body: "The system creates a UUID and builds a simple PDF (title page, author page, filler pages, footer with ID).",
  },
  {
    title: "Get a public product page",
    body: "A shareable `/book/[slug]` page is created with cover, summary, and look-inside preview.",
  },
  {
    title: "Attach billing to the title",
    body: "$10/month per active title with a 30‑day trial. If unpaid, PDF access is disabled; after grace, the page is hidden.",
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
          XP9 focuses on validating the publishing workflow and subscription
          rules before the real AI generator ships.
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


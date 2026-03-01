import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    q: "Does XP9 generate real books yet?",
    a: "Not in this MVP. We generate a uniquely identified placeholder PDF to validate the flow end-to-end.",
  },
  {
    q: "What happens if a subscription is unpaid?",
    a: "The public page can remain visible but the PDF download link is disabled. After the grace period, the public page is hidden.",
  },
  {
    q: "Is pricing per user or per title?",
    a: "Per title. Each active title has its own subscription and trial period.",
  },
  {
    q: "Can I share my book page publicly?",
    a: "Yes. Each title gets a shareable `/book/[slug]` page with cover, summary, and look-inside preview.",
  },
];

export default function FaqPage() {
  return (
    <MaxWidthWrapper className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          FAQ
        </h1>
        <p className="mt-3 text-muted-foreground">
          Quick answers about how the MVP works.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {faqs.map((f) => (
          <Card key={f.q}>
            <CardHeader>
              <CardTitle className="text-base">{f.q}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {f.a}
            </CardContent>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}


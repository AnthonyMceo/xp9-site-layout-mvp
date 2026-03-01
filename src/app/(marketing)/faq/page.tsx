import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    q: "What is XP9?",
    a: "XP9 is a publishing platform for hosting professional book pages and managing per-title subscriptions for listings and downloads.",
  },
  {
    q: "How does per-title billing work?",
    a: "Each title is hosted independently. Activate a subscription per title to keep its public page and downloadable file live.",
  },
  {
    q: "Is pricing per user or per title?",
    a: "Per title. Each active title has its own subscription and trial period.",
  },
  {
    q: "Can I share my book page publicly?",
    a: "Yes. Each title gets a shareable `/book/[slug]` page with cover, summary, and look-inside preview.",
  },
  {
    q: "What happens if a subscription is inactive?",
    a: "Access to downloads may be restricted until the subscription is active again.",
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
          Quick answers about publishing and hosting titles on XP9.
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


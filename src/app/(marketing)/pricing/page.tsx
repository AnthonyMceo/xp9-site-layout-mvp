import { LayoutWrapper } from "@/components/LayoutWrapper";
import { PricingCard } from "@/components/PricingCard";

export default function PricingPage() {
  return (
    <main className="bg-neutral-50">
      <LayoutWrapper className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Pricing built for every stage of publishing
          </h1>
          <p className="mt-5 text-pretty text-lg text-neutral-700">
            Start free, upgrade when you’re ready, and scale into a full publishing
            operation with white-label and API access.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-start">
          <PricingCard
            name="Starter"
            price="Free"
            description="Launch quickly with pay-per-print fulfillment."
            features={[
              "Pay per print",
              "Standard trim sizes",
              "Email support",
              "Basic dashboard access",
            ]}
            ctaLabel="Start Free"
            ctaHref="/signup"
          />

          <PricingCard
            highlighted
            name="Pro"
            price="$29"
            cadence="/month"
            description="AI tooling and analytics for serious creators."
            features={[
              "AI book generation tools",
              "Expanded trim sizes",
              "Priority support",
              "Bulk author discounts",
              "Advanced analytics",
            ]}
            ctaLabel="Go Pro"
            ctaHref="/signup"
          />

          <PricingCard
            name="Publisher"
            price="$99"
            cadence="/month"
            description="White-label publishing for teams and brands."
            features={[
              "White label publishing",
              "Custom branding",
              "API access",
              "Dedicated support",
              "Team accounts",
            ]}
            ctaLabel="Talk to Sales"
            ctaHref="/contact"
          />
        </div>
      </LayoutWrapper>
    </main>
  );
}


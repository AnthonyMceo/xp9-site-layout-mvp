"use client";

import { useMemo, useState } from "react";

import { LayoutWrapper } from "@/components/LayoutWrapper";
import { PricingCard } from "@/components/PricingCard";

function formatUsdNoCents(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const proMonthly = 10;
  const publisherMonthly = 99;
  const yearlyDiscount = 0.9;

  const proPrice = useMemo(() => {
    if (billing === "monthly") return { price: "$10", cadence: "/month", billedAnnually: undefined };
    return {
      price: formatUsdNoCents(proMonthly * yearlyDiscount),
      cadence: "/month",
      billedAnnually: `${formatUsdNoCents(proMonthly * 12 * yearlyDiscount)}/year`,
    };
  }, [billing]);

  const publisherPrice = useMemo(() => {
    if (billing === "monthly") return { price: "$99", cadence: "/month", billedAnnually: undefined };
    return {
      price: formatUsdNoCents(publisherMonthly * yearlyDiscount),
      cadence: "/month",
      billedAnnually: `${formatUsdNoCents(publisherMonthly * 12 * yearlyDiscount)}/year`,
    };
  }, [billing]);

  return (
    <main className="bg-neutral-50">
      <LayoutWrapper className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Simple pricing for independent publishers
          </h1>
          <p className="mt-5 text-pretty text-lg text-neutral-700">
            Upload your own PDF and start selling on Starter. Upgrade to Pro or
            Publisher to unlock our top-tier writing tools and higher publishing
            limits. Only published works that meet quality standards count toward
            plan limits.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <div
            className="inline-flex rounded-2xl border border-neutral-200 bg-white p-1 shadow-sm"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={[
                "rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                billing === "monthly"
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-700 hover:bg-neutral-50",
              ].join(" ")}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={[
                "rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                billing === "yearly"
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-700 hover:bg-neutral-50",
              ].join(" ")}
            >
              Yearly{" "}
              <span className="ml-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-900">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-start">
          <PricingCard
            name="Starter"
            price="Free"
            description="Upload your PDF and start selling with on-demand printing."
            features={[
              "Upload your own PDF file",
              "Pay per print (no inventory)",
              "On-demand publishing",
              "Basic dashboard access",
            ]}
            ctaLabel="Start Free"
            ctaHref="/signup"
          />

          <PricingCard
            highlighted
            name="Pro"
            price={proPrice.price}
            cadence={proPrice.cadence}
            billedAnnually={proPrice.billedAnnually}
            description="Write and publish with premium tools and priority support."
            features={[
              "Top-tier writing tools",
              "1 published book included",
              "Additional published works: $10/month each",
              "On-demand publishing",
              "Advanced analytics",
              "Priority support",
            ]}
            ctaLabel="Choose Pro"
            ctaHref="/signup"
          />

          <PricingCard
            name="Publisher"
            price={publisherPrice.price}
            cadence={publisherPrice.cadence}
            billedAnnually={publisherPrice.billedAnnually}
            description="White-label publishing for teams and growing catalogs."
            features={[
              "Custom branding",
              "15 published works included",
              "Remove “XP9 Publishing” from spine",
              "White label publishing",
              "Team accounts",
              "Dedicated support",
            ]}
            ctaLabel="Choose Publisher"
            ctaHref="/contact"
          />
        </div>
      </LayoutWrapper>
    </main>
  );
}


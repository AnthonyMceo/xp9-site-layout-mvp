import Link from "next/link";

import { LayoutWrapper } from "@/components/LayoutWrapper";

export function CTASection() {
  return (
    <section className="bg-neutral-950">
      <LayoutWrapper className="py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-950 via-neutral-950 to-amber-950/40 p-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)] sm:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-amber-300/25 to-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-300/20 to-amber-400/10 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Sign up for free and start publishing today
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-white/75">
                Go from manuscript to a print-ready product with on-demand
                fulfillment and subscription-friendly tooling.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Create Free Account
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}


import Link from "next/link";

import { LayoutWrapper } from "@/components/LayoutWrapper";

export function Hero() {
  // Conversion Hero Variants (requested):
  // Variant A: Turn your ideas into printed books without upfront costs.
  // Variant B: Generate and publish AI-powered novels at scale.
  // Variant C: Build a profitable on-demand publishing business.

  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-amber-200/70 to-amber-500/30 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-200/50 to-amber-400/20 blur-3xl" />
      </div>

      <LayoutWrapper className="py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Turn manuscripts into beautifully printed books
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-neutral-700">
              Sell AI-generated novels and children&apos;s books with zero inventory and
              global fulfillment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Start Publishing Free
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-6 text-sm text-neutral-600">
              Warm, book-inspired design • Built for conversion on Vercel
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-amber-200/70 via-amber-100/30 to-white blur-0" />
            <div className="rounded-[2rem] border border-neutral-200 bg-white/70 p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="grid gap-6">
                <div className="text-sm font-semibold text-neutral-900">
                  Preview: Book stack
                </div>
                <div className="relative h-64">
                  <div className="absolute left-6 top-10 h-44 w-32 rotate-[-8deg] rounded-2xl bg-neutral-900 shadow-lg" />
                  <div className="absolute left-20 top-6 h-48 w-36 rotate-[3deg] rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 shadow-lg" />
                  <div className="absolute left-36 top-12 h-44 w-32 rotate-[10deg] rounded-2xl bg-white shadow-lg ring-1 ring-neutral-200" />

                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between">
                    <div className="space-y-2">
                      <div className="h-2 w-44 rounded-full bg-neutral-200" />
                      <div className="h-2 w-36 rounded-full bg-neutral-200" />
                      <div className="h-2 w-52 rounded-full bg-neutral-200" />
                    </div>
                    <div className="rounded-2xl bg-neutral-900 px-4 py-2 text-xs font-semibold text-white shadow-sm">
                      Print-ready
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="font-semibold text-neutral-900">AI-first</div>
                    <div className="mt-1 text-neutral-600">Novels & kids books</div>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="font-semibold text-neutral-900">On-demand</div>
                    <div className="mt-1 text-neutral-600">No inventory</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}


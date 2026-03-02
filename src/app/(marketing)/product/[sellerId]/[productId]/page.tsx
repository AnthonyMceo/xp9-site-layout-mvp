import Image from "next/image";

import { LayoutWrapper } from "@/components/LayoutWrapper";

export const dynamic = "force-static";

function IdPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
      <span className="text-neutral-500">{label}</span>
      <span className="font-mono text-neutral-900">{value}</span>
    </div>
  );
}

export default function SampleProductPage({
  params,
}: {
  params: { sellerId: string; productId: string };
}) {
  const sellerName = "Amberline Press";
  const title = "The Amber Line";
  const author = "A. Carter";

  return (
    <main className="bg-neutral-50">
      <LayoutWrapper className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-neutral-700">Sample product page</div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                {title}
              </h1>
              <div className="text-lg text-neutral-700">
                {author} · Sold by <span className="font-semibold text-neutral-900">{sellerName}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <IdPill label="Seller ID" value={params.sellerId} />
              <IdPill label="Product ID" value={params.productId} />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
                <Image
                  src="/images/sample/sample-cover.webp"
                  alt={`${title} cover`}
                  width={900}
                  height={1350}
                  className="h-auto w-full"
                  priority={false}
                />
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
                <div className="text-sm font-semibold text-neutral-900">Purchase options</div>
                <div className="mt-2 text-sm text-neutral-600">
                  This is a sample page layout. Add pricing, formats, and checkout when you’re ready.
                </div>
                <div className="mt-4 grid gap-3">
                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-neutral-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    Buy paperback
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    Preview inside
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
                <h2 className="text-base font-bold text-neutral-900">Description</h2>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  A quiet road. A hard choice. A line that changes everything.{" "}
                  <span className="font-semibold text-neutral-900">{title}</span> is a character-driven
                  modern story about momentum—what we carry, what we leave behind, and the people who
                  pull us forward when we can’t move on our own.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
                  <div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
                    <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      Format
                    </div>
                    <div className="mt-1 font-semibold text-neutral-900">Paperback</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
                    <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      Category
                    </div>
                    <div className="mt-1 font-semibold text-neutral-900">Modern Fiction</div>
                  </div>
                </div>
              </section>

              <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2 className="text-base font-bold text-neutral-900">Peek inside</h2>
                    <p className="mt-2 text-sm text-neutral-600">
                      Give readers a quick preview—first pages, a chapter excerpt, or an illustrated spread.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-neutral-500">
                    Example interior preview
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[1.6rem] ring-1 ring-neutral-200">
                  <Image
                    src="/images/sample/sample-look-inside.webp"
                    alt="Interior preview spread"
                    width={1600}
                    height={1000}
                    className="h-auto w-full"
                    priority={false}
                  />
                </div>

                <div className="mt-6 grid gap-3 text-sm leading-7 text-neutral-700">
                  <p>
                    The first mile felt effortless—like the world had been waiting for him to finally
                    start. The second mile was where the doubts arrived.
                  </p>
                  <p>
                    He kept walking anyway, following the curve of an amber line that only he seemed
                    to notice.
                  </p>
                </div>
              </section>

              <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
                <h2 className="text-base font-bold text-neutral-900">Seller</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div className="text-sm text-neutral-700">
                    <div className="font-semibold text-neutral-900">{sellerName}</div>
                    <div className="mt-2 text-neutral-600">
                      Independent imprint publishing premium print-on-demand titles with global fulfillment.
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <IdPill label="Seller ID" value={params.sellerId} />
                    <IdPill label="Product ID" value={params.productId} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </main>
  );
}


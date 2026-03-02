import { LayoutWrapper } from "@/components/LayoutWrapper";

export function FeatureSection({
  title,
  bullets,
  description,
  eyebrow,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  reverse?: boolean;
}) {
  return (
    <section className="bg-neutral-50">
      <LayoutWrapper className="py-16 sm:py-20">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
              {eyebrow}
            </div>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-neutral-700">
              {description}
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-neutral-800">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-neutral-900 text-white shadow-sm"
                  >
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
            <div className="grid gap-4">
              <div className="h-10 w-40 rounded-2xl bg-gradient-to-r from-amber-300 to-amber-500 shadow-sm" />
              <div className="h-3 w-3/4 rounded-full bg-neutral-200" />
              <div className="h-3 w-2/3 rounded-full bg-neutral-200" />
              <div className="h-3 w-5/6 rounded-full bg-neutral-200" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="h-24 rounded-2xl bg-neutral-50 ring-1 ring-neutral-200" />
                <div className="h-24 rounded-2xl bg-neutral-50 ring-1 ring-neutral-200" />
              </div>
              <div className="mt-2 text-xs text-neutral-500">
                A clean, SaaS-style preview panel (no external images).
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}


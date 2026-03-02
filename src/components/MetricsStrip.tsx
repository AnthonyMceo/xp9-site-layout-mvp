import { LayoutWrapper } from "@/components/LayoutWrapper";

const metrics = [
  { value: "150+", label: "trim and format options" },
  { value: "1M+", label: "books printed" },
  { value: "20", label: "global fulfillment centers" },
  { value: "99.8%", label: "print accuracy rate" },
];

export function MetricsStrip() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <LayoutWrapper className="py-10">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl bg-neutral-50 p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)] ring-1 ring-neutral-200"
            >
              <dt className="text-sm font-medium text-neutral-600">{m.label}</dt>
              <dd className="mt-2 text-3xl font-bold tracking-tight text-neutral-900">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </LayoutWrapper>
    </section>
  );
}


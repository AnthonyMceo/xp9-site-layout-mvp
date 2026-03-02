import Link from "next/link";

export function PricingCard({
  name,
  price,
  cadence,
  billedAnnually,
  description,
  features,
  highlighted = false,
  ctaLabel,
  ctaHref,
}: {
  name: string;
  price: string;
  cadence?: string;
  billedAnnually?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div
      className={[
        "relative rounded-[2rem] border bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]",
        highlighted
          ? "border-amber-300 ring-1 ring-amber-300"
          : "border-neutral-200",
      ].join(" ")}
    >
      {highlighted ? (
        <div className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-3 py-1 text-xs font-bold text-neutral-900 shadow-sm">
          Most popular
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-neutral-900">{name}</div>
          <div className="mt-2 text-sm text-neutral-600">{description}</div>
        </div>
      </div>

      <div className="mt-6 flex items-end gap-2">
        <div className="text-4xl font-bold tracking-tight text-neutral-900">
          {price}
        </div>
        {cadence ? <div className="pb-1 text-sm text-neutral-600">{cadence}</div> : null}
      </div>
      {billedAnnually ? (
        <div className="mt-2 text-xs text-neutral-500">
          Billed annually at{" "}
          <span className="font-semibold text-neutral-500">{billedAnnually}</span>
        </div>
      ) : null}

      <ul className="mt-6 space-y-3 text-sm text-neutral-800">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={[
                "mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full text-white shadow-sm",
                highlighted ? "bg-amber-500" : "bg-neutral-900",
              ].join(" ")}
            >
              ✓
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href={ctaHref}
          className={[
            "inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
            highlighted
              ? "bg-neutral-900 text-white hover:bg-neutral-800"
              : "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50",
          ].join(" ")}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}


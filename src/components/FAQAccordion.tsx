type Item = { question: string; answer: string };

export function FAQAccordion({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-neutral-200 rounded-[2rem] border border-neutral-200 bg-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl text-left text-base font-semibold text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-neutral-50 ring-1 ring-neutral-200 transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-4 text-sm leading-7 text-neutral-700">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}


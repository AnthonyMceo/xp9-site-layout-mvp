import { LayoutWrapper } from "@/components/LayoutWrapper";

const steps = [
  {
    title: "Create or Upload Manuscript",
    body: "Bring your draft or generate a new story and prepare it for print with structured formatting.",
  },
  {
    title: "Design Your Cover",
    body: "Build a cover that converts—with templates, typography controls, and AI-assisted concepts.",
  },
  {
    title: "Connect Sales Channels",
    body: "Publish listings and route orders from your storefronts and marketplaces into fulfillment.",
  },
  {
    title: "We Print and Ship Automatically",
    body: "When an order comes in, we print on demand and ship globally—no inventory required.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-neutral-50">
      <LayoutWrapper className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            How it works
          </h1>
          <p className="mt-5 text-pretty text-lg text-neutral-700">
            A simple, production-ready workflow for AI-powered publishing and
            global print-on-demand fulfillment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <section
              key={step.title}
              className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]"
              aria-label={`Step ${i + 1}: ${step.title}`}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-lg font-bold text-neutral-900 shadow-sm">
                  {i + 1}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-neutral-900">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-neutral-700">
                    {step.body}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </LayoutWrapper>
    </main>
  );
}


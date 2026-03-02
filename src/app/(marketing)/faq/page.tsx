import { LayoutWrapper } from "@/components/LayoutWrapper";
import { FAQAccordion } from "@/components/FAQAccordion";
import Link from "next/link";

const faqs = [
  {
    question: "Do I need to order inventory?",
    answer:
      "No. XP9 Publishing prints each book only when an order is placed, so you don’t pay for storage or unsold stock.",
  },
  {
    question: "Can I order wholesale and ship inventory myself?",
    answer: (
      <>
        Yes. We offer wholesale pricing for bulk orders—reach out through our{" "}
        <Link
          href="/contact"
          className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
        >
          contact form
        </Link>{" "}
        to get a quote.
      </>
    ),
  },
  {
    question: "Can I use my own ISBN?",
    answer:
      "Yes. You can publish with your own ISBN, or use platform-provided options depending on your workflow and sales channels.",
  },
  {
    question: "How are printing costs calculated?",
    answer:
      "Costs are based on book specs like trim size, page count, binding type, and finish. You’ll see transparent base pricing as you configure a title.",
  },
  {
    question: "Can I sell on Amazon?",
    answer:
      "Yes. You can connect sales channels and route orders into print-on-demand fulfillment. Availability depends on the specific listing requirements of each marketplace.",
  },
  {
    question: "Do you handle returns?",
    answer:
      "Returns are supported through your connected sales channels. You can manage policies and workflows based on how and where you sell.",
  },
  {
    question: "Is AI book generation included?",
    answer:
      "Yes. Pro plans include AI book generation tools designed for novels and children’s books, plus formatting and cover assistance.",
  },
];

export default function FaqPage() {
  return (
    <main className="bg-neutral-50">
      <LayoutWrapper className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-pretty text-lg text-neutral-700">
            Everything you need to know about on-demand printing, costs, and AI-powered publishing.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <FAQAccordion items={faqs} />
        </div>
      </LayoutWrapper>
    </main>
  );
}


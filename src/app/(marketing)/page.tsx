import { CTASection } from "@/components/CTASection";
import { EarningsTool } from "@/components/EarningsTool";
import { FeatureSection } from "@/components/FeatureSection";
import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsStrip />
      <FeatureSection
        eyebrow="Create & Publish"
        title="Write faster. Publish with confidence."
        description="Bring your manuscript or use guided tools to craft a book readers love—then export a print-ready interior in minutes."
        imageSrc="/images/features/writing-tools.webp"
        imageAlt="Manuscript writing and export preview"
        bullets={[
          "Upload your own PDF or write with help",
          "Auto-format a print-ready interior",
          "Guided structure for chapters and metadata",
          "Export a production-ready PDF",
        ]}
      />
      <FeatureSection
        reverse
        eyebrow="Global Fulfillment"
        title="Global On-Demand Printing"
        description="Offer premium print options and fast delivery with worldwide fulfillment built for modern book commerce."
        imageSrc="/images/features/global-fulfillment.webp"
        imageAlt="Worldwide print and shipping coverage preview"
        bullets={[
          "Paperback and hardcover",
          "Lay-flat children's binding",
          "Matte and gloss finishes",
          "Worldwide fulfillment",
        ]}
      />
      <FeatureSection
        eyebrow="Zero Inventory Model"
        title="Zero Inventory Model"
        description="Print only what you sell. Keep margins predictable, scale instantly, and avoid storage overhead."
        imageSrc="/images/features/zero-inventory.webp"
        imageAlt="Order to print to ship workflow preview"
        bullets={[
          "Print only when ordered",
          "No storage costs",
          "Instant scaling",
          "Transparent base pricing",
        ]}
      />
      <EarningsTool />
      <CTASection />
    </>
  );
}


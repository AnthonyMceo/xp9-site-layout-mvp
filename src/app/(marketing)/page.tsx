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
        eyebrow="AI-Powered Publishing"
        title="AI-Powered Publishing"
        description="Create books faster with tools designed for authors, studios, and AI creators—without sacrificing print quality."
        bullets={[
          "Generate full novels",
          "Create illustrated children's books",
          "Auto-format interiors",
          "AI-assisted cover concepts",
        ]}
      />
      <FeatureSection
        reverse
        eyebrow="Global On-Demand Printing"
        title="Global On-Demand Printing"
        description="Offer premium print options and fast delivery with worldwide fulfillment built for modern book commerce."
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


"use client";

import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import ImageGrid from "@/components/ImageGrid";
import {
  TrustLogos,
  AboutSection,
  MethodologySection,
  StatsSection,
  TestimonialSection,
  FinalCTA
} from "@/components/AdditionalSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Indicators */}
      <TrustLogos />

      {/* 3. Problem / Context */}
      <AboutSection />

      {/* 4. Grid 1: Input Sources */}
      <ImageGrid
        title="Universal Input Sources"
        description="IntentRefiner aggregates signals from every touchpoint in your customer ecosystem."
        columns={4}
        items={[
          {
            title: "Conversational Chat",
            description: "Extracting intent from messy, multi-turn chat dialogues.",
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Direct Email",
            description: "Parsing long-form unstructured requests into structured data.",
            image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Voice Transcripts",
            description: "Processing raw telephony data with linguistic precision.",
            image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Support Tickets",
            description: "Triage automation for high-volume service desk environments.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      {/* 5. Methodology / Process */}
      <MethodologySection />

      {/* 6. Grid 2: Industry Impact */}
      <ImageGrid
        title="Industry-Specific Modeling"
        description="Custom-tuned heuristics for every vertical, ensuring maximum accuracy."
        columns={4}
        items={[
          {
            title: "Global Retail",
            description: "Handling returns, tracking, and warranty ambiguities.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Enterprise SaaS",
            description: "Deep technical triage for complex platform issues.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "FinTech Ops",
            description: "Securing intent extraction for sensitive transaction data.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Logistics",
            description: "Real-time routing of supply chain status enquiries.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
          }
        ]}
      />

      {/* 7. Interactive Demo */}
      <DemoSection />

      {/* 8. Grid 3: Architectural Integrity */}
      <ImageGrid
        title="Core Architecture"
        description="Built on the foundations of security, scalability, and extreme precision."
        columns={3}
        items={[
          {
            title: "Zero-Latency Triage",
            description: "Optimized for sub-20ms response times at scale.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Cryptographic Privacy",
            description: "PII is redacted before processing, keeping audits clean.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Pattern Divergence",
            description: "Identifies outlier inputs that require human oversight.",
            image: "https://images.unsplash.com/photo-1509228627152-72af903f79c4?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      {/* 9. Impact Metrics */}
      <StatsSection />

      {/* 10. Testimonials */}
      <TestimonialSection />

      {/* 11. Grid 4: Ecosystem Connectivity */}
      <ImageGrid
        title="Ecosystem Integration"
        description="Seamlessly connected to your existing operational stack via API."
        columns={4}
        items={[
          {
            title: "Cloud Infrastructure",
            description: "Native support for AWS, GCP, and Azure environments.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop"
          },
          {
            title: "Webhook Hub",
            description: "Trigger downstream automation in real-time.",
            image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "CRM Sync",
            description: "Keep your customer profiles enriched with intent data.",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2069&auto=format&fit=crop"
          },
          {
            title: "Search Analytics",
            description: "Deep integration with the Algolia Agent platform.",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
          }
        ]}
      />

      {/* 12. Conclusion & Footer */}
      <FinalCTA />
    </main>
  );
}

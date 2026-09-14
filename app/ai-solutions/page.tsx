import type { Metadata } from "next"
import { Bot, BrainCircuit, Crown, Gauge, ShieldCheck, Workflow } from "lucide-react"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { SplitLayout } from "@/components/layout/split-layout"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Accent, Heading, Text } from "@/components/typography/typography"
import { Reveal } from "@/components/motion/reveal"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { RelatedServices } from "@/components/sections/related-services"
import { CTABanner } from "@/components/sections/cta-banner"
import { StickyMobileCta } from "@/components/sections/sticky-mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"

import { aiApproach } from "@/content/about"
import { getServicesByCategory } from "@/content/services"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "AI Software Development Company in Nigeria",
  description:
    "MB CoreX is an AI software development company in Nigeria — AI-assisted development workflows that increase productivity, accelerate delivery and improve code quality, always with human oversight.",
  path: "/ai-solutions",
})

const benefits = [
  { icon: Gauge, title: "Faster Delivery", description: "AI-assisted iteration shortens time-to-market without skipping steps." },
  { icon: Workflow, title: "Automation", description: "Repetitive engineering and testing work is automated where it makes sense." },
  { icon: Crown, title: "Improved Code Quality", description: "AI-assisted review helps catch issues earlier in the build, not after launch." },
  { icon: BrainCircuit, title: "Practical AI Features", description: "AI integrated into your product only where it genuinely helps users." },
  { icon: Bot, title: "Intelligent Assistants", description: "Scoped, reliable assistants for internal teams or customer support." },
  { icon: ShieldCheck, title: "Human Oversight", description: "Every architectural decision and release stays under human review." },
]

export default function AISolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "AI Solutions", path: "/ai-solutions" }])} />

      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "AI Solutions" }]} />}
        eyebrow="AI Solutions"
        title={[
          "Engineering at AI speed,",
          <Accent key="accent" tone="brand">without cutting corners.</Accent>,
        ]}
        description={aiApproach.description}
        actions={[{ label: "Book a Consultation", href: "/contact" }]}
        image={{
          srcLight: "/images/hero/hero-ai-solutions-light.jpg",
          srcDark: "/images/hero/hero-ai-solutions-dark.jpg",
        }}
      />

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              What This Means in Practice
            </Heading>
          </div>
        </Reveal>
        <FeatureGrid cols={3} items={benefits} />
      </Section>

      <Section>
        <SplitLayout
          start={
            <Reveal>
              <Heading level={2} size="lg">
                Speed Is the Method, Not the Product
              </Heading>
              <Text tone="muted" className="mt-4 max-w-md">
                MB CoreX doesn&apos;t sell AI models — we sell software outcomes. AI is one of the tools we use to
                get there faster, with the same engineering and security standards applied throughout.
              </Text>
            </Reveal>
          }
          end={
            <Reveal variant="fade">
              <ul className="flex flex-col gap-3">
                {aiApproach.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-body-sm text-foreground">
                    <Crown className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          }
        />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Related Services
            </Heading>
          </div>
        </Reveal>
        <FeatureGrid
          cols={4}
          items={getServicesByCategory("Artificial Intelligence").map((service) => ({
            icon: service.icon,
            title: service.title,
            description: service.shortDescription,
          }))}
        />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Explore Other Services
            </Heading>
          </div>
        </Reveal>
        <RelatedServices currentHref="/ai-solutions" />
      </Section>

      <CTABanner
        image="systems"
        heading="Ready to Build Faster, Without Cutting Corners?"
        description="Let's talk about where AI-assisted delivery could help your project."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
      <StickyMobileCta label="Book a Consultation" />
    </>
  )
}

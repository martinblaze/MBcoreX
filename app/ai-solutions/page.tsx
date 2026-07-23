import type { Metadata } from "next"
import Link from "next/link"
import { Bot, BrainCircuit, Gauge, ShieldCheck, Sparkles, Workflow } from "lucide-react"

import { Section } from "@/components/layout/section"
import { SplitLayout } from "@/components/layout/split-layout"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text, Caption } from "@/components/typography/typography"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTABanner } from "@/components/sections/cta-banner"
import { StickyMobileCta } from "@/components/sections/sticky-mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"

import { aiApproach } from "@/content/about"
import { getServicesByCategory } from "@/content/services"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "AI Solutions",
  description:
    "MB CoreX uses AI-assisted development workflows to increase productivity, accelerate delivery and improve code quality — always with human oversight.",
  path: "/ai-solutions",
})

const benefits = [
  { icon: Gauge, title: "Faster Delivery", description: "AI-assisted iteration shortens time-to-market without skipping steps." },
  { icon: Workflow, title: "Automation", description: "Repetitive engineering and testing work is automated where it makes sense." },
  { icon: Sparkles, title: "Improved Code Quality", description: "AI-assisted review helps catch issues earlier in the build, not after launch." },
  { icon: BrainCircuit, title: "Practical AI Features", description: "AI integrated into your product only where it genuinely helps users." },
  { icon: Bot, title: "Intelligent Assistants", description: "Scoped, reliable assistants for internal teams or customer support." },
  { icon: ShieldCheck, title: "Human Oversight", description: "Every architectural decision and release stays under human review." },
]

export default function AISolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "AI Solutions", path: "/ai-solutions" }])} />

      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "AI Solutions" }]} />
      </Section>

      <Section glow="top">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Caption className="text-primary">AI Solutions</Caption>
            <Heading level={1} size="xl" className="mt-4">
              Engineering at AI Speed — Without Cutting Corners
            </Heading>
            <Text tone="muted" className="mt-4">
              {aiApproach.description}
            </Text>
            <Button variant="cta" size="lg" className="mt-8" render={<Link href="/contact" />}>
              Book a Consultation
            </Button>
          </div>
        </Reveal>
      </Section>

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
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
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

      <CTABanner
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

import type { Metadata } from "next"
import Link from "next/link"
import { Puzzle } from "lucide-react"

import { Section } from "@/components/layout/section"
import { SplitLayout } from "@/components/layout/split-layout"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text, Caption } from "@/components/typography/typography"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { ProcessTimeline } from "@/components/sections/timeline"
import { FAQAccordion } from "@/components/sections/faq-accordion"
import { RelatedServices } from "@/components/sections/related-services"
import { CTABanner } from "@/components/sections/cta-banner"
import { StickyMobileCta } from "@/components/sections/sticky-mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"

import { services } from "@/content/services"
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Custom Software Development Company in Nigeria",
  description:
    "MB CoreX is a custom software development company in Nigeria — bespoke, enterprise-grade software built around how your business actually works, not a generic template.",
  path: "/custom-software",
})

const customService = services.find((service) => service.slug === "custom-software")!

const builtItems = ["custom-software", "enterprise-systems", "database-architecture", "api-development"]
  .map((slug) => services.find((service) => service.slug === slug)!)
  .map((service) => ({ icon: service.icon, title: service.title, description: service.shortDescription }))

const whyCustomPoints = [
  "Built around your actual workflow, not bent to fit a generic tool",
  "You own the source code and architecture — no vendor lock-in",
  "Scales as your business grows, instead of hitting a customization ceiling",
  "One system instead of three or four tools stitched together with manual work",
]

const processEntries = [
  { title: "Discovery", description: "We learn how your business actually operates before proposing architecture or scope." },
  { title: "Architecture", description: "Data model, access control and integrations are designed before a line of implementation code exists." },
  { title: "Build", description: "Built iteratively, with the highest-value modules shipped first so you see progress early." },
  { title: "Handover", description: "Documentation and deployment access come with every build — it's your system, fully." },
]

const faqItems = [
  {
    question: "What's the difference between custom software and off-the-shelf tools?",
    answer:
      "Off-the-shelf tools are fast to start with but bend your business to fit their assumptions. Custom software is built around your actual workflow — worth it once that workflow is a real point of difference for your business, not just \"the same as everyone else's.\"",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "It depends entirely on scope — a focused internal tool costs very differently than a multi-module enterprise system. We scope and estimate after a discovery call, once we understand what you actually need built.",
  },
  {
    question: "Do you build software for specific industries?",
    answer:
      "Yes — we've built for healthcare/diagnostics (DiagSync) and e-commerce/education (Batamart), among others. Every industry has different data-sensitivity and compliance considerations, which we scope for upfront.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Maintenance and support are available after launch so your software doesn't become someone else's problem. We hand off documentation and access either way — you're never locked into us.",
  },
]

export default function CustomSoftwarePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Custom Software", path: "/custom-software" }])} />
      <JsonLd data={serviceJsonLd(customService)} />
      <JsonLd data={faqJsonLd(faqItems)} />

      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Custom Software" }]} />
      </Section>

      <Section glow="top">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Caption className="text-primary">Custom Software Development in Nigeria</Caption>
            <Heading level={1} size="xl" className="mt-4">
              Software Built Around How Your Business Actually Works
            </Heading>
            <Text tone="muted" className="mt-4">
              MB CoreX is a custom software development company in Nigeria — bespoke, enterprise-grade
              software, not a generic template forced to fit.
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
              What We Build
            </Heading>
          </div>
        </Reveal>
        <FeatureGrid cols={4} items={builtItems} />
      </Section>

      <Section>
        <SplitLayout
          start={
            <Reveal>
              <Heading level={2} size="lg">
                Custom, When Custom Actually Earns Its Cost
              </Heading>
              <Text tone="muted" className="mt-4 max-w-md">
                We build custom software when your workflow is a genuine point of difference — not by
                default. Here&apos;s what that gets you.
              </Text>
            </Reveal>
          }
          end={
            <Reveal variant="fade">
              <ul className="flex flex-col gap-3">
                {whyCustomPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-body-sm text-foreground">
                    <Puzzle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          }
        />
      </Section>

      <Section glow="center">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <Caption className="text-primary">Proven in Production</Caption>
            <Heading level={2} size="xl">
              A Custom Marketplace Built Around Real Campus Buying Habits
            </Heading>
            <Text tone="muted" size="lg" className="max-w-xl">
              Batamart replaced informal, chat-based campus trading with a structured marketplace — vendor
              management, secure payments and search, built on an architecture ready to scale.
            </Text>
            <Button variant="outline" size="lg" className="mt-2" render={<Link href="/portfolio/batamart" />}>
              View the Case Study
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              How We Build It
            </Heading>
          </div>
        </Reveal>
        <ProcessTimeline entries={processEntries} />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Frequently Asked Questions
            </Heading>
          </div>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Explore Other Services
            </Heading>
          </div>
        </Reveal>
        <RelatedServices currentHref="/custom-software" />
      </Section>

      <CTABanner
        heading="Have a Custom Build in Mind?"
        description="Book a free consultation and let's talk through your workflow and requirements."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
      <StickyMobileCta label="Book a Consultation" />
    </>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { Bell, Repeat, TrendingDown } from "lucide-react"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Accent, Caption, Heading, Text } from "@/components/typography/typography"
import { RubberButton } from "@/components/ui/rubber-button"
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
  title: "Business Automation Software in Nigeria",
  description:
    "MB CoreX builds business automation software in Nigeria — workflow automation, AI-assisted operations and process automation that frees up staff time for higher-value work.",
  path: "/business-automation",
})

const automationService = services.find((service) => service.slug === "workflow-automation")!

const builtItems = ["workflow-automation", "ai-business-solutions", "ai-integrations", "intelligent-assistants"]
  .map((slug) => services.find((service) => service.slug === slug)!)
  .map((service) => ({ icon: service.icon, title: service.title, description: service.shortDescription }))

const automationWins = [
  { icon: Repeat, title: "Fewer Repetitive Tasks", description: "Data entry, status updates and routine reporting handled automatically instead of by hand." },
  { icon: TrendingDown, title: "Fewer Manual Errors", description: "Automated logic doesn't get tired at 6pm — auditable rules replace repetitive manual steps." },
  { icon: Bell, title: "Automatic Alerts", description: "Delays, overdue tasks and anomalies get flagged automatically instead of discovered late." },
]

const processEntries = [
  { title: "Process Audit", description: "We map your current workflow to find where manual, repetitive work is actually costing time." },
  { title: "Automation Design", description: "We define what gets automated, what stays manual, and how exceptions get handled." },
  { title: "Build & Test", description: "Automation logic is built and tested against real scenarios, not just the happy path." },
  { title: "Handover", description: "Documentation and monitoring are handed over — auditable automation, not a black box." },
]

const faqItems = [
  {
    question: "What kinds of tasks can be automated?",
    answer:
      "Repetitive, rule-based work — data entry, status routing, reporting, notifications, no-show forecasting. We audit your process first to identify where automation actually saves time versus where human judgment still matters.",
  },
  {
    question: "Is business automation only for large companies?",
    answer:
      "No — a lot of the highest-value automation wins are for small operational teams drowning in repetitive tasks. Scope is tailored to your actual workflow, not a large-enterprise assumption.",
  },
  {
    question: "How is this different from just using AI tools ourselves?",
    answer:
      "Off-the-shelf AI tools are generic. We build automation scoped tightly to your specific workflow and data, with auditable logic and a clear escalation path to a human when something falls outside normal parameters.",
  },
  {
    question: "Will automation replace our staff?",
    answer:
      "The goal is freeing staff from repetitive work, not replacing judgment. Every automation we build has a clear human escalation path for anything outside the routine case.",
  },
]

export default function BusinessAutomationPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Business Automation", path: "/business-automation" }])} />
      <JsonLd data={serviceJsonLd(automationService)} />
      <JsonLd data={faqJsonLd(faqItems)} />

      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Business Automation" }]} />}
        eyebrow="Business Automation in Nigeria"
        title={[
          "Automate the work",
          <Accent key="accent" tone="brand">slowing your team down.</Accent>,
        ]}
        description="MB CoreX builds business automation software in Nigeria — workflow and process automation that frees up staff time for higher-value work."
        actions={[{ label: "Book a Consultation", href: "/contact" }]}
        image={{
          srcLight: "/images/BusinessTechnology.png",
          position: "55% center",
        }}
      />

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
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              What Automation Actually Wins You
            </Heading>
          </div>
        </Reveal>
        <FeatureGrid cols={3} items={automationWins} />
      </Section>

      <Section glow="center">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <Caption className="text-primary">Proven in Production</Caption>
            <Heading level={2} size="xl">
              Real Automation, Running in a Live Diagnostics Lab
            </Heading>
            <Text tone="muted" size="lg" className="max-w-xl">
              DiagSync auto-routes patient tasks, flags results in real time, forecasts no-shows and
              catches revenue leakage automatically — automation woven into the actual workflow, not
              bolted on.
            </Text>
            <RubberButton variant="outline" size="lg" className="mt-2" render={<Link href="/portfolio/diagsync" />}>
              View the Case Study
            </RubberButton>
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
        <RelatedServices currentHref="/business-automation" />
      </Section>

      <CTABanner
        heading="Ready to Automate the Repetitive Work?"
        description="Book a free consultation and let's audit where your team's time is actually going."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
      <StickyMobileCta label="Book a Consultation" />
    </>
  )
}

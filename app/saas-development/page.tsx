import type { Metadata } from "next"
import Link from "next/link"
import { CreditCard, Gauge, Lock } from "lucide-react"

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
  title: "SaaS Development Company in Nigeria",
  description:
    "MB CoreX builds multi-tenant SaaS products in Nigeria — secure data isolation, subscription billing and a performance budget built in from day one.",
  path: "/saas-development",
})

const saasService = services.find((service) => service.slug === "saas-development")!

const builtItems = ["saas-development", "database-architecture", "cloud-infrastructure", "api-development"]
  .map((slug) => services.find((service) => service.slug === slug)!)
  .map((service) => ({ icon: service.icon, title: service.title, description: service.shortDescription }))

const saasFoundations = [
  { icon: Lock, title: "Secure Multi-Tenancy", description: "Data isolation between tenants designed in from the architecture stage, not retrofitted." },
  { icon: CreditCard, title: "Billing-Ready", description: "Subscription and billing integration scoped and built as a core module, not an afterthought." },
  { icon: Gauge, title: "Performance Budget", description: "Built to stay fast as tenant and data volume grow, not just at demo scale." },
]

const processEntries = [
  { title: "Scope the MVP", description: "We define the smallest version that proves the core value, so you're not paying to build features nobody's asked for yet." },
  { title: "Architect for Multi-Tenancy", description: "Data isolation, roles and billing are designed before feature work starts." },
  { title: "Build & Harden", description: "MVP built iteratively, with a security and scalability review before launch." },
  { title: "Launch & Iterate", description: "We stay on to support and extend the product as real usage shapes what's needed next." },
]

const faqItems = [
  {
    question: "How much does it cost to build a SaaS product in Nigeria?",
    answer:
      "It depends on the MVP scope — a single-tenant tool is a different build than a multi-tenant platform with billing. We scope every project after discovery so the estimate reflects what you're actually building first.",
  },
  {
    question: "What is multi-tenant architecture and do I need it?",
    answer:
      "Multi-tenant means one codebase and database serving many customers with their data kept isolated. You need it if you're selling the same product to multiple customers — which is most SaaS. We assess this during architecture planning.",
  },
  {
    question: "Can you help with billing and subscriptions?",
    answer:
      "Yes — subscription billing (via providers like Stripe) is scoped as a core module on SaaS builds, not bolted on later.",
  },
  {
    question: "Do you build the MVP first?",
    answer:
      "Generally yes. We scope the smallest version that proves the core value first, then extend based on real usage rather than guessing every feature upfront.",
  },
]

export default function SaasDevelopmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "SaaS Development", path: "/saas-development" }])} />
      <JsonLd data={serviceJsonLd(saasService)} />
      <JsonLd data={faqJsonLd(faqItems)} />

      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "SaaS Development" }]} />
      </Section>

      <Section glow="top">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Caption className="text-primary">SaaS Development in Nigeria</Caption>
            <Heading level={1} size="xl" className="mt-4">
              SaaS Products Built to Scale From Day One
            </Heading>
            <Text tone="muted" className="mt-4">
              MB CoreX is a SaaS development company in Nigeria — multi-tenant products built with secure
              data isolation, billing and performance in mind from the start.
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
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Built on the Right Foundations
            </Heading>
            <Text tone="muted" className="mt-3">
              The three things that are expensive to retrofit into a SaaS product later.
            </Text>
          </div>
        </Reveal>
        <FeatureGrid cols={3} items={saasFoundations} />
      </Section>

      <Section glow="center">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <Caption className="text-primary">Proven in Production</Caption>
            <Heading level={2} size="xl">
              A Multi-Vendor Platform Handling Real Transactions
            </Heading>
            <Text tone="muted" size="lg" className="max-w-xl">
              Batamart runs vendor management, secure payments and marketplace logic on an architecture
              built to scale as vendor and buyer numbers grow.
            </Text>
            <Button variant="outline" size="lg" className="mt-2" render={<Link href="/portfolio/batamart" />}>
              View the Case Study
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <SplitLayout
          start={
            <Reveal>
              <Heading level={2} size="lg">
                Real Product, Not Just a Dashboard
              </Heading>
              <Text tone="muted" className="mt-4 max-w-md">
                DiagSync is a live, multi-role SaaS product — a diagnostic workflow operating system
                running patient intake, results, reporting and revenue intelligence in one system.
              </Text>
              <Button variant="outline" className="mt-6" render={<Link href="/portfolio/diagsync" />}>
                View the DiagSync Case Study
              </Button>
            </Reveal>
          }
          end={
            <Reveal variant="fade">
              <ul className="flex flex-col gap-3">
                {["6 role-based dashboards", "AI-assisted result insights", "Offline-ready with sync on reconnect", "Revenue and leakage intelligence built in"].map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-body-sm text-foreground">
                    <Gauge className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
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
        <RelatedServices currentHref="/saas-development" />
      </Section>

      <CTABanner
        heading="Ready to Build Your SaaS Product?"
        description="Book a free consultation and let's scope your MVP."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
      <StickyMobileCta label="Book a Consultation" />
    </>
  )
}

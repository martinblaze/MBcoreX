import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, FileLock, Fingerprint, ShieldCheck } from "lucide-react"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { Grid } from "@/components/layout/grid"
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
  title: "Healthcare Software Developer in Nigeria",
  description:
    "MB CoreX is a healthcare software developer in Nigeria — laboratory management systems, medical/clinic websites and patient-data software built with security and compliance readiness in mind.",
  path: "/healthcare-software",
})

const healthcareServiceJsonLd = serviceJsonLd({
  title: "Healthcare Software Development",
  description:
    "Laboratory management systems, clinic and diagnostics-center software, and healthcare-appropriate corporate websites, built with patient-data security as a first-class requirement.",
  slug: "healthcare-software",
  href: "/healthcare-software",
})

const builtItems = ["custom-software", "secure-development", "database-architecture", "compliance-readiness"]
  .map((slug) => services.find((service) => service.slug === slug)!)
  .map((service) => ({ icon: service.icon, title: service.title, description: service.shortDescription }))

const dataPrinciples = [
  { icon: Fingerprint, title: "Access Control by Role", description: "Nobody sees more patient data than their role requires — reviewed, not granted once and forgotten." },
  { icon: FileLock, title: "Encrypted Data Paths", description: "Data encrypted in transit and, where it matters, at rest — a default, not an add-on." },
  { icon: ShieldCheck, title: "Auditable by Design", description: "Every edit to a record is logged and versioned, so you can answer who did what, and when." },
]

const processEntries = [
  { title: "Map the Real Workflow", description: "We walk through how staff actually handle patients and data today, on paper or in your current system, before designing anything." },
  { title: "Design for Trust", description: "Access control and audit logging are treated as core architecture decisions, not a pre-launch checklist item." },
  { title: "Migrate Incrementally", description: "High-friction, high-error steps ship first so staff build trust in the system before a full cutover." },
  { title: "Support Post-Launch", description: "Healthcare software doesn't get to break quietly — we stay on for monitoring and support after launch." },
]

const faqItems = [
  {
    question: "Do you build software that meets healthcare data-protection expectations?",
    answer:
      "Yes — access control, encryption and audit logging are treated as core architecture requirements on any project handling patient or health-adjacent data, built toward recognized frameworks like NIST 800-53, not bolted on after the fact.",
  },
  {
    question: "Can you build a laboratory or hospital management system?",
    answer:
      "Yes — DiagSync is a live example: a diagnostic workflow system covering patient intake, lab results, reporting, staff routing and revenue tracking in one platform.",
  },
  {
    question: "How do you handle patient data security specifically?",
    answer:
      "Role-based access control, encrypted data paths, and audit logging on every record edit — designed in from the first architecture decision, since retrofitting these into a healthcare-adjacent system later is far riskier and more expensive.",
  },
  {
    question: "Can you build a website for a clinic or diagnostic center?",
    answer:
      "Yes — Reene Medical Diagnostics is a live example: a responsive, healthcare-appropriate corporate website built to earn patient trust from the first visit.",
  },
]

export default function HealthcareSoftwarePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Healthcare Software", path: "/healthcare-software" }])} />
      <JsonLd data={healthcareServiceJsonLd} />
      <JsonLd data={faqJsonLd(faqItems)} />

      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Healthcare Software" }]} />}
        eyebrow="Healthcare Software in Nigeria"
        title={[
          "Software built for the realities",
          <Accent key="accent" tone="brand">of healthcare data.</Accent>,
        ]}
        description="MB CoreX is a healthcare software developer in Nigeria — laboratory systems, clinic websites and patient-data software built with security as a first-class requirement."
        actions={[{ label: "Book a Consultation", href: "/contact" }]}
        image={{
          srcLight: "/images/reenemedicallandingpage.png",
          position: "50% top",
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
              Data Handling Principles We Build On
            </Heading>
            <Text tone="muted" className="mt-3">
              Presented as engineering practice we apply, not a claimed certification.
            </Text>
          </div>
        </Reveal>
        <FeatureGrid cols={3} items={dataPrinciples} />
      </Section>

      <Section glow="center">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <Caption className="text-primary">Proven in Regulated, Data-Sensitive Environments</Caption>
            <Heading level={2} size="xl">
              Two Healthcare Builds, Two Different Problems Solved
            </Heading>
            <Text tone="muted" size="lg" className="max-w-xl">
              A full diagnostic workflow system, and a trust-first corporate website — both built for
              healthcare providers who couldn&apos;t afford to get data handling wrong.
            </Text>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <RubberButton variant="outline" size="lg" render={<Link href="/portfolio/diagsync" />}>
                DiagSync Case Study <ArrowUpRight className="size-4" aria-hidden="true" />
              </RubberButton>
              <RubberButton variant="outline" size="lg" render={<Link href="/portfolio/reene-medical-diagnostics" />}>
                Reene Medical Case Study <ArrowUpRight className="size-4" aria-hidden="true" />
              </RubberButton>
            </div>
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

      <Section spacing="tight">
        <Grid cols={2} gap="lg">
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-6">
              <Caption className="text-primary">Laboratory Management</Caption>
              <Heading level={3} size="sm" className="mt-2">
                DiagSync
              </Heading>
              <Text size="sm" tone="muted" className="mt-2">
                Patient records, lab workflow, medical reports, inventory and automation in one system.
              </Text>
              <Link href="/portfolio/diagsync" className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-medium text-primary hover:underline">
                View case study <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal variant="fade">
            <div className="rounded-xl border border-border bg-card p-6">
              <Caption className="text-primary">Corporate Website</Caption>
              <Heading level={3} size="sm" className="mt-2">
                Reene Medical Diagnostics
              </Heading>
              <Text size="sm" tone="muted" className="mt-2">
                A professional, responsive corporate website built to earn patient trust from the first visit.
              </Text>
              <Link href="/portfolio/reene-medical-diagnostics" className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-medium text-primary hover:underline">
                View case study <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </Grid>
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
        <RelatedServices currentHref="/healthcare-software" />
      </Section>

      <CTABanner
        image="systems"
        heading="Building Software for a Healthcare or Diagnostics Business?"
        description="Book a free consultation and let's talk through your data-handling requirements."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
      <StickyMobileCta label="Book a Consultation" />
    </>
  )
}

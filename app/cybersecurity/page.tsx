import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Fingerprint, Lock, Network, Radar, ScanEye, ShieldCheck } from "lucide-react"

import { Section } from "@/components/layout/section"
import { SplitLayout } from "@/components/layout/split-layout"
import { BackgroundHero } from "@/components/layout/background-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text, Caption } from "@/components/typography/typography"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { ProcessTimeline } from "@/components/sections/timeline"
import { CTABanner } from "@/components/sections/cta-banner"
import { StickyMobileCta } from "@/components/sections/sticky-mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"

import { founder } from "@/content/about"
import { getServicesByCategory } from "@/content/services"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Cybersecurity",
  description:
    "MB CoreX cybersecurity services: secure software development, risk assessments, security audits, and compliance readiness for NIST and SOC 2 frameworks.",
  path: "/cybersecurity",
})

const capabilities = [
  { icon: Radar, title: "Risk Assessment & Management", description: "Structured review of your systems to identify where risk actually lives." },
  { icon: ShieldCheck, title: "Security Policies & Procedures", description: "Practical documentation your team can actually follow day to day." },
  { icon: Award, title: "Compliance & Audit Support", description: "Readiness work for NIST 800-53 Rev 5, NIST 171 and SOC 2 Type II expectations." },
  { icon: ScanEye, title: "Security Awareness & Audits", description: "A methodical look at application, infrastructure and access-control posture." },
  { icon: Network, title: "Secure Network Architecture", description: "Networks designed around least-privilege access and monitoring by default." },
  { icon: Lock, title: "Secure Cloud & APIs", description: "Encrypted data paths and hardened configuration, not bolted-on after launch." },
]

const processSteps = [
  { title: "Assess", description: "We review your systems, processes and existing controls against relevant frameworks." },
  { title: "Prioritize", description: "Findings are ranked by real business impact, not just severity score." },
  { title: "Remediate", description: "We implement or guide fixes, from secure coding changes to policy documentation." },
  { title: "Verify", description: "We re-check remediated areas and document readiness for audits or reviews." },
]

const sdlcPhases = [
  { title: "Plan", description: "Security requirements and data-sensitivity classification are scoped alongside product requirements, not after them." },
  { title: "Design", description: "Threat modeling identifies trust boundaries and likely attack paths before a line of implementation code exists." },
  { title: "Develop", description: "Secure coding practices — input validation, parameterized queries, least-privilege access — applied as the default, not a later cleanup pass." },
  { title: "Test", description: "Security-focused test cases and dependency/vulnerability scanning run alongside functional testing, not as a separate final gate." },
  { title: "Deploy", description: "Secrets, access control and infrastructure configuration are reviewed as part of every release, not just the first one." },
  { title: "Monitor", description: "Logging and alerting are in place post-launch so issues are caught in production, not discovered by a client first." },
]

const securityByDesignConcepts = [
  {
    icon: ShieldCheck,
    title: "Secure Coding",
    description: "Input validation, output encoding, parameterized queries and least-privilege access applied as defaults throughout the codebase, not bolted on before launch.",
  },
  {
    icon: Radar,
    title: "Threat Modeling",
    description: "Before we build, we ask what could go wrong — mapping trust boundaries, data flows and likely attack paths so design decisions account for them from the start.",
  },
  {
    icon: Lock,
    title: "Defense in Depth",
    description: "No single control is trusted to catch everything — authentication, authorization, encryption and monitoring are layered so one failure doesn't mean total exposure.",
  },
]

export default function CybersecurityPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Cybersecurity", path: "/cybersecurity" }])} />

      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cybersecurity" }]} />
      </Section>

      <BackgroundHero
        minHeightClass="lg:min-h-[620px]"
        scrim="light"
        background={
          <Image
            src="/images/Background3.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[58%_center]"
          />
        }
      >
        <Reveal>
          <Caption className="text-primary">Cybersecurity</Caption>
          <Heading level={1} size="xl" className="mt-4">
            Security Built Into Everything
          </Heading>
          <Text tone="muted" className="mt-4 max-w-md">
            We help businesses implement and align with industry-standard security frameworks to protect
            what matters most — applied as practice, built into how we develop, not sold as a certificate.
          </Text>
          <Button variant="cta" size="lg" className="mt-8" render={<Link href="/contact" />}>
            Secure Your Business
          </Button>
        </Reveal>
      </BackgroundHero>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              What We Cover
            </Heading>
          </div>
        </Reveal>
        <FeatureGrid cols={3} items={capabilities} />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Frameworks We Build Toward
            </Heading>
            <Text tone="muted" className="mt-3">
              Presented as working knowledge applied to how we build and advise — not a claimed certification.
            </Text>
          </div>
        </Reveal>
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {["NIST 800-53 Rev 5", "SOC 2 Type II", "NIST 171", "ISO/IEC 27001 Practices"].map((framework) => (
            <div key={framework} className="flex items-center justify-center rounded-xl border border-border bg-card p-5 text-center text-body-sm font-medium text-foreground">
              {framework}
            </div>
          ))}
        </div>
      </Section>

      <BackgroundHero
        scrim="full"
        background={
          <Image
            src="/images/SecureDevelopmentLifecycle.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[62%_center]"
          />
        }
      >
        <div className="w-full">
          <Reveal>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <Heading level={2} size="xl">
                Secure Development Lifecycle
              </Heading>
              <Text tone="muted" className="mt-3">
                Security isn&apos;t a gate at the end of the build — it&apos;s a consideration at every phase.
              </Text>
            </div>
          </Reveal>
          <ProcessTimeline entries={sdlcPhases} />
        </div>
      </BackgroundHero>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Security by Design
            </Heading>
            <Text tone="muted" className="mt-3">
              Three principles that shape every architecture decision we make.
            </Text>
          </div>
        </Reveal>
        <FeatureGrid cols={3} items={securityByDesignConcepts} />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              How We Assess &amp; Remediate
            </Heading>
          </div>
        </Reveal>
        <ProcessTimeline entries={processSteps} />
      </Section>

      <Section>
        <SplitLayout
          start={
            <Reveal>
              <Heading level={2} size="lg">
                Applied Knowledge, Not a Certification Claim
              </Heading>
              <Text tone="muted" className="mt-4 max-w-md">
                Founder Martin Blaze brings hands-on knowledge across the following areas to every security
                engagement:
              </Text>
            </Reveal>
          }
          end={
            <Reveal variant="fade">
              <ul className="flex flex-col gap-2.5">
                {founder.knowledgeAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-body-sm text-foreground">
                    <Fingerprint className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {area}
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
          cols={3}
          items={getServicesByCategory("Cybersecurity")
            .slice(0, 6)
            .map((service) => ({ icon: service.icon, title: service.title, description: service.shortDescription }))}
        />
      </Section>

      <CTABanner
        heading="Ready to Secure Your Business?"
        description="Book a consultation and let's talk through your current risk posture."
        primaryLabel="Secure Your Business"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
      <StickyMobileCta label="Secure Your Business" />
    </>
  )
}

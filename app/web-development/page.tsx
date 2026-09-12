import type { Metadata } from "next"
import Link from "next/link"
import { Search } from "lucide-react"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { SplitLayout } from "@/components/layout/split-layout"
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
  title: "Web Development Company in Nigeria",
  description:
    "MB CoreX is a web development company in Nigeria building fast, responsive websites and web applications — from marketing sites to custom-built platforms, SEO-first and mobile-first by default.",
  path: "/web-development",
})

const webService = services.find((service) => service.slug === "web-applications")!

const builtItems = ["web-applications", "dashboards", "api-development", "database-architecture"]
  .map((slug) => services.find((service) => service.slug === slug)!)
  .map((service) => ({ icon: service.icon, title: service.title, description: service.shortDescription }))

const seoPoints = [
  "Semantic HTML and fast Core Web Vitals, not just a good-looking Lighthouse score",
  "Metadata, structured data and canonical URLs handled by default on every page",
  "Mobile-first responsive layouts that hold up on real devices, not just a browser resize",
  "Content structured around what people actually search for, not just what looks good",
]

const processEntries = [
  { title: "Discovery", description: "We map what the site needs to do for visitors and for search before any design work starts." },
  { title: "Design & Build", description: "Responsive, SEO-first pages built with Next.js, optimized images and clean semantic markup." },
  { title: "Launch", description: "Performance, accessibility and metadata are verified before the site goes live, not after." },
  { title: "Support", description: "Ongoing updates and monitoring so the site keeps performing after handover." },
]

const faqItems = [
  {
    question: "How much does website development cost in Nigeria?",
    answer:
      "It depends on scope — a marketing site is a different build than a custom web application with a database and admin panel. We scope every project after a discovery call so the estimate reflects your actual requirements, not a generic package price.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A focused marketing site typically takes a few weeks; a more complex web application with custom functionality takes longer. We give you a realistic timeline once scope is defined during discovery.",
  },
  {
    question: "Do you build custom websites or use templates?",
    answer:
      "We build custom — templates fight you the moment your business doesn't match their assumptions. Every site is built around your actual content, brand and workflow.",
  },
  {
    question: "Can you redesign our existing website?",
    answer:
      "Yes. We can rebuild an existing site on modern architecture while preserving what's already working for you — your content, your rankings, your brand — and fixing what isn't.",
  },
]

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Web Development", path: "/web-development" }])} />
      <JsonLd data={serviceJsonLd(webService)} />
      <JsonLd data={faqJsonLd(faqItems)} />

      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Web Development" }]} />}
        eyebrow="Web Development in Nigeria"
        title={[
          "Websites and web apps",
          <Accent key="accent" tone="brand">built to perform.</Accent>,
        ]}
        description="MB CoreX is a web development company in Nigeria building fast, responsive websites and web applications — from marketing sites to fully custom platforms."
        actions={[{ label: "Book a Consultation", href: "/contact" }]}
        image={{
          srcLight: "/images/UIUX.png",
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

      <Section glow="center">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <Caption className="text-primary">Real Websites, Real Results</Caption>
            <Heading level={2} size="xl">
              Built for a Healthcare Provider That Needed to Be Trusted Instantly
            </Heading>
            <Text tone="muted" size="lg" className="max-w-xl">
              Reene Medical Diagnostics had no professional digital presence. We built a responsive,
              healthcare-appropriate corporate website that earns trust from the first visit.
            </Text>
            <RubberButton variant="outline" size="lg" className="mt-2" render={<Link href="/portfolio/reene-medical-diagnostics" />}>
              View the Case Study
            </RubberButton>
          </div>
        </Reveal>
      </Section>

      <Section>
        <SplitLayout
          start={
            <Reveal>
              <Heading level={2} size="lg">
                Built for Search, Not Just Screenshots
              </Heading>
              <Text tone="muted" className="mt-4 max-w-md">
                A website that looks good in a portfolio but doesn&apos;t rank or convert isn&apos;t doing its
                job. SEO and performance are treated as launch requirements, not a follow-up task.
              </Text>
            </Reveal>
          }
          end={
            <Reveal variant="fade">
              <ul className="flex flex-col gap-3">
                {seoPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-body-sm text-foreground">
                    <Search className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
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
        <RelatedServices currentHref="/web-development" />
      </Section>

      <CTABanner
        heading="Ready to Build a Website That Works?"
        description="Book a free consultation and let's talk through what your site needs to do."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
      <StickyMobileCta label="Book a Consultation" />
    </>
  )
}

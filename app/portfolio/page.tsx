import type { Metadata } from "next"

import { Section } from "@/components/layout/section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text, Caption } from "@/components/typography/typography"
import { Reveal } from "@/components/motion/reveal"
import { CTABanner } from "@/components/sections/cta-banner"
import { PortfolioFilterGrid } from "@/components/sections/portfolio/portfolio-filter-grid"
import { JsonLd } from "@/components/seo/json-ld"

import { portfolioProjects } from "@/content/portfolio"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Explore MB CoreX's portfolio — DiagSync, Batamart and Reene Medical Diagnostics — real software built for real businesses.",
  path: "/portfolio",
})

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])} />

      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
      </Section>

      <Section spacing="tight">
        <Reveal>
          <Caption className="text-primary">Our Work</Caption>
          <Heading level={1} size="xl" className="mt-4 max-w-2xl">
            Solutions We&apos;ve Built
          </Heading>
          <Text tone="muted" className="mt-4 max-w-xl">
            We build products that solve real problems and create real impact — filter by category to explore.
          </Text>
        </Reveal>
      </Section>

      <Section>
        <PortfolioFilterGrid projects={portfolioProjects} />
      </Section>

      <CTABanner
        heading="Have a Project in Mind?"
        description="Let's talk about what we could build for your business."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  )
}

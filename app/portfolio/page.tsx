import type { Metadata } from "next"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Accent } from "@/components/typography/typography"
import { CTABanner } from "@/components/sections/cta-banner"
import { PortfolioFilterGrid } from "@/components/sections/portfolio/portfolio-filter-grid"
import { JsonLd } from "@/components/seo/json-ld"

import { portfolioProjects } from "@/content/portfolio"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Software Development Portfolio — Nigeria",
  description:
    "Explore MB CoreX's software development portfolio — DiagSync, Batamart and Reene Medical Diagnostics — real custom software and healthcare software built for businesses in Nigeria.",
  path: "/portfolio",
})

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])} />

      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />}
        eyebrow="Our Work"
        title={[
          "Solutions",
          <Accent key="accent" tone="brand">we&apos;ve built.</Accent>,
        ]}
        description="We build products that solve real problems and create real impact — filter by category to explore."
        image={{
          srcLight: "/images/SolutionsLightmode.png",
          srcDark: "/images/Solutions.jpg",
          position: "62% center",
        }}
      />

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

import type { Metadata } from "next"
import Link from "next/link"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { Grid } from "@/components/layout/grid"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Accent } from "@/components/typography/typography"
import { Reveal, StaggerItem } from "@/components/motion/reveal"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { StatsBand } from "@/components/sections/stats-band"
import { CTABanner } from "@/components/sections/cta-banner"
import { JsonLd } from "@/components/seo/json-ld"

import { portfolioProjects } from "@/content/portfolio"
import { companyStats } from "@/content/stats"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Case Studies — Real Software Outcomes for Nigerian Businesses",
  description:
    "See real before-and-after outcomes from MB CoreX's software projects — DiagSync, Batamart and Reene Medical Diagnostics — the problem, the solution, the technology and the results.",
  path: "/case-studies",
})

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />

      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />}
        eyebrow="Case Studies"
        title={[
          "Real problems.",
          <Accent key="accent" tone="brand">Real solutions.</Accent>,
        ]}
        description="We don&apos;t just build. See how we take businesses from challenges to measurable results."
        image={{
          srcLight: "/images/RealProblemsRealSolutions.png",
          position: "62% center",
        }}
      />

      <Section spacing="tight">
        <StatsBand stats={companyStats} />
      </Section>

      <Section>
        <Reveal stagger>
          <Grid cols={2} gap="lg">
            {portfolioProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <Link href={`/portfolio/${project.slug}`} className="block h-full">
                  <CaseStudyCard title={project.title} image={project.image} before={project.before} after={project.after} />
                </Link>
              </StaggerItem>
            ))}
          </Grid>
        </Reveal>
      </Section>

      <CTABanner
        heading="Ready to Be Our Next Case Study?"
        description="Tell us about your business problem — we'll tell you how we'd solve it."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="View Full Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  )
}

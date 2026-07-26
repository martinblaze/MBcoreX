import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Section } from "@/components/layout/section"
import { BackgroundHero } from "@/components/layout/background-hero"
import { Grid } from "@/components/layout/grid"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text, Caption } from "@/components/typography/typography"
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

      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
      </Section>

      <BackgroundHero
        scrim="light"
        background={
          <Image
            src="/images/RealProblemsRealSolutions.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[62%_center]"
          />
        }
      >
        <Reveal>
          <Caption className="text-primary">Case Studies</Caption>
          <Heading level={1} size="xl" className="mt-4 max-w-2xl">
            Real Problems. Real Solutions.
          </Heading>
          <Text tone="muted" className="mt-4 max-w-xl">
            We don&apos;t just build. See how we take businesses from challenges to measurable results.
          </Text>
        </Reveal>
      </BackgroundHero>

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

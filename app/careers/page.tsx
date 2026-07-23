import type { Metadata } from "next"
import { Briefcase } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text, Caption } from "@/components/typography/typography"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { EmptyState } from "@/components/feedback/states"
import { CTABanner } from "@/components/sections/cta-banner"

import { values } from "@/content/about"
import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "MB CoreX is a growing software engineering and cybersecurity practice — here's what working with us looks like.",
  path: "/careers",
})

export default function CareersPage() {
  return (
    <>
      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
      </Section>
      <Section spacing="tight">
        <Caption className="text-primary">Careers</Caption>
        <Heading level={1} size="xl" className="mt-4 max-w-2xl">
          Build With Us
        </Heading>
        <Text tone="muted" className="mt-4 max-w-xl">
          MB CoreX is a growing practice. We work with collaborators who share the same standard: engineering
          quality and security are not optional extras.
        </Text>
      </Section>
      <Section>
        <Heading level={2} size="lg" className="mb-8">
          What We Value
        </Heading>
        <FeatureGrid cols={4} items={values} />
      </Section>
      <Section>
        <EmptyState
          icon={Briefcase}
          title="No open roles right now"
          description={`We're not actively hiring, but we're always open to hearing from strong engineers. Reach out at ${siteConfig.email}.`}
        />
      </Section>
      <CTABanner
        heading="Think You'd Be a Good Fit?"
        description="Send us a message — we review every inquiry."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  )
}

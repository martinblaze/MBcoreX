import type { Metadata } from "next"
import Image from "next/image"

import { Section } from "@/components/layout/section"
import { SplitLayout } from "@/components/layout/split-layout"
import { BackgroundHero } from "@/components/layout/background-hero"
import { Grid } from "@/components/layout/grid"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Display, Heading, Text, Caption } from "@/components/typography/typography"
import { Reveal } from "@/components/motion/reveal"
import { StatsBand } from "@/components/sections/stats-band"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { Timeline } from "@/components/sections/timeline"
import { CTABanner } from "@/components/sections/cta-banner"
import { TechCard } from "@/components/cards/tech-card"
import { JsonLd } from "@/components/seo/json-ld"

import { founder, mission, vision, values, aiApproach, timeline, technologies } from "@/content/about"
import { companyStats } from "@/content/stats"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "About MB CoreX",
  description:
    "MB CoreX is building technology and securing futures — learn about our mission, founder Martin Blaze, and how we combine engineering with security expertise.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      </Section>

      <BackgroundHero
        background={
          <Image
            src="/images/Background2.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[72%_center]"
          />
        }
      >
        <Reveal>
          <Caption className="text-primary">About MB CoreX</Caption>
          <Display as="h1" size="lg" className="mt-4">
            Building Technology.{" "}
            <span className="text-primary">Securing Futures.</span>
          </Display>
          <Text tone="muted" className="mt-6 max-w-lg">
            Technology is more than code. It&apos;s about solving real problems, protecting valuable data, and
            empowering people to do more. At MB CoreX, we combine innovation and security to deliver solutions
            that drive growth and build trust.
          </Text>
        </Reveal>
      </BackgroundHero>

      <Section spacing="tight">
        <StatsBand stats={companyStats} />
      </Section>

      <Section>
        <Grid cols={2} gap="lg">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <Heading level={2} size="md">
                Our Mission
              </Heading>
              <Text tone="muted" className="mt-3">
                {mission}
              </Text>
            </div>
          </Reveal>
          <Reveal variant="fade">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <Heading level={2} size="md">
                Our Vision
              </Heading>
              <Text tone="muted" className="mt-3">
                {vision}
              </Text>
            </div>
          </Reveal>
        </Grid>
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Core Values
            </Heading>
          </div>
        </Reveal>
        <FeatureGrid cols={4} items={values} />
      </Section>

      <Section glow="center">
        <SplitLayout
          start={
            <Reveal>
              <Heading level={2} size="lg">
                Meet the Founder
              </Heading>
              <Heading level={3} size="sm" className="mt-4 text-primary">
                {founder.name}
              </Heading>
              <Text tone="muted" className="mt-1">
                {founder.role}
              </Text>
              <Text className="mt-4 max-w-xl">{founder.bio}</Text>
            </Reveal>
          }
          end={
            <Reveal variant="fade">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <Heading level={4} size="xs" className="mb-4 uppercase tracking-wide text-muted-foreground">
                  Knowledge & Expertise
                </Heading>
                <ul className="flex flex-col gap-2.5">
                  {founder.knowledgeAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-body-sm text-foreground">
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          }
        />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              AI-Assisted, Human-Reviewed
            </Heading>
            <Text tone="muted" className="mt-3">
              {aiApproach.description}
            </Text>
          </div>
        </Reveal>
        <Grid cols={4}>
          {aiApproach.points.map((point) => (
            <div key={point} className="rounded-xl border border-border bg-card p-5 text-body-sm text-foreground">
              {point}
            </div>
          ))}
        </Grid>
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Our Journey
            </Heading>
          </div>
        </Reveal>
        <Timeline entries={timeline} />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Technologies We Use
            </Heading>
          </div>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <TechCard key={tech} name={tech} />
          ))}
        </div>
      </Section>

      <CTABanner
        heading="Let's Build Something Great Together"
        description="Have a project in mind or need advice? We'd love to hear from you."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/portfolio"
      />
    </>
  )
}

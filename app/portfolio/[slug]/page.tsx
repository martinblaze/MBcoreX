import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Crown, ShieldCheck, Target, Wrench } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Grid } from "@/components/layout/grid"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text, Caption } from "@/components/typography/typography"
import { RubberButton } from "@/components/ui/rubber-button"
import { Reveal } from "@/components/motion/reveal"
import { TechStackBadges } from "@/components/sections/tech-stack"
import { CTABanner } from "@/components/sections/cta-banner"
import { StickyMobileCta } from "@/components/sections/sticky-mobile-cta"
import { ProjectGallery } from "@/components/sections/portfolio/project-gallery"
import { LivePreview } from "@/components/sections/live-preview"
import { ProcessTimeline } from "@/components/sections/timeline"
import { TestimonialCard } from "@/components/cards/testimonial-card"
import { JsonLd } from "@/components/seo/json-ld"

import { portfolioProjects, getPortfolioProject, getAdjacentProjects } from "@/content/portfolio"
import { testimonials } from "@/content/testimonials"
import { buildMetadata, breadcrumbJsonLd, caseStudyJsonLd } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getPortfolioProject(slug)
  if (!project) return {}

  return buildMetadata({
    title: project.seoTitle,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
    image: { url: `https://mbcorex.com${project.image}`, width: 1433, height: 1099, alt: project.title },
  })
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getPortfolioProject(slug)
  if (!project) notFound()

  const otherProjects = portfolioProjects.filter((item) => item.slug !== project.slug)
  const { previous, next } = getAdjacentProjects(project.slug)
  const testimonial = testimonials.find((item) => item.company === project.title)
  // A live URL is not enough — the target must also permit framing, or the
  // browser renders a blank box with no way for us to detect it.
  const canEmbed = Boolean(project.livePreviewHref) && project.embeddable !== false

  const processEntries = [
    { title: "Discovery", description: project.discoveryProcess },
    { title: "Design", description: project.designProcess },
    { title: "Development", description: project.developmentProcess },
    { title: "Security Considerations", description: project.securityConsiderations },
  ]

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${project.slug}` },
        ])}
      />
      <JsonLd data={caseStudyJsonLd(project)} />

      <Section spacing="tight" className="pt-32 lg:pt-40">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }, { label: project.title }]}
        />
      </Section>

      <Section spacing="tight">
        <Reveal>
          <Caption className="text-primary">
            {project.category} · {project.industry}
          </Caption>
          <Heading level={1} size="xl" className="mt-4 max-w-2xl">
            {project.seoTitle}
          </Heading>
          <Text tone="muted" className="mt-4 max-w-xl">
            {project.summary}
          </Text>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.livePreviewHref && (
              <RubberButton variant="cta" render={<a href={project.livePreviewHref} target="_blank" rel="noopener noreferrer" />}>
                Live Preview <ArrowUpRight className="size-4" aria-hidden="true" />
              </RubberButton>
            )}
            <RubberButton variant="outline" render={<Link href="/contact" />}>
              Start a Similar Project
            </RubberButton>
          </div>
        </Reveal>
      </Section>

      {/* Live embed where the product allows framing; otherwise the screenshot
          carousel, which shows more of the product than a single frozen frame
          would. */}
      <Section spacing="tight">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="lg">
              {canEmbed ? "Try It Live" : "A Closer Look"}
            </Heading>
            <Text tone="muted" className="mt-2">
              {canEmbed
                ? `${project.title} running in production — click into the screen and use it right here.`
                : `Real screens from ${project.title}, in production.`}
            </Text>
          </div>
        </Reveal>
        <Reveal variant="fade">
          {canEmbed ? (
            <div className="mx-auto max-w-5xl">
              <LivePreview
                src={project.livePreviewHref!}
                name={project.title}
                fallbackImage={project.gallery[0] ?? project.image}
                // The embed is the point of this section, so skip the shield.
                eager
              />
            </div>
          ) : (
            <ProjectGallery images={project.gallery} alt={project.title} />
          )}
        </Reveal>
      </Section>

      <Section>
        <Grid cols={2} gap="lg">
          <Reveal>
            <div className="flex items-center gap-2">
              <Target className="size-5 text-primary" aria-hidden="true" />
              <Heading level={2} size="md">
                The Problem
              </Heading>
            </div>
            <Text tone="muted" className="mt-3">
              {project.problem}
            </Text>
          </Reveal>
          <Reveal variant="fade">
            <div className="flex items-center gap-2">
              <Wrench className="size-5 text-primary" aria-hidden="true" />
              <Heading level={2} size="md">
                The Solution
              </Heading>
            </div>
            <Text tone="muted" className="mt-3">
              {project.solution}
            </Text>
          </Reveal>
        </Grid>
      </Section>

      <Section>
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <Heading level={2} size="lg">
              How We Got There
            </Heading>
            <Text tone="muted" className="mt-2">
              From discovery through to the security considerations built into the architecture.
            </Text>
          </div>
        </Reveal>
        <ProcessTimeline entries={processEntries} />
      </Section>

      <Section spacing="tight">
        <Reveal>
          <div className="flex items-center gap-2">
            <Crown className="size-5 text-primary" aria-hidden="true" />
            <Heading level={2} size="md">
              AI Tools Used During Development
            </Heading>
          </div>
          <Text tone="muted" className="mt-2 max-w-xl">
            AI accelerated parts of the build — every output stayed under human review.
          </Text>
        </Reveal>
        <Reveal stagger className="mt-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.aiToolsUsed.map((tool) => (
              <li key={tool} className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4 text-body-sm text-foreground">
                <Crown className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal>
          <Heading level={2} size="md" className="mb-4">
            Technology
          </Heading>
          <TechStackBadges items={project.stack.map((name) => ({ name }))} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Heading level={2} size="md" className="mb-6">
            Results
          </Heading>
        </Reveal>
        <Reveal stagger>
          <Grid cols={3}>
            {project.results.map((result) => (
              <div key={result} className="flex items-start gap-2 rounded-xl border border-border bg-card p-5">
                <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                <Text size="sm">{result}</Text>
              </div>
            ))}
          </Grid>
        </Reveal>
      </Section>

      <Section>
        <Grid cols={2} gap="lg">
          <Reveal>
            <Caption className="text-error-500">Before</Caption>
            <ul className="mt-3 flex flex-col gap-2">
              {project.before.map((item) => (
                <li key={item} className="text-body-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="fade">
            <Caption className="text-success">After</Caption>
            <ul className="mt-3 flex flex-col gap-2">
              {project.after.map((item) => (
                <li key={item} className="text-body-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Grid>
      </Section>

      {testimonial && (
        <Section spacing="tight" containerWidth="narrow">
          <Reveal>
            <TestimonialCard {...testimonial} />
          </Reveal>
        </Section>
      )}

      <Section spacing="tight">
        <Reveal>
          <div className="flex items-center gap-2 text-body-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            Security-conscious engineering applied throughout — see our{" "}
            <Link href="/cybersecurity" className="text-primary underline-offset-4 hover:underline">
              cybersecurity approach
            </Link>
            .
          </div>
        </Reveal>
      </Section>

      <Section spacing="tight" fullBleed>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 sm:px-8 sm:grid-cols-2 lg:px-10">
          <Link
            href={`/portfolio/${previous.slug}`}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
          >
            <ArrowLeft className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
            <div>
              <Caption>Previous Project</Caption>
              <Text className="mt-0.5 font-medium">{previous.title}</Text>
            </div>
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex items-center justify-end gap-3 rounded-xl border border-border bg-card p-5 text-right transition-colors hover:border-primary/30"
          >
            <div>
              <Caption>Next Project</Caption>
              <Text className="mt-0.5 font-medium">{next.title}</Text>
            </div>
            <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {otherProjects.length > 0 && (
        <Section>
          <Reveal>
            <Heading level={2} size="lg" className="mb-8">
              Related Case Studies
            </Heading>
          </Reveal>
          <Grid cols={2} gap="lg">
            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div>
                  <Heading level={3} size="sm">
                    {item.title}
                  </Heading>
                  <Text size="sm" tone="muted" className="mt-1">
                    {item.category}
                  </Text>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </Link>
            ))}
          </Grid>
        </Section>
      )}

      <CTABanner
        heading="Let's Build Your Next Project"
        description="Tell us what you're working on — we'll follow up within one business day."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
      />
      <StickyMobileCta label="Start a Similar Project" />
    </>
  )
}

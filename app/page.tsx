import type { Metadata } from "next"
import Link from "next/link"
import dynamic from "next/dynamic"
import { BrainCircuit, ScanEye } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { ThemedImage } from "@/components/layout/themed-image"
import { Accent, Caption, Heading, Text } from "@/components/typography/typography"
import { HeroHome } from "@/components/sections/home/hero-home"
import { StatsBand } from "@/components/sections/stats-band"
import { ServiceIndex } from "@/components/sections/service-index"
import { WorkShowcase } from "@/components/sections/work-showcase"
import { ProcessStack } from "@/components/sections/process-stack"
import { FAQAccordion } from "@/components/sections/faq-accordion"
import { CTABanner } from "@/components/sections/cta-banner"
import { Reveal } from "@/components/motion/reveal"
import { Parallax } from "@/components/motion/parallax"
import { ScrollHighlight } from "@/components/motion/scroll-highlight"
import { VelocityMarquee } from "@/components/motion/velocity-marquee"
import { MaskRevealInView } from "@/components/motion/mask-reveal"
import { RubberButton } from "@/components/ui/rubber-button"
import { JsonLd } from "@/components/seo/json-ld"
import { Skeleton } from "@/components/ui/skeleton"

// embla-carousel is a meaningful chunk of JS for a single below-the-fold
// section — split it into its own async chunk instead of the main bundle.
const TestimonialCarousel = dynamic(
  () => import("@/components/sections/testimonial-carousel").then((mod) => mod.TestimonialCarousel),
  { loading: () => <Skeleton className="h-64 w-full" /> }
)

import { companyStats } from "@/content/stats"
import { portfolioProjects } from "@/content/portfolio"
import { processSteps } from "@/content/process"
import { testimonials } from "@/content/testimonials"
import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Software Development Company in Nigeria",
  description:
    "MB CoreX is a software development and cybersecurity company in Nigeria, building secure, scalable digital solutions — custom software, SaaS, AI integrations and security audits — for businesses ready to grow.",
  path: "/",
})

/** Repeating credential strip in the scroll-geared marquee under the hero. */
const marqueeItems = [
  "Secure by design",
  "NIST 800-53 aligned",
  "SOC 2 readiness",
  "AI-accelerated delivery",
  "Full-stack engineering",
  "Cloud architecture",
]

const services = [
  {
    title: "Custom Software",
    description: "Bespoke, high-performance applications built around how your business actually works.",
    href: "/custom-software",
  },
  {
    title: "Web Development",
    description: "Modern, responsive marketing and corporate sites that convert.",
    href: "/web-development",
  },
  {
    title: "SaaS Platforms",
    description: "Scalable, multi-tenant products built secure from the first commit.",
    href: "/saas-development",
  },
  {
    title: "Cybersecurity",
    description: "Audits, compliance readiness and secure-by-design engineering.",
    href: "/cybersecurity",
  },
  {
    title: "AI Solutions",
    description: "Practical AI features integrated where they add real, measurable value.",
    href: "/ai-solutions",
  },
  {
    title: "Business Automation",
    description: "Workflow and process automation that gives your staff their time back.",
    href: "/business-automation",
  },
  {
    title: "Healthcare Software",
    description: "Lab and clinic systems built for genuinely sensitive data.",
    href: "/healthcare-software",
  },
]

const cybersecurityPoints = [
  "Secure Software Development",
  "Risk Assessments",
  "Security Audits",
  "NIST Framework Knowledge",
  "SOC 2 Readiness",
  "Security by Design",
]

const aiPoints = [
  "AI-assisted software development",
  "Faster delivery without cutting corners",
  "Improved productivity across the build",
  "Higher code quality through AI-assisted review",
  "Automation of repetitive engineering work",
  "Human oversight at every stage",
]

const faqItems = [
  {
    question: "What services does MB CoreX offer?",
    answer:
      "Custom software development, web and mobile apps, SaaS platforms, AI-assisted solutions, and cybersecurity consulting — from risk assessments to compliance readiness.",
  },
  {
    question: "Do you work with regulated or healthcare-adjacent industries?",
    answer:
      "Yes. DiagSync (laboratory management) and Reene Medical Diagnostics were both built with data handling and security top of mind.",
  },
  {
    question: "How does AI factor into how MB CoreX builds software?",
    answer:
      "We use modern AI-assisted development tools to move faster and automate repetitive work, while every architectural decision and final release stays under human review.",
  },
  {
    question: "Is MB CoreX certified in NIST or SOC 2?",
    answer:
      "MB CoreX is built on working knowledge of NIST 800-53 Rev 5, NIST 171 and SOC 2 Type II frameworks, applied to how we build and advise — this is presented as applied expertise, not a claimed certification.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free consultation and tell us about your project. We'll follow up within one business day to schedule a discovery call.",
  },
]

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MB CoreX | Software Development Company in Nigeria",
  description:
    "MB CoreX is a software development and cybersecurity company in Nigeria delivering secure, scalable digital solutions.",
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />

      <HeroHome />

      {/* Scroll-geared credential strip — a tonal rule between the hero and
          the body of the page. */}
      <div className="relative border-y border-border bg-surface-elevated py-5 text-foreground">
        <VelocityMarquee baseSpeed={1.5}>
          {marqueeItems.map((item) => (
            <span key={item} className="flex items-center">
              <span className="px-8 text-[11px] font-medium tracking-[0.18em] whitespace-nowrap uppercase">
                {item}
              </span>
              <span aria-hidden="true" className="size-1 shrink-0 rotate-45 bg-primary" />
            </span>
          ))}
        </VelocityMarquee>
      </div>

      {/* Manifesto — the statement block that inks in as you scroll. */}
      <Section spacing="loose">
        <Reveal variant="fade">
          <Caption className="mb-12 flex items-center gap-3 text-primary">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
            Who we are
          </Caption>
        </Reveal>
        <ScrollHighlight
          className="max-w-5xl font-display text-display-lg font-normal text-foreground"
          text="We are a software engineering and cybersecurity company that treats security as an architectural decision, not a checklist item. Every system we ship is built to scale, and built to hold."
          accent={["security", "scale", "hold"]}
        />
      </Section>

      <Section spacing="none">
        <StatsBand stats={companyStats} />
      </Section>

      {/* Services as an editorial index. */}
      <Section spacing="loose" id="services">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal variant="fade">
              <Caption className="mb-6 flex items-center gap-3 text-primary">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
                What we do
              </Caption>
            </Reveal>
            <Heading level={2} size="xl" className="max-w-xl">
              <MaskRevealInView lines={["Services built", "around outcomes."]} />
            </Heading>
          </div>
          <Reveal variant="fade">
            <RubberButton variant="outline" render={<Link href="/services" />}>
              All services
            </RubberButton>
          </Reveal>
        </div>

        <ServiceIndex items={services} />
      </Section>

      {/* Featured work — full-width parallax rows. */}
      <Section spacing="loose" tone="surface" curveTop="surface" curveBottom="background">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal variant="fade">
              <Caption className="mb-6 flex items-center gap-3 text-primary">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
                Selected work
              </Caption>
            </Reveal>
            <Heading level={2} size="xl" className="max-w-xl">
              <MaskRevealInView lines={["Real software,", "shipped and running."]} />
            </Heading>
          </div>
          <Reveal variant="fade">
            <RubberButton variant="outline" render={<Link href="/portfolio" />}>
              All projects
            </RubberButton>
          </Reveal>
        </div>

        <WorkShowcase
          items={portfolioProjects.map((project) => ({
            slug: project.slug,
            title: project.title,
            category: project.category,
            summary: project.summary,
            // Screenshot is the fallback only; the showcase embeds the running
            // product wherever the site allows framing.
            image: project.gallery[0] ?? project.image,
            liveHref: project.livePreviewHref,
            embeddable: project.embeddable,
            tags: project.tags,
          }))}
        />
      </Section>

      {/* Security band — content overlaps a full-bleed photograph. */}
      <FeatureBand
        eyebrow="Security"
        heading={
          <>
            Security built into <Accent tone="brand">everything</Accent>
          </>
        }
        body="We help businesses implement and align with industry-standard security frameworks to protect what matters most."
        points={cybersecurityPoints}
        icon="shield"
        cta={{ label: "Secure your business", href: "/cybersecurity" }}
        image={{
          srcLight: "/images/Background3Lightmode.png",
          srcDark: "/images/Background3.png",
          position: "58% center",
        }}
      />

      {/* AI band — mirrored. */}
      <FeatureBand
        align="end"
        eyebrow="AI Engineering"
        heading={
          <>
            Engineering at AI speed, <Accent tone="brand">without cutting corners</Accent>
          </>
        }
        body="MB CoreX uses modern AI-assisted development workflows to increase productivity and shorten time-to-market, while keeping engineering standards and human oversight at every stage."
        points={aiPoints}
        icon="ai"
        cta={{ label: "Explore AI solutions", href: "/ai-solutions" }}
        image={{
          srcLight: "/images/Background9Lightmode.png",
          srcDark: "/images/Background9.png",
          position: "30% center",
        }}
      />

      {/* Process — the scroll-driven stacking deck. */}
      <Section spacing="loose" tone="surface" curveTop="surface" curveBottom="background">
        <div className="mb-16 max-w-2xl">
          <Reveal variant="fade">
            <Caption className="mb-6 flex items-center gap-3 text-primary">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
              How we work
            </Caption>
          </Reveal>
          <Heading level={2} size="xl">
            <MaskRevealInView lines={["From first call", "to launch and beyond."]} />
          </Heading>
        </div>

        <ProcessStack
          entries={processSteps.map((step) => ({ title: step.title, description: step.description }))}
        />
      </Section>

      <Section spacing="loose">
        <div className="mb-16 max-w-2xl">
          <Reveal variant="fade">
            <Caption className="mb-6 flex items-center gap-3 text-primary">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
              Clients
            </Caption>
          </Reveal>
          <Heading level={2} size="xl">
            <MaskRevealInView lines={["What our clients say."]} />
          </Heading>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      <Section spacing="loose" id="faq">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal variant="fade">
              <Caption className="mb-6 flex items-center gap-3 text-primary">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
                FAQ
              </Caption>
            </Reveal>
            <Heading level={2} size="xl" className="lg:sticky lg:top-32">
              <MaskRevealInView lines={["Questions,", "answered."]} />
            </Heading>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </Section>

      <CTABanner
        image="build"
        heading="Ready to build something secure and scalable?"
        description={`Book a free discovery call, or reach us directly at ${siteConfig.email} / ${siteConfig.phone}.`}
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="Email Us"
        secondaryHref={`mailto:${siteConfig.email}`}
      />
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* Full-bleed feature band: a photograph with the copy panel overlapping it.  */
/* Local to the home page — the secondary pages use `PageHero` + `Section`.   */
/* -------------------------------------------------------------------------- */

function FeatureBand({
  eyebrow,
  heading,
  body,
  points,
  cta,
  image,
  icon,
  align = "start",
}: {
  eyebrow: string
  heading: React.ReactNode
  body: string
  points: string[]
  cta: { label: string; href: string }
  image: { srcLight: string; srcDark: string; position?: string }
  icon: "shield" | "ai"
  align?: "start" | "end"
}) {
  const Icon = icon === "shield" ? ScanEye : BrainCircuit

  return (
    <section className="grain relative isolate flex min-h-[90vh] items-center overflow-hidden py-28 lg:py-40">
      {/* The photograph drifts slower than the page, so the copy panel rides
          up over it rather than travelling with it. */}
      <div className="absolute inset-0 -z-20">
        <Parallax speed={10} fill className="absolute inset-x-0 -inset-y-[14%]">
          <div className="relative h-full w-full">
            <ThemedImage
              srcLight={image.srcLight}
              srcDark={image.srcDark}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: image.position ?? "center" }}
            />
          </div>
        </Parallax>
      </div>

      <div
        className={
          align === "end"
            ? "absolute inset-0 -z-10 bg-gradient-to-l from-background via-background/80 to-background/10"
            : "absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/10"
        }
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/70 via-transparent to-background/40" />

      <Container>
        <div className={align === "end" ? "flex justify-end" : ""}>
          <div className="max-w-lg">
            <Reveal variant="fade">
              <Caption className="mb-6 flex items-center gap-3 text-primary">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
                {eyebrow}
              </Caption>
            </Reveal>

            <Heading level={2} size="xl">
              <MaskRevealInView lines={[<span key="heading">{heading}</span>]} />
            </Heading>

            <Reveal variant="fade">
              <Text tone="muted" className="mt-6 text-pretty">
                {body}
              </Text>

              <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 bg-background/80 px-4 py-3.5 text-body-sm backdrop-blur-sm"
                  >
                    <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <RubberButton variant="cta" render={<Link href={cta.href} />}>
                  {cta.label}
                </RubberButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

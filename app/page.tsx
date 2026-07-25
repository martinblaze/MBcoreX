import type { Metadata } from "next"
import Link from "next/link"
import dynamic from "next/dynamic"
import {
  Award,
  BrainCircuit,
  Cloud,
  Code2,
  LayoutDashboard,
  Rocket,
  ScanEye,
  Shield,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from "lucide-react"

import { Section } from "@/components/layout/section"
import { BackgroundHero } from "@/components/layout/background-hero"
import { ThemedImage } from "@/components/layout/themed-image"
import { Grid } from "@/components/layout/grid"
import { Heading, Text } from "@/components/typography/typography"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/sections/hero"
import { HeroBackground } from "@/components/sections/home/hero-background"
import { LogoCloud } from "@/components/sections/logo-cloud"
import { StatsBand } from "@/components/sections/stats-band"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { ServiceCard } from "@/components/cards/service-card"
import { PortfolioCard } from "@/components/cards/portfolio-card"
import { TechStackBadges } from "@/components/sections/tech-stack"
import { ProcessTimeline } from "@/components/sections/timeline"
import { FAQAccordion } from "@/components/sections/faq-accordion"
import { CTABanner } from "@/components/sections/cta-banner"
import { Reveal } from "@/components/motion/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { Skeleton } from "@/components/ui/skeleton"

// embla-carousel is a meaningful chunk of JS for a single below-the-fold
// section — split it into its own async chunk instead of the main bundle.
const TestimonialCarousel = dynamic(
  () => import("@/components/sections/testimonial-carousel").then((mod) => mod.TestimonialCarousel),
  { loading: () => <Skeleton className="h-64 w-full rounded-xl" /> }
)

import { companyStats, logoCloud } from "@/content/stats"
import { portfolioProjects } from "@/content/portfolio"
import { processSteps } from "@/content/process"
import { testimonials } from "@/content/testimonials"
import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "MB CoreX — Secure Software Engineering & Cybersecurity",
  description:
    "MB CoreX is a software development and cybersecurity company delivering secure, scalable digital solutions for businesses ready to grow in a digital world.",
  path: "/",
})

const trustPoints = [
  { icon: Award, title: "3+ Years of Experience", description: "Real projects shipped and maintained, not just prototypes." },
  { icon: Rocket, title: "10+ Projects Delivered", description: "From student marketplaces to laboratory management systems." },
  { icon: Users, title: "Multiple Industries Served", description: "Healthcare, ecommerce and education, among others." },
  { icon: BrainCircuit, title: "AI-Powered Development", description: "AI-assisted workflows that increase speed without cutting corners." },
  { icon: ShieldCheck, title: "Secure-by-Design Approach", description: "Security considered at every stage, not bolted on after launch." },
  { icon: Zap, title: "Fast, Uncompromised Delivery", description: "Faster time-to-market without lowering our quality bar." },
]

const featuredServices = [
  { icon: Code2, title: "Software Development", description: "Custom, high-performance applications built for your business.", href: "/services#custom-software" },
  { icon: LayoutDashboard, title: "Web Development", description: "Modern, responsive websites that drive real results.", href: "/services#web-applications" },
  { icon: Smartphone, title: "Mobile Apps", description: "Cross-platform apps that feel native and perform fast.", href: "/services#mobile-apps" },
  { icon: Rocket, title: "SaaS Platforms", description: "Scalable, multi-tenant products built with security in mind.", href: "/services#saas-development" },
  { icon: BrainCircuit, title: "AI Solutions", description: "Practical AI features integrated where they add real value.", href: "/ai-solutions" },
  { icon: Shield, title: "Cybersecurity", description: "Audits, compliance readiness and secure-by-design engineering.", href: "/cybersecurity" },
  { icon: Cloud, title: "Cloud Infrastructure", description: "Secure, right-sized cloud architecture that scales with you.", href: "/services#cloud-infrastructure" },
  { icon: LayoutDashboard, title: "API Development", description: "Secure, documented APIs and third-party integrations.", href: "/services#api-development" },
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
    answer: "Custom software development, web and mobile apps, SaaS platforms, AI-assisted solutions, and cybersecurity consulting — from risk assessments to compliance readiness.",
  },
  {
    question: "Do you work with regulated or healthcare-adjacent industries?",
    answer: "Yes. DiagSync (laboratory management) and Reene Medical Diagnostics were both built with data handling and security top of mind.",
  },
  {
    question: "How does AI factor into how MB CoreX builds software?",
    answer: "We use modern AI-assisted development tools to move faster and automate repetitive work, while every architectural decision and final release stays under human review.",
  },
  {
    question: "Is MB CoreX certified in NIST or SOC 2?",
    answer: "MB CoreX is built on working knowledge of NIST 800-53 Rev 5, NIST 171 and SOC 2 Type II frameworks, applied to how we build and advise — this is presented as applied expertise, not a claimed certification.",
  },
  {
    question: "How do we get started?",
    answer: "Book a free consultation and tell us about your project. We'll follow up within one business day to schedule a discovery call.",
  },
]

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MB CoreX — Secure Software Engineering & Cybersecurity",
  description: "MB CoreX is a software development and cybersecurity company delivering secure, scalable digital solutions.",
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />

      <Hero
        eyebrow={siteConfig.tagline}
        heading={
          <>
            We Build Secure <span className="text-primary">Digital Solutions</span> That Scale.
          </>
        }
        subheading="MB CoreX is a software development and cybersecurity company delivering innovative, reliable and secure solutions for businesses ready to grow in a digital world."
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        background={<HeroBackground />}
      />

      <Section spacing="tight">
        <LogoCloud logos={logoCloud} />
      </Section>

      <Section spacing="tight">
        <StatsBand stats={companyStats} />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Why Businesses Trust MB CoreX
            </Heading>
            <Text tone="muted" className="mt-3">
              Software built by someone who thinks like a security engineer, not one who bolts security on afterward.
            </Text>
          </div>
        </Reveal>
        <FeatureGrid cols={3} items={trustPoints} />
      </Section>

      <Section>
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Heading level={2} size="xl">
                Featured Services
              </Heading>
              <Text tone="muted" className="mt-2 max-w-xl">
                End-to-end software and security services for businesses ready to build.
              </Text>
            </div>
            <Button variant="outline" render={<Link href="/services" />}>
              Explore Services
            </Button>
          </div>
        </Reveal>
        <Grid cols={4}>
          {featuredServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </Grid>
      </Section>

      <Section>
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Heading level={2} size="xl">
                Featured Work
              </Heading>
              <Text tone="muted" className="mt-2 max-w-xl">
                Real software, shipped for real businesses.
              </Text>
            </div>
            <Button variant="outline" render={<Link href="/portfolio" />}>
              View All Projects
            </Button>
          </div>
        </Reveal>
        <Grid cols={3}>
          {portfolioProjects.map((project) => (
            <PortfolioCard
              key={project.slug}
              title={project.title}
              category={project.category}
              description={project.summary}
              image={project.image}
              logo={project.logo}
              href={`/portfolio/${project.slug}`}
            />
          ))}
        </Grid>
        <div className="mt-8">
          <TechStackBadges items={["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Stripe"].map((name) => ({ name }))} />
        </div>
      </Section>

      <BackgroundHero
        scrim="light"
        minHeightClass="lg:min-h-[620px]"
        background={
          <ThemedImage
            srcLight="/images/Background3Lightmode.png"
            srcDark="/images/Background3.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[58%_center]"
          />
        }
      >
        <Reveal>
          <Heading level={2} size="xl">
            Security Built Into Everything
          </Heading>
          <Text tone="muted" className="mt-4 max-w-md">
            We help businesses implement and align with industry-standard security frameworks to protect
            what matters most.
          </Text>
          <ul className="mt-6 flex flex-col gap-3">
            {cybersecurityPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-body-sm text-foreground">
                <ScanEye className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <Button variant="cta" size="lg" className="mt-8" render={<Link href="/cybersecurity" />}>
            Secure Your Business
          </Button>
        </Reveal>
      </BackgroundHero>

      <BackgroundHero
        align="end"
        scrim="light"
        minHeightClass="lg:min-h-[560px]"
        background={
          <ThemedImage
            srcLight="/images/Background9Lightmode.png"
            srcDark="/images/Background9.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[30%_center]"
          />
        }
      >
        <Reveal>
          <div className="max-w-md lg:text-right">
            <Heading level={2} size="xl">
              Engineering at AI Speed — Without Cutting Corners
            </Heading>
            <Text tone="muted" className="mt-4">
              MB CoreX uses modern AI-assisted development workflows to increase productivity and shorten
              time-to-market, while keeping engineering standards and human oversight at every stage.
            </Text>
            <ul className="mt-6 flex flex-col gap-3">
              {aiPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-body-sm text-foreground lg:justify-end">
                  <BrainCircuit className="mt-0.5 size-4 shrink-0 text-primary lg:order-2" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Button variant="outline" size="lg" className="mt-8" render={<Link href="/ai-solutions" />}>
              Explore AI Solutions
            </Button>
          </div>
        </Reveal>
      </BackgroundHero>

      <Section>
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Heading level={2} size="xl">
              How We Work
            </Heading>
            <Text tone="muted" className="mt-3">
              A clear, five-step process from first conversation to launch and beyond.
            </Text>
          </div>
        </Reveal>
        <ProcessTimeline entries={processSteps.map((step) => ({ title: step.title, description: step.description }))} />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              What Our Clients Say
            </Heading>
          </div>
        </Reveal>
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      <Section id="faq">
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

      <CTABanner
        heading="Ready to Build Something Secure and Scalable?"
        description={`Book a free discovery call, or reach us directly at ${siteConfig.email} / ${siteConfig.phone}.`}
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="Email Us"
        secondaryHref={`mailto:${siteConfig.email}`}
      />
    </>
  )
}

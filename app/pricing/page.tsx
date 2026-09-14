import type { Metadata } from "next"
import { Check, Scale, ScrollText, Wallet } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { PageHero } from "@/components/sections/page-hero"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { FAQAccordion } from "@/components/sections/faq-accordion"
import { CTABanner } from "@/components/sections/cta-banner"
import { Reveal } from "@/components/motion/reveal"
import { MaskRevealInView } from "@/components/motion/mask-reveal"
import { Accent, Caption, Heading, Text } from "@/components/typography/typography"
import { JsonLd } from "@/components/seo/json-ld"

import {
  serviceCategories,
  getServicesByCategory,
  formatServiceBand,
} from "@/content/services"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Pricing — What Software and Security Work Costs in Nigeria",
  description:
    "Indicative naira price ranges for every MB CoreX service — custom software, websites, SaaS, AI and cybersecurity. Real bands, what drives them, and what is always included.",
  path: "/pricing",
})

const principles = [
  {
    icon: Scale,
    title: "Ranges, not packages",
    description:
      "Every band below is a range because scope decides the number. We quote against your actual requirements, never a tier you have to squeeze into.",
  },
  {
    icon: ScrollText,
    title: "Quoted before we start",
    description:
      "You get a written scope and a fixed figure before any work begins. If scope changes mid-project, we re-quote that change rather than surprising you at the end.",
  },
  {
    icon: Wallet,
    title: "Running costs stated upfront",
    description:
      "Hosting, monitoring and maintenance are quoted separately and clearly. A build price that hides its running cost is quoting half the project.",
  },
]

const alwaysIncluded = [
  "Full ownership of source code and infrastructure",
  "Security considered at every stage, not bolted on before launch",
  "Performance and SEO structure built in, not sold as an extra",
  "Written handover documentation",
  "A named person to talk to, not a ticket queue",
]

const pricingFaq = [
  {
    question: "Why ranges instead of fixed prices?",
    answer:
      "Because a five-page marketing site and a site with accounts, a database and admin tooling are not the same project, even when they look similar from outside. A single fixed price for either would mean overcharging one client to cover the other. The range tells you which conversation you are in; the scope sets the number.",
  },
  {
    question: "What decides where in the range I land?",
    answer:
      "Mostly scope and integrations. Number of distinct user roles, how much of the data is custom, how many third-party systems have to talk to each other, and whether the work carries compliance requirements. Design complexity matters less than most people expect; integrations matter more.",
  },
  {
    question: "Do you take payment in stages?",
    answer:
      "Yes. Projects are split into milestones with a payment attached to each, so you are never paying far ahead of delivered work. The split is agreed in the written scope before we start.",
  },
  {
    question: "What if my budget is below the range?",
    answer:
      "Tell us the real figure anyway. Often the right answer is a smaller first phase that solves the most valuable part of the problem, rather than a stripped-down version of everything. If we genuinely cannot do good work at your budget, we will say so directly instead of taking the project and cutting corners.",
  },
  {
    question: "Are these prices in naira?",
    answer:
      "Yes, all figures are in Nigerian naira and reflect 2026 rates. For clients invoicing in another currency we quote at the prevailing rate at the point of contract.",
  },
]

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />

      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />}
        eyebrow="Pricing"
        title={["What this work", <Accent key="accent" tone="brand">actually costs.</Accent>]}
        description="Indicative naira ranges for every service we offer, so you know roughly where you stand before you ever speak to us. No packages, no hidden running costs."
        image={{
          srcLight: "/images/hero/hero-pricing-light.jpg",
          srcDark: "/images/hero/hero-pricing-dark.jpg",
        }}
      />

      <Section spacing="tight">
        <FeatureGrid cols={3} items={principles} />
      </Section>

      {serviceCategories.map((category, index) => {
        const categoryServices = getServicesByCategory(category)
        return (
          <Section key={category} spacing={index === 0 ? "default" : "tight"}>
            <div className="mb-10">
              <Reveal variant="fade">
                <Caption className="mb-5 flex items-center gap-3 text-primary">
                  <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
                  {category}
                </Caption>
              </Reveal>
              <Heading level={2} size="lg">
                <MaskRevealInView lines={[category]} />
              </Heading>
            </div>

            {/* A ruled two-column table rather than pricing cards: these are
                ranges across twenty services, and cards would imply tiers we
                do not sell. */}
            <ul className="border-t border-border">
              {categoryServices.map((service) => (
                <li
                  key={service.slug}
                  className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-border py-6"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-body-lg font-medium tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <Text size="sm" tone="muted" className="mt-1 max-w-md text-pretty">
                      {service.shortDescription}
                    </Text>
                  </div>
                  <span className="shrink-0 font-display text-xl font-normal whitespace-nowrap text-foreground sm:text-2xl">
                    {formatServiceBand(service)}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        )
      })}

      <Section spacing="tight" tone="surface" curveTop="background" curveBottom="background">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal variant="fade">
              <Caption className="mb-5 flex items-center gap-3 text-primary">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
                Included as standard
              </Caption>
            </Reveal>
            <Heading level={2} size="lg">
              <MaskRevealInView lines={["Not sold back to you", "as an add-on."]} />
            </Heading>
          </div>
          <div className="lg:col-span-7">
            <Reveal variant="fade">
              <ul className="flex flex-col gap-4">
                {alwaysIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body-md text-foreground">
                    <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section spacing="default">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal variant="fade">
              <Caption className="mb-5 flex items-center gap-3 text-primary">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
                Pricing FAQ
              </Caption>
            </Reveal>
            <Heading level={2} size="xl" className="lg:sticky lg:top-32">
              <MaskRevealInView lines={["Questions about", "the numbers."]} />
            </Heading>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={pricingFaq} />
          </div>
        </div>
      </Section>

      <CTABanner
        image="build"
        eyebrow="Get a real number"
        heading="Tell us the scope and we'll quote it properly."
        description="Send us what you're trying to build and your budget. We'll come back with a written scope and a firm figure — or tell you honestly if it isn't a fit."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/portfolio"
      />
    </>
  )
}

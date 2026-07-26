import type { Metadata } from "next"
import Link from "next/link"
import { Check, FileText } from "lucide-react"

import { Section } from "@/components/layout/section"
import { BackgroundHero } from "@/components/layout/background-hero"
import { ThemedImage } from "@/components/layout/themed-image"
import { Grid } from "@/components/layout/grid"
import { Divider } from "@/components/layout/divider"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text, Caption } from "@/components/typography/typography"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal, StaggerItem } from "@/components/motion/reveal"
import { FAQAccordion } from "@/components/sections/faq-accordion"
import { CTABanner } from "@/components/sections/cta-banner"
import { StickyMobileCta } from "@/components/sections/sticky-mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"

import { serviceCategories, getServicesByCategory } from "@/content/services"
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo"
import { ctaCopy } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Software Development Services in Nigeria",
  description:
    "Software engineering, artificial intelligence and cybersecurity services from MB CoreX, a software development company in Nigeria — custom software, SaaS, AI integrations, security audits and compliance readiness.",
  path: "/services",
})

const categoryIntros: Record<string, string> = {
  "Software Engineering": "Custom software, enterprise systems and web/mobile applications built for how your business actually works.",
  "Artificial Intelligence": "Practical AI features and AI-accelerated delivery — integrated where it adds real value, always with human oversight.",
  Cybersecurity: "Security built into the development process, plus audits and compliance readiness for frameworks like NIST and SOC 2.",
}

const servicesFaq = [
  { question: "How do you scope a new project?", answer: "Every engagement starts with a Discovery phase — we learn your business and constraints before proposing architecture, timeline or cost." },
  { question: "Do you offer ongoing maintenance?", answer: "Yes. Maintenance & support is available after launch so your software doesn't become someone else's problem." },
  { question: "Can you work alongside our existing team?", answer: "Yes — we regularly integrate with in-house teams, handing off documentation and access rather than operating as a black box." },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />

      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      </Section>

      <BackgroundHero
        scrim="light"
        background={
          <ThemedImage
            srcLight="/images/SolutionsLightmode.png"
            srcDark="/images/Solutions.jpg"
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
          <Caption className="text-primary">Our Services</Caption>
          <Heading level={1} size="xl" className="mt-4 max-w-2xl">
            End-to-End Solutions For Your Business
          </Heading>
          <Text tone="muted" className="mt-4 max-w-xl">
            We provide a wide range of services to help businesses build, secure and scale their digital
            presence — organized below by discipline.
          </Text>
        </Reveal>
      </BackgroundHero>

      {serviceCategories.map((category, categoryIndex) => {
        const categoryServices = getServicesByCategory(category)
        return (
          <div key={category}>
            {categoryIndex > 0 && (
              <Section spacing="none">
                <Divider />
              </Section>
            )}
            <Section spacing={categoryIndex === 0 ? "tight" : "default"}>
              <Reveal>
                <Heading level={2} size="lg">
                  {category}
                </Heading>
                <Text tone="muted" className="mt-2 max-w-xl">
                  {categoryIntros[category]}
                </Text>
              </Reveal>

              <Reveal stagger>
                <Grid cols={2} gap="lg" className="mt-8">
                  {categoryServices.map((service) => {
                    const Icon = service.icon
                    return (
                      <StaggerItem key={service.slug}>
                        <Card id={service.slug} className="h-full scroll-mt-24 border border-border bg-card ring-0">
                          <CardContent className="flex h-full flex-col gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                                <Icon className="size-5" aria-hidden="true" />
                              </div>
                              <Heading level={3} size="sm">
                                {service.title}
                              </Heading>
                            </div>
                            <Text size="sm" tone="muted">
                              {service.description}
                            </Text>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div>
                                <Caption>Benefits</Caption>
                                <ul className="mt-2 flex flex-col gap-1.5">
                                  {service.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-1.5 text-body-sm text-foreground">
                                      <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden="true" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <Caption>Deliverables</Caption>
                                <ul className="mt-2 flex flex-col gap-1.5">
                                  {service.deliverables.map((deliverable) => (
                                    <li key={deliverable} className="flex items-start gap-1.5 text-body-sm text-foreground">
                                      <FileText className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                                      {deliverable}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="mt-auto flex flex-wrap items-center gap-3">
                              {service.href && (
                                <Button variant="outline" render={<Link href={service.href} />}>
                                  Learn More
                                </Button>
                              )}
                              <Button variant="outline" render={<Link href="/contact" />}>
                                {ctaCopy.primary}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                        <JsonLd data={serviceJsonLd(service)} />
                      </StaggerItem>
                    )
                  })}
                </Grid>
              </Reveal>
            </Section>
          </div>
        )
      })}

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Heading level={2} size="xl">
              Questions About Our Services
            </Heading>
          </div>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          <FAQAccordion items={servicesFaq} />
        </div>
      </Section>

      <CTABanner
        heading="Have a Project in Mind?"
        description="Let's discuss how MB CoreX can help you build it — securely, and on time."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
      />
      <StickyMobileCta label="Book a Consultation" />
    </>
  )
}

import type { Metadata } from "next"
import { MapPin } from "lucide-react"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Accent, Heading, Text } from "@/components/typography/typography"
import { Reveal } from "@/components/motion/reveal"
import { ContactSection } from "@/components/sections/contact-section"
import { FAQAccordion } from "@/components/sections/faq-accordion"
import { JsonLd } from "@/components/seo/json-ld"

import { submitContactForm } from "@/actions/contact"
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Contact — Software Development Company in Nigeria",
  description:
    "Get in touch with MB CoreX, a software development and cybersecurity company in Nigeria — book a free consultation or send us a message about your project.",
  path: "/contact",
})

const contactFaq = [
  { question: "How quickly will you respond?", answer: "We aim to respond to every inquiry within one business day." },
  { question: "Do you offer free consultations?", answer: "Yes — the first conversation is always free, with no obligation." },
  { question: "Can we meet remotely?", answer: "Yes, all discovery calls are conducted remotely by default; in-person meetings can be arranged where practical." },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <JsonLd data={faqJsonLd(contactFaq)} />

      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />}
        eyebrow="Contact"
        title={[
          "Let’s build something",
          <Accent key="accent" tone="brand">exceptional.</Accent>,
        ]}
        description="Have a project in mind or need advice? We’d love to hear from you."
        image={{
          srcLight: "/images/hero/hero-contact-light.jpg",
          srcDark: "/images/hero/hero-contact-dark.jpg",
        }}
      />

      <ContactSection
        heading="Send Us a Message"
        description="Fill out the form and we'll follow up within one business day."
        onSubmit={submitContactForm}
      />

      <Section spacing="tight">
        <Reveal>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-accent text-primary">
              <MapPin className="size-5" aria-hidden="true" />
            </div>
            <Heading level={2} size="sm">
              Based in {siteConfig.location}
            </Heading>
            <Text size="sm" tone="muted" className="max-w-sm">
              We work with clients remotely by default — an interactive map will live here once we have a
              public office location to show.
            </Text>
          </div>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <Heading level={2} size="lg">
              Common Questions
            </Heading>
          </div>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          <FAQAccordion items={contactFaq} />
        </div>
      </Section>
    </>
  )
}

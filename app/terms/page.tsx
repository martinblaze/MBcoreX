import type { Metadata } from "next"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text } from "@/components/typography/typography"

import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing use of the MB CoreX website and engagement with MB CoreX for services.",
  path: "/terms",
  noIndex: true,
})

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By using this website, you agree to these terms. If you do not agree, please discontinue use of the site.",
  },
  {
    title: "Services",
    body: "Descriptions of services on this website are informational. Specific project scope, timeline and cost are agreed separately in a signed engagement agreement before work begins.",
  },
  {
    title: "Intellectual Property",
    body: "Content on this website — including the MB CoreX name, logo, and brand assets — is the property of MB CoreX and may not be reproduced without permission.",
  },
  {
    title: "Portfolio & Case Studies",
    body: "Project examples shown are representative of work delivered for the named clients. Metrics and outcomes described reflect that specific engagement and are not a guarantee of results for future projects.",
  },
  {
    title: "Payment Terms",
    body: "Pricing, payment schedule and deposit requirements are agreed per project in a signed engagement agreement before work begins. Late payment may result in a pause on active work until the account is current.",
  },
  {
    title: "Confidentiality",
    body: "We treat client business information, data and materials shared during an engagement as confidential, and expect the same regarding our own proprietary methods and non-public pricing. Formal engagements may be covered by a separate mutual NDA on request.",
  },
  {
    title: "Limitation of Liability",
    body: "This website and its content are provided as-is. MB CoreX is not liable for decisions made based solely on information published here — formal engagements are governed by a separate signed agreement.",
  },
  {
    title: "Governing Law",
    body: "These terms, and any engagement agreement entered into with MB CoreX, are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles.",
  },
  {
    title: "Changes to These Terms",
    body: "These terms may be updated from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.",
  },
  {
    title: "Contact",
    body: `Questions about these terms can be sent to ${siteConfig.email}.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />}
        eyebrow="Last updated: July 2026"
        title={[
          "Terms of service.",
        ]}
      />
      <Section containerWidth="narrow">
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <Heading level={2} size="sm" className="mb-2">
                {section.title}
              </Heading>
              <Text tone="muted">{section.body}</Text>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

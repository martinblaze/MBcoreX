import type { Metadata } from "next"

import { Section } from "@/components/layout/section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text } from "@/components/typography/typography"

import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How MB CoreX collects, uses and protects information submitted through this website.",
  path: "/privacy-policy",
  noIndex: true,
})

const sections = [
  {
    title: "Information We Collect",
    body: "When you submit our contact form or book a consultation, we collect the information you provide directly — your name, email address, phone number, and any project details you share. We do not collect information beyond what you voluntarily submit.",
  },
  {
    title: "How We Use Information",
    body: "Information you submit is used solely to respond to your inquiry, schedule consultations, and — if you opt in to our newsletter — send occasional updates. We do not sell or rent your information to third parties.",
  },
  {
    title: "Data Storage & Security",
    body: "We apply the same secure-by-design principles to our own systems that we apply to client work: data is handled with access control and encryption in transit as standard practice.",
  },
  {
    title: "Cookies",
    body: "This website uses only strictly necessary cookies required for basic functionality (such as remembering your theme preference). We do not use advertising or cross-site tracking cookies.",
  },
  {
    title: "Analytics",
    body: "We may use privacy-conscious website analytics (such as aggregate page-view counts) to understand how visitors use this site and improve it. Analytics data is used in aggregate and is not used to individually identify you.",
  },
  {
    title: "Data Retention",
    body: "Contact form and consultation-request submissions are retained only as long as needed to respond to your inquiry and, where an engagement proceeds, for the duration of that business relationship plus a reasonable period for our records. You can request earlier deletion at any time (see Your Rights below).",
  },
  {
    title: "Third-Party Services",
    body: "We may use third-party services (such as email delivery providers) to operate this website and respond to inquiries. These providers are only given the information necessary to perform their function.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of any personal information we hold about you at any time by emailing us at the address below.",
  },
  {
    title: "Contact",
    body: `Questions about this policy can be sent to ${siteConfig.email}.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section spacing="tight">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      </Section>
      <Section spacing="tight">
        <Heading level={1} size="lg">
          Privacy Policy
        </Heading>
        <Text tone="muted" className="mt-3">
          Last updated: July 2026
        </Text>
      </Section>
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

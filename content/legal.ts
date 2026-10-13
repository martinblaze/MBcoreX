import { siteConfig } from "@/lib/constants"

export type LegalSection = { title: string; body: string }

export const privacySections: LegalSection[] = [
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
    body: "This website uses only strictly necessary cookies required for basic functionality. We do not use advertising or cross-site tracking cookies.",
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

export const termsSections: LegalSection[] = [
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

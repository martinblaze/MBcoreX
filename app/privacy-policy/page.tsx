import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"
import { privacySections } from "@/content/legal"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How MB CoreX collects, uses and protects information submitted through this website.",
  path: "/privacy-policy",
  noIndex: true,
})

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy policy." sections={privacySections} />
}

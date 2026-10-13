import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"
import { termsSections } from "@/content/legal"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing use of the MB CoreX website and engagement with MB CoreX for services.",
  path: "/terms",
  noIndex: true,
})

export default function TermsPage() {
  return <LegalPage title="Terms of service." sections={termsSections} />
}

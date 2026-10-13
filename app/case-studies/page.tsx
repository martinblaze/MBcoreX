import type { Metadata } from "next"

import { CaseCard } from "@/components/case-card"
import { Pill } from "@/components/pill"
import { Headline, Reveal } from "@/components/reveal"
import { caseStudies } from "@/content/work"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo"

const title = "Case Studies: Software & Web Projects Built in Nigeria"
const description =
  "Software, web apps and websites we built in Nigeria: DiagSync (lab management), Batamart (student marketplace) and Reene Medical Diagnostics."

export const metadata: Metadata = buildMetadata({ title: `${title} | MB CoreX`, description, path: "/case-studies" })

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: title, description, path: "/case-studies", type: "CollectionPage" })} />
      <JsonLd data={itemListJsonLd("MB CoreX case studies", caseStudies.map((study) => ({ name: study.title, path: `/case-studies/${study.slug}` })))} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />
      <section className="wrap pb-16 pt-32 md:pb-24 md:pt-40">
        <Headline
          as="h1"
          immediate
          className="t-mega max-w-[16ch]"
          text="We tell brands' stories with [[real products]]."
        />
        <Reveal delay={0.4} className="mt-8 flex justify-between gap-6 border-t border-line pt-4 t-small text-muted">
          <span>Works</span>
          <span>{caseStudies.length} selected projects</span>
        </Reveal>
      </section>

      <section className="wrap grid gap-x-3 gap-y-14 pb-28 md:grid-cols-2 md:pb-40">
        {caseStudies.map((study, i) => (
          <CaseCard key={study.slug} study={study} priority={i < 2} />
        ))}
      </section>

      <section className="wrap pb-28 md:pb-44">
        <Headline text="Your project could be [[next]]." className="t-display max-w-[14ch]" />
        <Reveal delay={0.2} className="mt-10">
          <Pill href="/contact">Start a project</Pill>
        </Reveal>
      </section>
    </>
  )
}

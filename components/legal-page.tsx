import { Headline } from "@/components/reveal"
import type { LegalSection } from "@/content/legal"

export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <section className="wrap pb-28 pt-32 md:pb-40 md:pt-40">
      <Headline as="h1" immediate className="t-display" text={title} />
      <p className="t-small mt-4 text-muted">Last updated: July 2026</p>
      <div className="mt-14 grid gap-10 md:max-w-3xl">
        {sections.map((section) => (
          <div key={section.title} className="border-t border-line pt-5">
            <h2 className="text-xl font-medium tracking-tight">{section.title}</h2>
            <p className="t-lead mt-2 text-muted">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

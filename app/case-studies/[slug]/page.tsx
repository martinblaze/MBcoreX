import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { ScreenCarousel } from "@/components/screen-carousel"
import { LoopVideo } from "@/components/loop-video"
import { JsonLd } from "@/components/seo/json-ld"
import { Pill } from "@/components/pill"
import { Headline, Reveal } from "@/components/reveal"
import { caseStudies, getCaseStudy } from "@/content/work"
import { breadcrumbJsonLd, buildMetadata, caseStudyJsonLd } from "@/lib/seo"

type Params = { slug: string }

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return buildMetadata({
    title: caseStudySeoTitle[study.slug] ?? study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  })
}

/** Search-result titles (the on-page headline stays the project name). */
const caseStudySeoTitle: Record<string, string> = {
  diagsync: "DiagSync: Laboratory Management System Case Study",
  batamart: "Batamart: Student Marketplace Platform Case Study",
  "reene-medical-diagnostics": "Reene Medical: Healthcare Website Case Study",
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const index = caseStudies.findIndex((item) => item.slug === slug)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <>
      <JsonLd data={caseStudyJsonLd(study)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />

      <section className="wrap pt-32 md:pt-40">
        <Link href="/case-studies" className="t-small u-link">
          ← Case studies
        </Link>
        <Headline as="h1" immediate className="t-mega mt-6" text={study.title} />
        <Reveal delay={0.3} className="mt-8 grid gap-6 md:grid-cols-12">
          <p className="t-lead md:col-span-6">{study.summary}</p>
          <ul className="flex flex-wrap content-start gap-2 md:col-span-4 md:col-start-9">
            {study.tags.map((tag) => (
              <li key={tag} className="border border-line px-3 py-1 text-[0.8rem]">
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.4} className="relative mt-12 aspect-video overflow-hidden bg-paper-2">
          <LoopVideo src={study.motion} poster={study.motionPoster} className="object-contain" tapToPlay />
        </Reveal>
      </section>

      <section className="wrap grid gap-12 py-20 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <Reveal>
            <p className="t-small mb-3 text-muted">The problem</p>
            <p className="t-lead">{study.problem}</p>
          </Reveal>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Reveal delay={0.1}>
            <p className="t-small mb-3 text-muted">What we built</p>
            <p className="t-lead">{study.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Headline text="Results" className="t-display" />
          </div>
          <ul className="md:col-span-5 md:col-start-8">
            {study.results.map((result) => (
              <Reveal as="li" key={result} className="border-t border-line-dark py-5 text-lg tracking-tight">
                {result}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap pt-4 md:pt-12">
        <p className="t-small mb-3 text-muted">Live walkthrough</p>
        <Reveal className="relative aspect-[16/10] overflow-hidden bg-paper-2">
          <LoopVideo src={study.video} poster={study.cover} tapToPlay />
        </Reveal>
      </section>

      <div className="mt-20 md:mt-32">
        <ScreenCarousel images={[study.cover, ...study.gallery]} title={study.title} />
      </div>

      <section className="wrap flex flex-wrap items-center justify-between gap-8 pb-28 pt-12 md:pb-40">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <Pill href={study.href}>Visit live site</Pill>
          <p className="t-small text-muted">Built with {study.stack.join(", ")}</p>
        </div>
        <Link href={`/case-studies/${next.slug}`} className="group text-right">
          <span className="t-small block text-muted">Next project</span>
          <span className="t-title transition-opacity group-hover:opacity-50">{next.title} →</span>
        </Link>
      </section>
    </>
  )
}

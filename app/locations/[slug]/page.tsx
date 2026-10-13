import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { FaqList } from "@/components/faq"
import { Pill } from "@/components/pill"
import { Headline, Reveal } from "@/components/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { getLocation, locations, sectors } from "@/content/locations"
import { formatServiceBand, getService, services } from "@/content/services"
import { locationFaqs, locationIntro, nearbyLocations, placeLabel, placeShort, serviceLine } from "@/lib/location-copy"
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, regionServiceJsonLd, webPageJsonLd } from "@/lib/seo"

type Params = { slug: string }

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const location = getLocation(slug)
  if (!location) return {}
  const short = placeShort(location)
  return buildMetadata({
    title: `Software Company in ${short} | Web, Apps & SEO | MB CoreX`,
    description: `Online software company for businesses in ${short}${location.kind === "state" ? " State" : " (FCT)"}: websites, web apps, custom software, mobile apps and Google SEO. Naira pricing.`,
    path: `/locations/${location.slug}`,
  })
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const location = getLocation(slug)
  if (!location) notFound()

  const short = placeShort(location)
  const place = placeLabel(location)
  const path = `/locations/${location.slug}`
  const intro = locationIntro(location)
  const faqs = locationFaqs(location)
  const ideas = location.sectors.flatMap((key) =>
    sectors[key].ideas.map((idea) => ({ ...idea, sector: sectors[key].label }))
  )
  const nearby = nearbyLocations(location)
  const pageTitle = `Software company in ${short}: web, apps and SEO`
  const description = `MB CoreX serves businesses in ${place} online: websites, web applications, custom software, mobile apps and Google SEO.`

  return (
    <>
      <JsonLd
        data={regionServiceJsonLd({
          name: `Software development, web design and SEO in ${short}`,
          description,
          path,
          area: location.kind === "fct" ? "Federal Capital Territory" : `${location.name} State`,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={webPageJsonLd({ name: pageTitle, description, path })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas we serve", path: "/locations" },
          { name: short, path },
        ])}
      />

      {/* Hero */}
      <section className="wrap pb-16 pt-32 md:pb-24 md:pt-40">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Areas we serve", href: "/locations" }, { name: short }]} />
        <p className="t-small mt-8 text-muted">
          Serving {place} · {location.zone}
        </p>
        <Headline as="h1" immediate className="t-mega mt-3 max-w-[16ch]" text={`Software company for businesses in [[${short}]].`} />
        <Reveal delay={0.4} className="mt-10 flex max-w-3xl flex-col gap-5">
          {intro.map((paragraph) => (
            <p key={paragraph} className="t-lead">
              {paragraph}
            </p>
          ))}
          <div className="mt-2 flex flex-wrap items-center gap-6">
            <Pill href="/contact">Talk to us about your project</Pill>
            <Link href="/pricing" className="t-small u-link">
              See naira pricing
            </Link>
          </div>
        </Reveal>
      </section>

      {/* What we could build here */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap">
          <Headline text={`What we could build in [[${short}]]`} className="t-display mb-10 max-w-[18ch] md:mb-14" />
          <ul className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea) => {
              const service = getService(idea.service)
              return (
                <li key={`${idea.sector}-${idea.title}`} className="bg-paper p-6">
                  <p className="t-small text-muted">{idea.sector}</p>
                  <h3 className="mt-2 text-xl font-medium leading-snug tracking-tight">{idea.title}</h3>
                  <p className="t-small mt-3 text-muted">{idea.text}</p>
                  {service && (
                    <Link href={`/services/${service.slug}`} className="t-small u-link mt-4 inline-block">
                      {service.title} →
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Services + pricing */}
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="wrap">
          <Headline text={`Services available in [[${short}]]`} className="t-display mb-10 max-w-[18ch] md:mb-14" />
          <ul>
            {services.map((service, index) => (
              <li key={service.slug} className="border-t border-line-dark">
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid items-baseline gap-2 py-5 transition-colors hover:text-paper/70 md:grid-cols-12 md:gap-6"
                >
                  <span className="t-small text-paper/50 md:col-span-1">0{index + 1}</span>
                  <span className="text-2xl font-medium tracking-tight md:col-span-5">{service.title}</span>
                  <span className="t-small text-paper/70 md:col-span-4">{serviceLine(location, service.slug)}</span>
                  <span className="t-small text-paper/70 md:col-span-2 md:text-right">{formatServiceBand(service)}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="t-small mt-6 text-paper/60">Typical ranges, not quotes. The real number always comes from scope.</p>
        </div>
      </section>

      {/* How we work remotely */}
      <section className="wrap py-16 md:py-24">
        <Headline text={`How we work with [[${short}]] clients`} className="t-title mb-8 max-w-[22ch]" />
        <ol className="grid gap-px bg-line md:grid-cols-4">
          {[
            { title: "Discovery call", text: `A video or phone call at a time that suits you in ${short}.` },
            { title: "Fixed-price scope", text: `A written scope and quote in naira for your ${short} project before any work starts.` },
            { title: "Weekly previews", text: `Working software or designs shared every week, reviewed on your phone wherever you are in ${place}.` },
            { title: "Launch and support", text: `We deploy, train your team in ${location.cities[0]} or online, and stay on for improvements.` },
          ].map((step, index) => (
            <li key={step.title} className="bg-paper p-6">
              <p className="t-small text-muted">0{index + 1}</p>
              <h3 className="mt-6 text-xl font-medium tracking-tight">{step.title}</h3>
              <p className="t-small mt-2 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Headline text={`Questions from [[${short}]]`} className="t-title" />
          </div>
          <div className="md:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      {/* Nearby + CTA */}
      <section className="wrap py-16 md:py-24">
        <p className="t-small mb-4 text-muted">Also serving the {location.zone}</p>
        <ul className="flex flex-wrap gap-2">
          {nearby.map((other) => (
            <li key={other.slug}>
              <Link href={`/locations/${other.slug}`} className="block border border-line px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper">
                {placeShort(other)}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/locations" className="block border border-ink px-4 py-2 text-sm">
              All areas →
            </Link>
          </li>
        </ul>
        <Headline text={`Have a project in ${short}? [[Let's talk]].`} className="t-display mt-16 max-w-[18ch]" />
        <Reveal delay={0.2} className="mt-8">
          <Pill href="/contact">Book a discovery call</Pill>
        </Reveal>
      </section>
    </>
  )
}

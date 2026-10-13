import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { FaqList } from "@/components/faq"
import { Pill } from "@/components/pill"
import { Headline, Reveal } from "@/components/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { getBlogPost } from "@/content/insights"
import { featuredLocationSlugs, getLocation } from "@/content/locations"
import { formatServiceBand, getService, services } from "@/content/services"
import { caseStudies } from "@/content/work"
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/seo"

type Params = { slug: string }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  })
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const path = `/services/${service.slug}`
  const guides = service.guideSlugs.map(getBlogPost).filter((post) => post !== undefined)
  const projects = caseStudies.filter((study) => service.caseStudySlugs.includes(study.slug))
  const cities = featuredLocationSlugs.map(getLocation).filter((location) => location !== undefined)
  const others = services.filter((item) => item.slug !== service.slug)

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd data={webPageJsonLd({ name: service.metaTitle, description: service.metaDescription, path })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path },
        ])}
      />

      {/* Hero */}
      <section className="wrap pb-16 pt-32 md:pb-24 md:pt-40">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title }]} />
        <p className="t-small mt-8 text-muted">{service.eyebrow}</p>
        <Headline as="h1" immediate className="t-mega mt-3 max-w-[16ch]" text={service.h1} />
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <Reveal delay={0.4} className="flex flex-col gap-5 md:col-span-6">
            {service.intro.map((paragraph) => (
              <p key={paragraph} className="t-lead">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.5} className="md:col-span-4 md:col-start-9">
            <p className="t-small text-muted">Typical range</p>
            <p className="mt-1 text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">{formatServiceBand(service)}</p>
            {service.priceNote && <p className="t-small mt-2 text-muted">{service.priceNote}</p>}
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Pill href="/contact">Get a quote</Pill>
              <Link href="/pricing" className="t-small u-link">
                See all pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Headline text="Who this is [[for]]" className="t-title" />
          </div>
          <ul className="flex flex-col gap-4 md:col-span-7 md:col-start-6">
            {service.whoItsFor.map((item) => (
              <Reveal as="li" key={item} className="border-b border-line pb-4 text-lg leading-snug tracking-tight">
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-paper-2 py-16 md:py-24">
        <div className="wrap">
          <Headline text="What's [[included]]" className="t-display mb-10 md:mb-14" />
          <ul className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
            {service.included.map((item) => (
              <li key={item.title} className="bg-paper-2 p-6">
                <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="t-small mt-2 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="wrap">
          <Headline text="How we [[work]]" className="t-display mb-10 md:mb-14" />
          <ol className="grid gap-px bg-line-dark md:grid-cols-3">
            {service.process.map((step, index) => (
              <li key={step.title} className="bg-ink p-6">
                <p className="t-small text-paper/50">0{index + 1}</p>
                <h3 className="t-title mt-8">{step.title}</h3>
                <p className="t-small mt-3 max-w-xs text-paper/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof */}
      {projects.length > 0 && (
        <section className="wrap py-16 md:py-24">
          <Headline text="Work that [[proves]] it" className="t-title mb-8" />
          <ul className="grid gap-px bg-line md:grid-cols-2">
            {projects.map((study) => (
              <li key={study.slug} className="bg-paper">
                <Link href={`/case-studies/${study.slug}`} className="group block p-6 transition-colors hover:bg-ink hover:text-paper">
                  <p className="t-small text-muted group-hover:text-paper/60">{study.category}</p>
                  <h3 className="t-title mt-2">{study.title}</h3>
                  <p className="t-small mt-3 max-w-md text-muted group-hover:text-paper/70">{study.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      <section className="wrap py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Headline text="Common [[questions]]" className="t-title" />
          </div>
          <div className="md:col-span-8">
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related guides */}
      {guides.length > 0 && (
        <section className="border-t border-line py-16 md:py-24">
          <div className="wrap">
            <p className="t-small mb-6 text-muted">Guides</p>
            <ul className="grid gap-px bg-line md:grid-cols-3">
              {guides.map((post) => (
                <li key={post.slug} className="bg-paper">
                  <Link href={`/insights/${post.slug}`} className="group block h-full p-6 transition-colors hover:bg-ink hover:text-paper">
                    <h3 className="text-xl font-medium leading-snug tracking-tight">{post.title}</h3>
                    <p className="t-small mt-3 text-muted group-hover:text-paper/70">{post.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Where we work */}
      <section className="wrap py-16 md:py-24">
        <Headline text="We serve every state, [[online]]" className="t-title max-w-[20ch]" />
        <p className="t-lead mt-5 max-w-2xl text-muted">
          MB CoreX works remotely with businesses across Nigeria. Explore how we help in your region.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {cities.map((location) => (
            <li key={location.slug}>
              <Link href={`/locations/${location.slug}`} className="block border border-line px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper">
                {service.title} in {location.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/locations" className="block border border-ink px-4 py-2 text-sm">
              All 36 states and the FCT →
            </Link>
          </li>
        </ul>
      </section>

      {/* Other services + CTA */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap">
          <p className="t-small mb-6 text-muted">Other services</p>
          <ul className="flex flex-wrap gap-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="block border border-line px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Headline text="Ready to start? [[Let's talk]]." className="t-display mt-16 max-w-[16ch]" />
          <Reveal delay={0.2} className="mt-8">
            <Pill href="/contact">Book a discovery call</Pill>
          </Reveal>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from "next"

import { ClientLogos } from "@/components/client-logos"
import { CaseCard } from "@/components/case-card"
import { HeroStrip } from "@/components/hero-strip"
import { ParallaxText } from "@/components/parallax-text"
import { Marquee } from "@/components/marquee"
import { ArrowLink, Pill } from "@/components/pill"
import { Process } from "@/components/process"
import { Headline, Reveal } from "@/components/reveal"
import { ServiceList } from "@/components/service-list"
import { Testimonials } from "@/components/testimonials"
import Link from "next/link"

import { FaqList } from "@/components/faq"
import { PostCard } from "@/components/post-card"
import { JsonLd } from "@/components/seo/json-ld"
import { blogPosts } from "@/content/insights"
import { featuredLocationSlugs, getLocation } from "@/content/locations"
import type { Faq } from "@/content/services"
import { caseStudies } from "@/content/work"
import { placeShort } from "@/lib/location-copy"
import { buildMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo"

const title = "Software Company in Nigeria: Web, Apps & Google SEO | MB CoreX"
const description =
  "MB CoreX is an online software company in Nigeria. We build websites, web apps, custom software and mobile apps, and run Google SEO for every state."

export const metadata: Metadata = buildMetadata({ title, description, path: "/" })

const faqs: Faq[] = [
  {
    question: "What does MB CoreX do?",
    answer: "MB CoreX is an online software company in Nigeria. We build websites, web applications, custom software and mobile apps, and we run in-depth Google SEO so your business is found by the people searching for what you sell.",
  },
  {
    question: "Which parts of Nigeria do you serve?",
    answer: "All 36 states and the Federal Capital Territory. We work online, so businesses in Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu and everywhere else get the same service.",
  },
  {
    question: "Do you have a physical office?",
    answer: "No. We are an online company with no walk-in office. All work happens by video call, WhatsApp and shared previews, which keeps costs down and lets us serve clients anywhere in Nigeria.",
  },
  {
    question: "How much do your services cost?",
    answer: "Typical naira ranges: websites from about ₦150,000, web applications from about ₦800,000, custom software and mobile apps from about ₦1.5 million, and Google SEO from about ₦150,000. The final price comes from a short scoping conversation.",
  },
  {
    question: "Can you help my business rank on Google?",
    answer: "Yes. Our Google SEO service covers keyword research, technical fixes, content and authority building, with a plain-language report every month. We cannot guarantee a specific position, but we show exactly what is being done and what is changing.",
  },
  {
    question: "Do I own the code you build?",
    answer: "Yes. You receive the source code, design files, domain and hosting access at handover. There is no lock-in.",
  },
]

export default function HomePage() {
  const featuredLocations = featuredLocationSlugs.map(getLocation).filter((location) => location !== undefined)
  const latestGuides = blogPosts.slice(0, 3)

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={webPageJsonLd({ name: title, description, path: "/" })} />
      {/* Hero */}
      <section className="pt-32 md:pt-40">
        <ParallaxText className="wrap">
          <Headline
            as="h1"
            immediate
            className="t-mega max-w-[16ch]"
            text="We build software and [[get you found]] on Google."
          />
          <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-12">
            <Reveal delay={0.5} className="md:col-span-5 md:col-start-8">
              <p className="t-lead">
                MB CoreX is an online software company in Nigeria. We build websites, web apps, custom software and
                mobile apps, plus in-depth Google SEO, for businesses in every state, from one small team that answers
                to you.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <Pill href="/contact">Start a project</Pill>
                <ArrowLink href="/case-studies">Explore case studies</ArrowLink>
              </div>
            </Reveal>
          </div>
        </ParallaxText>
        <div className="mt-16 md:mt-24">
          <HeroStrip />
        </div>
      </section>

      {/* Clients */}
      <section className="wrap py-16 md:py-24">
        <p className="t-small text-muted">Currently working with</p>
        <ClientLogos />
      </section>

      {/* Work */}
      <section className="wrap pb-24 md:pb-36">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-16">
          <Headline text="Selected [[work]]" className="t-display" />
          <ArrowLink href="/case-studies" className="shrink-0">
            All case studies
          </ArrowLink>
        </div>
        <div className="grid gap-x-3 gap-y-14 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <div key={study.slug} className={i % 2 === 1 ? "md:mt-24" : undefined}>
              <CaseCard study={study} priority={i === 0} />
            </div>
          ))}
        </div>
      </section>

      {/* Ticker */}
      <section className="border-y border-line py-8 md:py-12">
        <Marquee
          className="text-[clamp(2.5rem,7vw,7rem)] font-medium leading-none tracking-[-0.045em]"
          items={["Websites", "Web apps", "Custom software", "Mobile apps", "Google SEO"]}
        />
      </section>

      {/* Services */}
      <section className="wrap py-24 md:py-36">
        <div className="mb-10 grid gap-6 md:mb-16 md:grid-cols-12">
          <Headline text="What we [[do]]" className="t-display md:col-span-7" />
          <Reveal className="md:col-span-4 md:col-start-9">
            <p className="t-lead">
              Five things, done properly: web development, web applications, custom software, mobile app development
              and Google SEO. We don&apos;t spread thin, so each one gets senior attention.
            </p>
          </Reveal>
        </div>
        <ServiceList />
      </section>

      {/* Testimonials */}
      <section className="bg-paper-2 py-24 md:py-32">
        <div className="wrap">
          <Headline text="Clients who [[trust us]]" className="t-display mb-10 md:mb-14" />
          <Testimonials />
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="wrap">
          <Headline text="How we work" className="t-display mb-10 md:mb-14" />
          <Process />
        </div>
      </section>

      {/* Areas */}
      <section className="wrap py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-12">
          <Headline text="Online, so we serve [[every state]]" className="t-display md:col-span-7" />
          <Reveal className="md:col-span-4 md:col-start-9">
            <p className="t-lead">
              No walk-in office means your location never limits the quality of the work. Find out how we help
              businesses in your area.
            </p>
          </Reveal>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2">
          {featuredLocations.map((location) => (
            <li key={location.slug}>
              <Link
                href={`/locations/${location.slug}`}
                className="block border border-line px-4 py-2.5 text-[0.95rem] transition-colors hover:bg-ink hover:text-paper"
              >
                {placeShort(location)}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/locations" className="block border border-ink px-4 py-2.5 text-[0.95rem]">
              All 36 states + FCT →
            </Link>
          </li>
        </ul>
      </section>

      {/* Guides */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="wrap">
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <Headline text="Straight [[answers]]" className="t-display" />
            <ArrowLink href="/insights" className="shrink-0">
              All guides
            </ArrowLink>
          </div>
          <div className="grid gap-x-3 gap-y-12 md:grid-cols-3">
            {latestGuides.map((post) => (
              <Reveal key={post.slug}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Headline text="Common [[questions]]" className="t-title" />
          </div>
          <div className="md:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap py-28 md:py-44">
        <Headline text="Like what you see? Let's [[talk]]." className="t-mega max-w-[14ch]" />
        <Reveal delay={0.2} className="mt-10">
          <Pill href="/contact">Book a discovery call</Pill>
        </Reveal>
      </section>
    </>
  )
}

import Link from "next/link"
import type { Metadata } from "next"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { FaqList } from "@/components/faq"
import { Pill } from "@/components/pill"
import { Headline, Reveal } from "@/components/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { locationsByZone, locations, zones } from "@/content/locations"
import type { Faq } from "@/content/services"
import { placeShort } from "@/lib/location-copy"
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/seo"

const title = "Software Company Serving All 36 States and the FCT"
const description =
  "MB CoreX is an online software company serving businesses in every Nigerian state and the FCT: web development, web apps, custom software, mobile apps and Google SEO."

export const metadata: Metadata = buildMetadata({ title: `${title} | MB CoreX`, description, path: "/locations" })

const faqs: Faq[] = [
  {
    question: "Which parts of Nigeria do you serve?",
    answer: "Every state and the Federal Capital Territory. MB CoreX is an online company, so we work with clients in Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu and every other state through video calls, WhatsApp and shared previews.",
  },
  {
    question: "Do you have offices in these states?",
    answer: "No. We do not run walk-in offices. Being fully online keeps our costs low and lets us serve businesses anywhere in the country with the same quality and process.",
  },
  {
    question: "Does location affect the price?",
    answer: "No. Our naira price ranges are the same for every state. The price depends on the scope of the project, not on where you are.",
  },
  {
    question: "Can you help my business rank on Google in my state?",
    answer: "Yes. Our Google SEO service builds pages and content that reflect how customers in your region search, along with the technical and authority work that helps them rank.",
  },
]

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: title, description, path: "/locations", type: "CollectionPage" })} />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={itemListJsonLd(
          "Areas served by MB CoreX",
          locations.map((location) => ({ name: placeShort(location), path: `/locations/${location.slug}` }))
        )}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Areas we serve", path: "/locations" }])} />

      <section className="wrap pb-16 pt-32 md:pb-24 md:pt-40">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Areas we serve" }]} />
        <Headline as="h1" immediate className="t-mega mt-8 max-w-[16ch]" text="A software company for [[every state]]." />
        <Reveal delay={0.4} className="mt-10 max-w-2xl">
          <p className="t-lead">
            MB CoreX is online, so your location never limits the quality of what we build. We design websites, build web
            and mobile apps and custom software, and run Google SEO for businesses in all 36 states and the Federal
            Capital Territory. Choose your area to see what we could build for businesses there.
          </p>
        </Reveal>
      </section>

      <section className="wrap pb-16 md:pb-24">
        {zones.map((zone) => (
          <div key={zone} className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-10">
            <h2 className="t-title md:col-span-3">{zone}</h2>
            <ul className="flex flex-wrap gap-2 md:col-span-9">
              {locationsByZone(zone).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="block border border-line px-4 py-2.5 text-[0.95rem] transition-colors hover:bg-ink hover:text-paper"
                  >
                    {placeShort(location)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Headline text="Common [[questions]]" className="t-title" />
          </div>
          <div className="md:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <section className="wrap pb-28 md:pb-44">
        <Headline text="Not sure which state to pick? [[Just ask]]." className="t-display max-w-[16ch]" />
        <Reveal delay={0.2} className="mt-8">
          <Pill href="/contact">Book a discovery call</Pill>
        </Reveal>
      </section>
    </>
  )
}

import type { Metadata } from "next"

import { ContactForm } from "@/components/contact-form"
import { Headline, Reveal } from "@/components/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Contact MB CoreX: Get a Quote for Your Website, App or SEO Project",
  description:
    "Tell us about your website, mobile app, custom software or SEO project and get a naira quote. A 30-minute discovery call, no pitch deck, serving every state in Nigeria.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <section className="wrap pb-28 pt-32 md:pb-40 md:pt-40">
      <JsonLd data={webPageJsonLd({ name: "Contact MB CoreX", description: "Contact MB CoreX for a quote.", path: "/contact", type: "ContactPage" })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <Headline as="h1" immediate className="t-mega max-w-[12ch]" text="Let's [[talk]]." />

      <div className="mt-14 grid gap-14 md:mt-24 md:grid-cols-12">
        <Reveal className="t-small md:col-span-3">
          <p className="mb-2 text-muted">Email</p>
          <a href={`mailto:${siteConfig.email}`} className="u-link text-base">
            {siteConfig.email}
          </a>
          <p className="mb-2 mt-8 text-muted">Phone</p>
          <a href={`tel:${siteConfig.phoneRaw}`} className="u-link text-base">
            {siteConfig.phone}
          </a>
          <p className="mb-2 mt-8 text-muted">Based in</p>
          <p className="text-base">{siteConfig.location}</p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-8 md:col-start-5">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}

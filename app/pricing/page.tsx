import type { Metadata } from "next"

import Link from "next/link"

import { FaqList } from "@/components/faq"
import { Pill } from "@/components/pill"
import { Headline, Reveal } from "@/components/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { formatNaira, services, type Faq } from "@/content/services"
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo"

const title = "Website, App, Software & SEO Pricing in Nigeria (Naira)"
const description =
  "Typical naira prices for web development, web applications, custom software, mobile apps and Google SEO in Nigeria, with what is included and what drives the cost."

export const metadata: Metadata = buildMetadata({ title: `${title} | MB CoreX`, description, path: "/pricing" })

const faqs: Faq[] = [
  {
    question: "How much does a website cost in Nigeria?",
    answer: "At MB CoreX, websites typically range from about ₦150,000 for a focused landing page to around ₦2.5 million for a larger site or online store. The price depends on the number of pages, custom design, integrations such as payments, and content.",
  },
  {
    question: "How much does it cost to build a mobile app in Nigeria?",
    answer: "Mobile apps at MB CoreX typically range from about ₦1.5 million to ₦8 million, depending on features, user roles, integrations and the backend the app needs.",
  },
  {
    question: "How much does SEO cost in Nigeria?",
    answer: "Google SEO typically ranges from about ₦150,000 for an audit and priority fixes to about ₦1,000,000 per month for a full programme in a competitive market. We recommend starting with an audit.",
  },
  {
    question: "Are these fixed prices?",
    answer: "They are typical ranges, not quotes. After a short discovery call we scope your project and give a fixed price for the first version, so there are no surprises.",
  },
  {
    question: "Do prices depend on where in Nigeria I am?",
    answer: "No. We work online and the price is the same in every state. It depends on the scope of the work only.",
  },
  {
    question: "What is not included in these prices?",
    answer: "Third-party running costs such as domain names, hosting, paid tools, SMS and payment-gateway fees are separate. We list them clearly in every quote.",
  },
]

export default function PricingPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: title, description, path: "/pricing" })} />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])} />
      <section className="wrap pb-16 pt-32 md:pb-24 md:pt-40">
        <Headline as="h1" immediate className="t-mega max-w-[14ch]" text="Straight [[pricing]], in naira." />
        <Reveal delay={0.4} className="mt-10 md:max-w-xl">
          <p className="t-lead">
            Typical ranges for each service. The real number always comes from scope, and we&apos;ll tell you plainly
            what fits your budget before you commit.
          </p>
        </Reveal>
      </section>

      <section className="wrap pb-20 md:pb-32">
        <ul className="border-t border-line">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} className="border-b border-line">
              <div className="grid gap-6 py-8 md:grid-cols-12 md:gap-x-6 md:py-12">
                <div className="md:col-span-4">
                  <p className="t-small mb-3 text-muted">0{i + 1}</p>
                  <h2 className="t-title">
                    <Link href={`/services/${service.slug}`} className="u-link">
                      {service.title}
                    </Link>
                  </h2>
                  <p className="t-small mt-3 max-w-xs text-muted">{service.blurb}</p>
                </div>

                <div className="md:col-span-4">
                  <p className="t-small mb-3 text-muted">What&apos;s included</p>
                  <ul className="flex flex-col gap-1.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2 text-[0.95rem] leading-snug tracking-tight">
                        <span aria-hidden="true" className="mt-[0.55em] size-1 shrink-0 rounded-full bg-ink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between gap-6 md:col-span-4 md:items-end md:text-right">
                  <div>
                    <p className="t-small mb-2 text-muted">Typical range</p>
                    <p className="text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
                      {formatNaira(service.priceFrom)}
                    </p>
                    <p className="t-small mt-2 text-muted">
                      up to {formatNaira(service.priceTo)}
                      {service.priceNote ? `, ${service.priceNote}` : ""}
                    </p>
                  </div>
                  <Pill href="/contact">Get a quote</Pill>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Headline text="Pricing [[questions]]" className="t-title" />
          </div>
          <div className="md:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <section className="wrap py-28 md:py-44">
        <Headline text="Not sure what you need? [[Let's talk]]." className="t-display max-w-[16ch]" />
        <Reveal delay={0.2} className="mt-10">
          <Pill href="/contact">Book a discovery call</Pill>
        </Reveal>
      </section>
    </>
  )
}

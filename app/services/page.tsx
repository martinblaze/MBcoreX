import type { Metadata } from "next"

import { ParallaxText } from "@/components/parallax-text"
import { JsonLd } from "@/components/seo/json-ld"
import { Pill } from "@/components/pill"
import { Headline, Reveal } from "@/components/reveal"
import { formatServiceBand, services } from "@/content/services"
import { breadcrumbJsonLd, buildMetadata, itemListJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/seo"
import { cn } from "@/lib/utils"

const title = "Web, Software, Mobile App & SEO Services in Nigeria"
const description =
  "Web development, web apps, custom software, mobile apps and in-depth Google SEO for businesses in Nigeria. Online delivery to every state, naira pricing."

export const metadata: Metadata = buildMetadata({ title: `${title} | MB CoreX`, description, path: "/services" })

export default function ServicesPage() {
  return (
    <>
      {services.map((service) => (
        <JsonLd key={service.slug} data={serviceJsonLd(service)} />
      ))}
      <JsonLd data={webPageJsonLd({ name: title, description, path: "/services", type: "CollectionPage" })} />
      <JsonLd
        data={itemListJsonLd(
          "MB CoreX services",
          services.map((service) => ({ name: service.title, path: `/services/${service.slug}` }))
        )}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />

      <section className="pb-20 pt-32 md:pb-32 md:pt-40">
        <ParallaxText className="wrap">
        <Headline as="h1" immediate className="t-mega max-w-[14ch]" text="Meet your [[growth partner]]." />
        <Reveal delay={0.4} className="mt-10 md:max-w-xl">
          <p className="t-lead">
            Build it. Launch it. Get it found. MB CoreX is an online software company serving every state in Nigeria:
            web development, web applications, custom software, mobile apps and Google SEO from one team, with no layers
            between you and the people doing the work.
          </p>
        </Reveal>
        </ParallaxText>
      </section>

      {/* Wrapper bounds the sticky stacking so it ends before the closing CTA. */}
      <div>
      {services.map((service, i) => {
        const dark = i % 2 === 1
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={cn(
              "scroll-mt-16 py-20 md:sticky md:top-0 md:flex md:min-h-screen md:items-center md:py-24",
              dark ? "bg-ink text-paper" : "border-t border-line bg-paper"
            )}
          >
            <div className="wrap grid w-full gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="t-small mb-4 opacity-60">0{i + 1}</p>
                <Headline text={service.title} className="t-display" />
                <Reveal delay={0.15}>
                  <p className="t-lead mt-6 max-w-md opacity-80">{service.description}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Pill href={`/services/${service.slug}`} variant={dark ? "light" : "dark"}>
                      Learn more
                    </Pill>
                    <p className="t-small opacity-70">
                      Typically {formatServiceBand(service)}
                      {service.priceNote ? `, ${service.priceNote}` : ""}
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <Reveal>
                  <ul className="mb-10 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className={cn("border px-3 py-1 text-[0.8rem]", dark ? "border-line-dark" : "border-line")}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="t-small mb-3 opacity-60">What you get</p>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className={cn("border-t py-4 text-lg tracking-tight", dark ? "border-line-dark" : "border-line")}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}
      </div>

      <section className="wrap py-28 md:py-44">
        <Headline text="Not sure what you need? [[Let's talk]]." className="t-display max-w-[16ch]" />
        <Reveal delay={0.2} className="mt-10">
          <Pill href="/contact">Book a discovery call</Pill>
        </Reveal>
      </section>
    </>
  )
}

import Link from "next/link"

import { FooterWordmark } from "@/components/footer-wordmark"
import { Pill } from "@/components/pill"
import { featuredLocationSlugs, getLocation } from "@/content/locations"
import { services } from "@/content/services"
import { footerNav, siteConfig, socials } from "@/lib/constants"
import { placeShort } from "@/lib/location-copy"

export function Footer() {
  const col = "t-small flex flex-col gap-1.5"
  return (
    <footer className="overflow-hidden bg-paper pt-14 md:pt-24">
      <div className="wrap grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-12 md:gap-12">
        <div className="t-small order-1 md:col-span-3">
          <p>{siteConfig.legalName}</p>
          <p className="text-muted">{siteConfig.location}</p>
          <a href={`mailto:${siteConfig.email}`} className="u-link mt-4 inline-block">
            {siteConfig.email}
          </a>
          <p>
            <a href={`tel:${siteConfig.phoneRaw}`} className="u-link">
              {siteConfig.phone}
            </a>
          </p>
        </div>

        <ul className={`${col} order-3 md:order-2 md:col-span-2`}>
          {services.map((service) => (
            <li key={service.slug}>
              <Link href={`/services/${service.slug}`} className="u-link">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={`${col} order-2 md:order-3 md:col-span-2`}>
          {footerNav.company.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="u-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="order-4 col-span-2 flex flex-col items-start gap-4 md:col-span-5 md:gap-5">
          <p className="t-lead max-w-md">A 30-minute call. Your project, our process. No pitch deck, no pressure.</p>
          <Pill href="/contact">Book a Discovery Call</Pill>
        </div>
      </div>

      <nav aria-label="Areas we serve" className="wrap t-small mt-10 md:mt-14">
        <p className="mb-3 text-muted">Software company serving every state, online</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
          {featuredLocationSlugs.map((slug) => {
            const location = getLocation(slug)
            return location ? (
              <li key={slug}>
                <Link href={`/locations/${slug}`} className="u-link">
                  {placeShort(location)}
                </Link>
              </li>
            ) : null
          })}
          <li>
            <Link href="/locations" className="u-link font-medium">
              All 36 states + FCT
            </Link>
          </li>
        </ul>
      </nav>

      <div className="wrap t-small mt-10 flex flex-wrap justify-between gap-x-8 gap-y-3 text-muted md:mt-12">
        <p>
          © {new Date().getFullYear()} MB CoreX. All rights reserved.{" "}
          {footerNav.legal.map((item) => (
            <Link key={item.href} href={item.href} className="u-link ml-3 text-ink">
              {item.label}
            </Link>
          ))}
        </p>
        <p className="flex gap-4">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="u-link text-ink">
              {social.label}
            </a>
          ))}
        </p>
      </div>

      <FooterWordmark />
    </footer>
  )
}

import Link from "next/link"

import { Reveal } from "@/components/reveal"
import { services } from "@/content/services"

/**
 * Desktop: big numbered rows that invert on hover.
 * Mobile: black cards that pin and stack over each other as you scroll.
 */
export function ServiceList() {
  return (
    <ul className="md:border-t md:border-line">
      {services.map((service, i) => (
        <Reveal
          as="li"
          key={service.slug}
          delay={i * 0.04}
          className="sticky top-[calc(4.75rem+var(--i)*0.7rem)] mb-3 md:static md:mb-0 md:border-b md:border-line"
          style={{ ["--i" as string]: i } as React.CSSProperties}
        >
          <Link
            href={`/services/${service.slug}`}
            className="group flex min-h-[15rem] flex-col justify-between bg-ink p-5 text-paper transition-colors duration-500 md:grid md:min-h-0 md:grid-cols-12 md:items-baseline md:gap-x-6 md:bg-transparent md:px-4 md:py-7 md:text-ink md:hover:bg-ink md:hover:text-paper"
          >
            <span className="flex items-center justify-between md:contents">
              <span className="t-small text-paper/60 md:col-span-1 md:text-muted md:group-hover:text-paper/60">
                0{i + 1}
              </span>
              <span aria-hidden="true" className="text-2xl md:hidden">
                ↗
              </span>
            </span>
            <span className="md:contents">
              <span className="t-title mt-10 block md:col-span-6 md:mt-0 md:transition-transform md:duration-500 md:ease-out md:group-hover:translate-x-3">
                {service.title}
              </span>
              <span className="t-small mt-3 block max-w-sm text-paper/70 md:col-span-4 md:mt-0 md:text-muted md:group-hover:text-paper/70">
                {service.blurb}
              </span>
              <span className="mt-5 flex flex-wrap gap-1.5 md:hidden">
                {service.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="border border-line-dark px-2 py-0.5 text-[0.7rem]">
                    {tag}
                  </span>
                ))}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="hidden justify-self-end text-2xl transition-transform duration-500 group-hover:translate-x-1 md:col-span-1 md:block"
            >
              →
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  )
}

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { LivePreview } from "@/components/sections/live-preview"
import { Parallax } from "@/components/motion/parallax"
import { MaskRevealInView } from "@/components/motion/mask-reveal"
import { Reveal } from "@/components/motion/reveal"
import { Caption, Text } from "@/components/typography/typography"
import { cn } from "@/lib/utils"

export type WorkItem = {
  slug: string
  title: string
  category: string
  summary: string
  /** Screenshot — the fallback whenever a site cannot be embedded. */
  image: string
  /** Public URL of the running product. */
  liveHref?: string
  /** False when the site blocks framing; the showcase then shows `image`. */
  embeddable?: boolean
  /** Short outcome tags rendered as a meta row under the summary. */
  tags?: string[]
}

/**
 * Featured work as full-width alternating rows instead of a card grid.
 *
 * Each row shows the product *running*, in a device shell, rather than a
 * screenshot of it — so the work stays current without re-uploading captures
 * every time a UI changes.
 */
export function WorkShowcase({ items }: { items: WorkItem[] }) {
  return (
    <div className="flex flex-col gap-28 lg:gap-40">
      {items.map((item, i) => {
        const flipped = i % 2 === 1
        return (
          <article
            key={item.slug}
            className={cn(
              "grid items-center gap-10 lg:grid-cols-12 lg:gap-16",
              flipped && "lg:[direction:rtl] lg:[&>*]:[direction:ltr]"
            )}
          >
            {/* The device block drifts as a whole. Parallaxing *inside* the
                screen is not an option here — the contents are a live iframe,
                not an image that can overflow its crop. */}
            <Parallax speed={4} className="lg:col-span-7">
              {item.liveHref ? (
                <LivePreview
                  src={item.liveHref}
                  name={item.title}
                  fallbackImage={item.image}
                  embeddable={item.embeddable}
                />
              ) : (
                <Link href={`/portfolio/${item.slug}`} className="group block">
                  <div className="relative aspect-video overflow-hidden bg-surface-elevated">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 border border-foreground/10"
                    />
                  </div>
                </Link>
              )}
            </Parallax>

            <div className="lg:col-span-5">
              <Reveal variant="fade">
                <Caption className="text-primary">{item.category}</Caption>
              </Reveal>

              <h3 className="mt-5 font-display text-display-lg font-normal">
                <MaskRevealInView lines={[item.title]} />
              </h3>

              <Reveal variant="fade">
                <Text tone="muted" className="mt-5 max-w-md text-pretty">
                  {item.summary}
                </Text>

                {item.tags && item.tags.length > 0 && (
                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5">
                    {item.tags.map((tag) => (
                      <li key={tag} className="text-caption font-medium uppercase text-muted-foreground">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={`/portfolio/${item.slug}`}
                  className="link-wipe group/link mt-8 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-foreground"
                >
                  View case study
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            </div>
          </article>
        )
      })}
    </div>
  )
}

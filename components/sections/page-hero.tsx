import type { ReactNode } from "react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { CurveTransition } from "@/components/layout/curve-transition"
import { ThemedImage } from "@/components/layout/themed-image"
import { MaskReveal } from "@/components/motion/mask-reveal"
import { Reveal } from "@/components/motion/reveal"
import { RubberButton } from "@/components/ui/rubber-button"
import { Caption, Display, Text } from "@/components/typography/typography"
import { isInternalHref, cn } from "@/lib/utils"

type HeroAction = { label: string; href: string }

type PageHeroProps = {
  eyebrow?: string
  /** One entry per visual line — each is revealed from behind its own mask. */
  title: ReactNode[]
  description?: string
  actions?: HeroAction[]
  /** Omit `srcDark` when one asset serves both themes. */
  image?: { srcLight: string; srcDark?: string; position?: string }
  /** Breadcrumb trail, rendered above the eyebrow. */
  breadcrumbs?: ReactNode
  /** Extra content rendered under the description (breadcrumbs, meta rows). */
  children?: ReactNode
  align?: "start" | "center"
  className?: string
}

/**
 * The standard header for every page except Home (which gets its own
 * viewport-filling treatment).
 *
 * It runs full-bleed *underneath* the transparent navbar — hence the large
 * `pt` — so the bar has something to dissolve into on load instead of sitting
 * on a blank strip. Closes with a curved seam into the page background.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  image,
  breadcrumbs,
  children,
  align = "start",
  className,
}: PageHeroProps) {
  const centered = align === "center"

  return (
    <section className={cn("relative isolate overflow-hidden bg-surface-elevated", image && "grain", className)}>
      {image && (
        <>
          <div className="absolute inset-0 -z-20">
            <ThemedImage
              srcLight={image.srcLight}
              srcDark={image.srcDark ?? image.srcLight}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: image.position ?? "center" }}
            />
          </div>
          {/* Two scrims: a horizontal one so copy stays legible over the busy
              side of the photo, and a vertical one that grounds the curve. */}
          <div
            className={cn(
              "absolute inset-0 -z-10",
              centered
                ? "bg-background/70"
                : "bg-gradient-to-r from-background via-background/80 to-background/20"
            )}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/90 via-transparent to-background/40" />
        </>
      )}

      <Container>
        <div
          className={cn(
            "flex min-h-[62vh] flex-col justify-end pt-40 pb-28 lg:min-h-[70vh] lg:pt-48 lg:pb-36",
            centered && "items-center text-center"
          )}
        >
          {breadcrumbs && (
            <Reveal variant="fade">
              <div className="mb-10">{breadcrumbs}</div>
            </Reveal>
          )}

          {eyebrow && (
            <Reveal variant="fade">
              <Caption className="mb-6 flex items-center gap-3 text-primary">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
                {eyebrow}
              </Caption>
            </Reveal>
          )}

          <Display as="h1" size="xl" className={cn("max-w-4xl", centered && "mx-auto")}>
            <MaskReveal delay={0.05} lines={title} />
          </Display>

          {description && (
            <Reveal variant="fade">
              <Text
                size="lg"
                tone="muted"
                className={cn("mt-8 max-w-xl text-pretty", centered && "mx-auto")}
              >
                {description}
              </Text>
            </Reveal>
          )}

          {actions && actions.length > 0 && (
            <Reveal variant="fade">
              <div className={cn("mt-10 flex flex-wrap items-center gap-4", centered && "justify-center")}>
                {actions.map((action, i) => (
                  <RubberButton
                    key={action.href}
                    variant={i === 0 ? "cta" : "outline"}
                    render={
                      isInternalHref(action.href) ? <Link href={action.href} /> : <a href={action.href} />
                    }
                  >
                    {action.label}
                  </RubberButton>
                ))}
              </div>
            </Reveal>
          )}

          {children}
        </div>
      </Container>

      <CurveTransition position="bottom" tone="background" height={80} />
    </section>
  )
}

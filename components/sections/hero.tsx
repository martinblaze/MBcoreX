import type { ReactNode } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { HeroLayout } from "@/components/layout/hero-layout"
import { Section } from "@/components/layout/section"
import { BackgroundHero } from "@/components/layout/background-hero"
import { Caption, Display, Text } from "@/components/typography/typography"
import { Reveal, StaggerItem } from "@/components/motion/reveal"
import { isInternalHref, cn } from "@/lib/utils"

type HeroAction = { label: string; href: string; icon?: ReactNode }

type HeroProps = {
  eyebrow?: string
  heading: ReactNode
  subheading?: string
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  /** Media placed beside the copy in a two-column layout. Mutually exclusive with `background`. */
  media?: ReactNode
  /** Full-bleed image/video behind the entire hero section, with copy overlaid on top of a scrim. Mutually exclusive with `media`. */
  background?: ReactNode
  /** Scrim strength for `background` — see `BackgroundHero`. Defaults to `light` so the image reads as one continuous scene. */
  scrim?: "default" | "light"
  centered?: boolean
}

/** The reusable hero block. Pass `media` for a side-by-side device mockup, or `background` for a full-bleed image with overlaid copy. */
export function Hero({
  eyebrow,
  heading,
  subheading,
  primaryAction,
  secondaryAction,
  media,
  background,
  scrim = "light",
  centered = false,
}: HeroProps) {
  const content = (
    <Reveal stagger>
      {eyebrow && (
        <StaggerItem>
          <Caption className="mb-4 inline-block text-primary">{eyebrow}</Caption>
        </StaggerItem>
      )}
      <StaggerItem>
        <Display as="h1">{heading}</Display>
      </StaggerItem>
      {subheading && (
        <StaggerItem>
          <Text size="lg" tone="muted" className="mt-6 max-w-xl">
            {subheading}
          </Text>
        </StaggerItem>
      )}
      {(primaryAction || secondaryAction) && (
        <StaggerItem>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {primaryAction && (
              <Button
                variant="cta"
                size="lg"
                render={isInternalHref(primaryAction.href) ? <Link href={primaryAction.href} /> : <a href={primaryAction.href} />}
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="outline"
                size="lg"
                render={isInternalHref(secondaryAction.href) ? <Link href={secondaryAction.href} /> : <a href={secondaryAction.href} />}
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </StaggerItem>
      )}
    </Reveal>
  )

  if (background) {
    return (
      <BackgroundHero background={background} fullViewport scrim={scrim}>
        <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>{content}</div>
      </BackgroundHero>
    )
  }

  return (
    <Section spacing="none" glow="top" fullBleed>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <HeroLayout
          centered={centered}
          media={
            media && (
              <Reveal variant="fade" className="relative">
                {media}
              </Reveal>
            )
          }
          content={content}
        />
      </div>
    </Section>
  )
}

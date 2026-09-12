import Link from "next/link"

import { Section } from "@/components/layout/section"
import { MaskRevealInView } from "@/components/motion/mask-reveal"
import { Reveal } from "@/components/motion/reveal"
import { RubberButton } from "@/components/ui/rubber-button"
import { Caption, Text } from "@/components/typography/typography"
import { isInternalHref } from "@/lib/utils"

type CTABannerProps = {
  heading: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  eyebrow?: string
}

/**
 * The closing CTA on every page — a full-bleed tonal band.
 *
 * Uses the elevated surface rather than inverting to the foreground colour:
 * an inverted band reads as a dark slab mid-page in light mode (and a glaring
 * light one in dark mode), which fights the theme instead of shifting within
 * it. The curved seam and the extra vertical space do the punctuation.
 */
export function CTABanner({
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  eyebrow = "Start a project",
}: CTABannerProps) {
  return (
    <Section tone="surface" spacing="loose" curveTop="background" curveBottom="background">
      <div className="flex flex-col items-center text-center">
        <Reveal variant="fade">
          <Caption className="mb-8 flex items-center gap-3 text-primary">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
            {eyebrow}
          </Caption>
        </Reveal>

        <h2 className="max-w-4xl font-display text-display-xl font-normal text-balance text-foreground">
          <MaskRevealInView lines={[heading]} />
        </h2>

        <Reveal variant="fade">
          {description && (
            <Text size="lg" tone="muted" className="mx-auto mt-8 max-w-xl text-pretty">
              {description}
            </Text>
          )}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <RubberButton
              variant="cta"
              render={isInternalHref(primaryHref) ? <Link href={primaryHref} /> : <a href={primaryHref} />}
            >
              {primaryLabel}
            </RubberButton>
            {secondaryLabel && secondaryHref && (
              <RubberButton
                variant="outline"
                render={
                  isInternalHref(secondaryHref) ? <Link href={secondaryHref} /> : <a href={secondaryHref} />
                }
              >
                {secondaryLabel}
              </RubberButton>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

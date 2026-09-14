import Link from "next/link"

import { Section } from "@/components/layout/section"
import { ThemedImage } from "@/components/layout/themed-image"
import { MaskRevealInView } from "@/components/motion/mask-reveal"
import { Reveal } from "@/components/motion/reveal"
import { RubberButton } from "@/components/ui/rubber-button"
import { Caption, Text } from "@/components/typography/typography"
import { ctaImagery, type CTATheme } from "@/content/cta-imagery"
import { isInternalHref } from "@/lib/utils"

type CTABannerProps = {
  heading: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  eyebrow?: string
  /**
   * Backdrop keyed to what the section is asking for. Each theme carries a
   * light and a dark photograph so the band changes with the site theme
   * instead of forcing one mood on both. Omit for the plain tonal band.
   */
  image?: CTATheme
}

/**
 * The closing CTA on every page.
 *
 * With `image`, it becomes a full-bleed photographic band; without, a plain
 * tonal one. The scrim is intentionally heavy and theme-derived
 * (`bg-background/…` rather than a fixed black or white), because the same
 * section has to stay legible over a bright photo in light mode and a dark one
 * in dark mode. The photograph is texture behind the type, never the subject.
 */
export function CTABanner({
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  eyebrow = "Start a project",
  image,
}: CTABannerProps) {
  const art = image ? ctaImagery[image] : undefined

  return (
    <Section
      // With a photo the image supplies the surface; the tonal band would only
      // wash it out.
      tone={art ? "none" : "surface"}
      spacing="loose"
      curveTop="background"
      curveBottom="background"
      className={art ? "grain isolate" : undefined}
    >
      {art && (
        <>
          <div className="absolute inset-0 -z-20">
            <ThemedImage
              srcLight={art.light}
              srcDark={art.dark}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: art.position ?? "center" }}
            />
          </div>
          {/* Flat wash for legibility, plus a vertical gradient that seats the
              curved seams into the neighbouring bands. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/82" />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background"
          />
        </>
      )}

      <div className="relative flex flex-col items-center text-center">
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

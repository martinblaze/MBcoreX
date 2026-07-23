import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/typography/typography"
import { Reveal } from "@/components/motion/reveal"
import { isInternalHref } from "@/lib/utils"

type CTABannerProps = {
  heading: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

/** The closing CTA present near the bottom of every page. */
export function CTABanner({ heading, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: CTABannerProps) {
  return (
    <Section glow="center">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
          <Heading level={2} size="xl" className="max-w-2xl">
            {heading}
          </Heading>
          {description && (
            <Text size="lg" tone="muted" className="max-w-xl">
              {description}
            </Text>
          )}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="cta"
              size="lg"
              render={isInternalHref(primaryHref) ? <Link href={primaryHref} /> : <a href={primaryHref} />}
            >
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                variant="outline"
                size="lg"
                render={isInternalHref(secondaryHref) ? <Link href={secondaryHref} /> : <a href={secondaryHref} />}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

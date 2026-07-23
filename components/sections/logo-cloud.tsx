import Image from "next/image"

import { Caption } from "@/components/typography/typography"
import { Reveal } from "@/components/motion/reveal"

export type LogoCloudItem = { name: string; logo?: string }

/**
 * "Trusted by" client strip — Home hero teaser, Case Studies, About. Renders
 * a real logo image when one is supplied, otherwise falls back to a styled
 * wordmark so the row never has to fake an asset that doesn't exist yet.
 */
export function LogoCloud({ label = "Trusted by businesses", logos }: { label?: string; logos: LogoCloudItem[] }) {
  return (
    <Reveal variant="fade">
      <div className="flex flex-col items-center gap-6">
        <Caption>{label}</Caption>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((item) =>
            item.logo ? (
              <div key={item.name} className="relative h-6 w-24 opacity-70 grayscale">
                <Image src={item.logo} alt={item.name} fill className="object-contain object-center" />
              </div>
            ) : (
              <span key={item.name} className="text-body-sm font-semibold tracking-wide text-muted-foreground">
                {item.name}
              </span>
            )
          )}
        </div>
      </div>
    </Reveal>
  )
}

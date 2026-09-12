"use client"

import { StackingCards } from "@/components/sections/stacking-cards"

export type ProcessEntry = {
  title: string
  description: string
}

/**
 * The delivery process as a scroll-driven deck: each step slides up and comes
 * to rest on the one before it, so the sequence is *felt* as accumulation
 * rather than just listed. Mirrors the stacking block on fora.
 */
export function ProcessStack({ entries }: { entries: ProcessEntry[] }) {
  const cards = entries.map((entry, i) => ({
    id: entry.title,
    content: (
      <article className="grain relative overflow-hidden border border-border bg-surface-elevated px-8 py-12 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex shrink-0 items-baseline gap-4">
            <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Step
            </span>
            <span className="font-display text-display-lg leading-none font-normal text-primary tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="max-w-xl">
            <h3 className="font-display text-3xl font-normal lg:text-4xl">{entry.title}</h3>
            <p className="mt-5 text-body-md text-pretty text-muted-foreground">{entry.description}</p>
          </div>
        </div>
      </article>
    ),
  }))

  return <StackingCards cards={cards} peek={16} topOffset={128} />
}

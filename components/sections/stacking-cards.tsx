"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"

export type StackCard = {
  id: string
  content: ReactNode
}

/**
 * Cards that stack into a deck as you scroll (fora's process/FAQ block).
 *
 * Every card is `sticky` at the same offset, so later cards slide up and come
 * to rest on top of earlier ones instead of scrolling past them. The card
 * underneath simultaneously scales down and dims, which is what creates the
 * sense of physical depth rather than a flat overlap.
 *
 * Each card is offset by `index * peek` px so the stack keeps a visible edge
 * of every card beneath the top one.
 */
export function StackingCards({
  cards,
  peek = 18,
  topOffset = 120,
}: {
  cards: StackCard[]
  /** px of each buried card left visible above the one covering it. */
  peek?: number
  /** px from viewport top where the deck comes to rest (clear the navbar). */
  topOffset?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  if (reducedMotion) {
    return (
      <div className="flex flex-col gap-6">
        {cards.map((card) => (
          <div key={card.id}>{card.content}</div>
        ))}
      </div>
    )
  }

  return (
    <div ref={ref} className="relative">
      {cards.map((card, i) => (
        <StackItem
          key={card.id}
          index={i}
          total={cards.length}
          progress={scrollYProgress}
          peek={peek}
          topOffset={topOffset}
        >
          {card.content}
        </StackItem>
      ))}
    </div>
  )
}

function StackItem({
  children,
  index,
  total,
  progress,
  peek,
  topOffset,
}: {
  children: ReactNode
  index: number
  total: number
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  peek: number
  topOffset: number
}) {
  // A card starts shrinking only once the *next* card begins to cover it, and
  // is fully settled by the time that card lands.
  const start = index / total
  const end = (index + 1) / total

  const scale = useTransform(progress, [start, end], [1, index === total - 1 ? 1 : 0.92])
  const opacity = useTransform(progress, [start, end], [1, index === total - 1 ? 1 : 0.55])

  return (
    <div className="sticky" style={{ top: topOffset + index * peek }}>
      <motion.div style={{ scale, opacity, transformOrigin: "center top" }} className="mb-6">
        {children}
      </motion.div>
    </div>
  )
}

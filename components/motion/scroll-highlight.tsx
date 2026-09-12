"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

/**
 * Editorial statement type that "inks in" word by word as it scrolls through
 * the viewport — the effect on era-residence / fora's manifesto blocks.
 *
 * Each word owns a slice of the container's scroll progress and fades from
 * muted to full foreground across it, so the sentence appears to be written
 * as you read it. Slices overlap slightly (the `- 0.06`) to avoid a hard
 * stepping cadence between adjacent words.
 */
export function ScrollHighlight({
  text,
  className,
  /** Words rendered in the accent colour once lit — pass the exact word strings. */
  accent = [],
}: {
  text: string
  className?: string
  accent?: string[]
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    // Start when the block's top reaches ~85% down the viewport, finish when
    // its bottom passes the midpoint — the whole reveal happens while the
    // text is comfortably on screen, never off the bottom edge.
    offset: ["start 0.85", "end 0.55"],
  })

  const words = text.split(" ")
  const accentSet = new Set(accent.map((w) => w.toLowerCase().replace(/[.,]/g, "")))

  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[Math.max(0, start - 0.06), end]}
            accent={accentSet.has(word.toLowerCase().replace(/[.,]/g, ""))}
            reducedMotion={reducedMotion}
          >
            {word}
          </Word>
        )
      })}
    </p>
  )
}

function Word({
  children,
  progress,
  range,
  accent,
  reducedMotion,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  accent: boolean
  reducedMotion: boolean
}) {
  const opacity = useTransform(progress, range, [0.18, 1])

  return (
    <span className="mr-[0.28em] inline-block">
      <motion.span
        style={reducedMotion ? undefined : { opacity }}
        className={cn("inline-block", accent && "text-primary")}
      >
        {children}
      </motion.span>
    </span>
  )
}

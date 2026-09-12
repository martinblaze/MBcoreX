"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

/**
 * Line-by-line masked reveal for display type.
 *
 * Each line sits in an `overflow-hidden` track and slides up from below it, so
 * the text is *uncovered* rather than faded in. This is the single biggest
 * difference between a headline that feels typeset and one that feels
 * animated — nothing is ever semi-transparent mid-flight.
 *
 * Pass one child per visual line.
 */
export function MaskReveal({
  lines,
  delay = 0,
  className,
  stagger = 0.09,
}: {
  /**
   * One entry per visual line. Prefer plain strings; React key-validates any
   * array literal containing elements, so an element line must carry its own
   * `key` at the call site.
   */
  lines: ReactNode[]
  delay?: number
  className?: string
  stagger?: number
}) {
  const reducedMotion = useReducedMotion()

  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reducedMotion ? { opacity: 0 } : { y: "110%" }}
            animate={reducedMotion ? { opacity: 1 } : { y: 0 }}
            transition={{
              duration: 1.05,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/**
 * Same reveal, but triggered when the block scrolls into view instead of on mount.
 *
 * The trigger is deliberately `useInView` on the *outer* wrapper rather than
 * `whileInView` on each line. Each line starts translated fully below its own
 * `overflow-hidden` mask, and IntersectionObserver accounts for clipping by
 * ancestors — so an observer on the line itself sees zero visible area, never
 * fires, and the line stays hidden forever. Observing the unclipped wrapper
 * breaks that deadlock.
 */
export function MaskRevealInView({
  lines,
  className,
  stagger = 0.09,
}: {
  lines: ReactNode[]
  className?: string
  stagger?: number
}) {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <span ref={ref} className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reducedMotion ? { opacity: 0 } : { y: "110%" }}
            animate={
              inView
                ? reducedMotion
                  ? { opacity: 1 }
                  : { y: 0 }
                : reducedMotion
                  ? { opacity: 0 }
                  : { y: "110%" }
            }
            transition={{ duration: 1.05, delay: i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

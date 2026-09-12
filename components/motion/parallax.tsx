"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

/**
 * Moves its children against the scroll direction while the element is on
 * screen. Used to make foreground content ride *over* a background band —
 * the overlap that makes a page feel layered instead of stacked.
 *
 * `speed` is expressed in viewport-height percent of total travel, so the
 * effect scales with the screen rather than being tuned per breakpoint.
 */
export function Parallax({
  children,
  speed = 12,
  fill = false,
  className,
}: {
  children: ReactNode
  speed?: number
  /**
   * Set when the children are absolutely positioned and expected to fill this
   * box — a `next/image` with `fill`, say.
   *
   * This is load-bearing, not cosmetic. The moving element carries a
   * `transform`, which makes it the containing block for any absolutely
   * positioned descendant. Left in normal flow it has auto height, and since
   * its only child is absolute it collapses to zero — so the child's
   * `height: 100%` resolves against zero and the image renders at 0×0.
   * Pinning the mover to `inset-0` of the (sized) outer box gives that
   * percentage something real to resolve against.
   */
  fill?: boolean
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`${speed}%`, `${-speed}%`])

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        style={reducedMotion ? undefined : { y }}
        className={cn(fill && "absolute inset-0")}
      >
        {children}
      </motion.div>
    </div>
  )
}

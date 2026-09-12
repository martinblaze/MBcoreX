"use client"

import { useRef, type ReactNode } from "react"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

/**
 * A marquee that is *driven* by scrolling rather than merely decorated by it:
 * it drifts at a constant base speed, accelerates with scroll velocity, and
 * flips direction when you scroll back up.
 *
 * That direction flip is the whole effect — it's what makes the strip feel
 * like a physical wheel geared to the page (kononenkogroup / nordpixel) rather
 * than a CSS animation running independently underneath the content.
 */
export function VelocityMarquee({
  children,
  baseSpeed = 1.2,
  className,
  itemClassName,
}: {
  children: ReactNode
  /**
   * Idle drift speed, in percent of one content copy per second. The strip
   * wraps over a 25% window, so 1 means a copy takes ~25s to pass — ambient,
   * which is the point. Values above ~3 start to read as a news ticker.
   */
  baseSpeed?: number
  className?: string
  itemClassName?: string
}) {
  const reducedMotion = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  // Map raw scroll velocity onto a modest multiplier. clamp:false is required
  // — a hard flick should genuinely overspeed the strip, not saturate.
  const velocityFactor = useTransform(smoothVelocity, [0, 1600], [0, 1.8], {
    clamp: false,
  })

  const directionRef = useRef(1)

  // Four copies are rendered; wrapping over a quarter of the total width means
  // the strip is always covered no matter where in the cycle we are.
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`)

  useAnimationFrame((_, delta) => {
    if (reducedMotion) return

    let moveBy = directionRef.current * baseSpeed * (delta / 1000)
    const factor = velocityFactor.get()

    if (factor < 0) directionRef.current = -1
    else if (factor > 0) directionRef.current = 1

    moveBy += directionRef.current * moveBy * factor
    baseX.set(baseX.get() + moveBy)
  })

  const items = Array.from({ length: 4 })

  return (
    <div className={cn("relative flex w-full flex-nowrap overflow-hidden", className)}>
      <motion.div
        className="flex flex-nowrap whitespace-nowrap"
        style={reducedMotion ? undefined : { x }}
      >
        {items.map((_, i) => (
          <span key={i} className={cn("flex shrink-0 items-center", itemClassName)} aria-hidden={i > 0}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

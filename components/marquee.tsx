"use client"

import { useRef } from "react"
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion"

import { cn } from "@/lib/utils"

const wrap = (min: number, max: number, value: number) => {
  const range = max - min
  return ((((value - min) % range) + range) % range) + min
}

/**
 * Endless ticker that reacts to scrolling: it drifts on its own, speeds up
 * with scroll velocity and reverses when you scroll back up.
 */
export function Marquee({ items, className, speed = 4 }: { items: string[]; className?: string; speed?: number }) {
  const base = useMotionValue(0)
  const direction = useRef(1)
  const { scrollY } = useScroll()
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const boost = useTransform(velocity, [0, 1000], [0, 5], { clamp: false })
  const x = useTransform(base, (value) => `${wrap(-50, 0, value)}%`)

  useAnimationFrame((_, delta) => {
    const v = boost.get()
    if (v < -0.2) direction.current = -1
    else if (v > 0.2) direction.current = 1
    base.set(base.get() - direction.current * speed * (delta / 1000) * (1 + Math.abs(v)))
  })

  const row = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-[3vw]">{item}</span>
          <span className="size-[0.35em] rounded-full bg-current" />
        </span>
      ))}
    </div>
  )

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)} aria-label={items.join(", ")} role="img">
      <motion.div style={{ x }} className="flex w-max will-change-transform">
        {row}
        {row}
      </motion.div>
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"

type CounterProps = {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

/** Animated count-up used by StatCard/StatsBand. Snaps straight to the final value under reduced motion. */
export function Counter({ value, suffix = "", prefix = "", duration = 1.4, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reducedMotion = useReducedMotion()
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(() => {
    if (reducedMotion || !ref.current) return
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
    })
  }, [spring, prefix, suffix, reducedMotion])

  return (
    <span ref={ref} className={className}>
      {reducedMotion || !inView ? `${prefix}${inView ? value : 0}${suffix}` : `${prefix}0${suffix}`}
    </span>
  )
}

"use client"

import { motion, type Variants } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { fadeIn, slideUp, staggerChildren } from "@/lib/motion"

type RevealProps = {
  children: React.ReactNode
  /** `up` is the default scroll-reveal (fade + rise); `fade` drops the translate for reduced-motion-sensitive spots. */
  variant?: "up" | "fade"
  className?: string
  /** Stagger this element's children (pass slideUp/fadeIn variants down via `StaggerItem`). */
  stagger?: boolean
  staggerDelay?: number
  as?: "div" | "section"
}

/**
 * Scroll-triggered reveal used across nearly every section. Plays once
 * (`viewport={{ once: true }}`) and collapses to opacity-only motion when
 * the visitor has `prefers-reduced-motion` set.
 */
export function Reveal({ children, variant = "up", className, stagger = false, staggerDelay = 0.08, as = "div" }: RevealProps) {
  const reducedMotion = useReducedMotion()
  const base = variant === "fade" ? fadeIn : slideUp
  const variants: Variants = reducedMotion ? fadeIn : stagger ? staggerChildren(staggerDelay) : base
  const MotionTag = as === "section" ? motion.section : motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}

/** Use inside a `<Reveal stagger>` parent so each child animates in sequence. */
export function StaggerItem({ children, className, variant = "up" }: { children: React.ReactNode; className?: string; variant?: "up" | "fade" }) {
  const reducedMotion = useReducedMotion()
  const variants = reducedMotion ? fadeIn : variant === "fade" ? fadeIn : slideUp
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

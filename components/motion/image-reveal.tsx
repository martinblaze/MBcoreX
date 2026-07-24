"use client"

import { motion } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { fadeIn, imageReveal } from "@/lib/motion"
import { cn } from "@/lib/utils"

type ImageRevealProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Clip-path wipe for hero-adjacent imagery that's essentially always in the
 * initial viewport (article hero images, featured cards) — animates on
 * mount rather than `whileInView`, since that content isn't something a
 * user scrolls deep to discover, and mount-triggered animation can't get
 * stuck the way an IntersectionObserver-gated one occasionally can.
 */
export function ImageReveal({ children, className }: ImageRevealProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial="hidden"
      animate="visible"
      variants={reducedMotion ? fadeIn : imageReveal}
    >
      {children}
    </motion.div>
  )
}

"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/** Fixed top-of-viewport progress bar tracking scroll through the article. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed inset-x-0 top-16 z-30 h-0.5 origin-left bg-primary"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

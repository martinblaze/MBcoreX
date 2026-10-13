"use client"

import { motion, useScroll, useTransform } from "framer-motion"

/** Lifts and fades its content as the page scrolls away from the top. */
export function ParallaxText({ children, className }: { children: React.ReactNode; className?: string }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, -140])
  const opacity = useTransform(scrollY, [0, 520], [1, 0.15])
  return (
    <motion.div style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

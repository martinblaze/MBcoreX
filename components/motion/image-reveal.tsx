"use client"

import { motion } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { fadeIn, imageReveal } from "@/lib/motion"
import { cn } from "@/lib/utils"

type ImageRevealProps = {
  children: React.ReactNode
  className?: string
}

/** Clip-path wipe used for hero device mockups and portfolio thumbnails on first view. */
export function ImageReveal({ children, className }: ImageRevealProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={reducedMotion ? fadeIn : imageReveal}
    >
      {children}
    </motion.div>
  )
}

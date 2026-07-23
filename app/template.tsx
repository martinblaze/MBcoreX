"use client"

import { motion } from "framer-motion"

import { pageTransition } from "@/lib/motion"

/**
 * Next.js remounts `template.tsx` on every navigation (unlike layout.tsx),
 * which is what makes a route-level cross-fade possible here.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageTransition}>
      {children}
    </motion.div>
  )
}

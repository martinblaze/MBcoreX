"use client"

import { MotionConfig } from "framer-motion"

/**
 * Honours `prefers-reduced-motion` for every transform animation without the
 * components branching on it at render time (which would mismatch server HTML).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

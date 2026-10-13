"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/** Pulls its child toward the pointer while hovered, then springs back. */
export function Magnetic({ children, strength = 0.32 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      className="inline-block"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
        y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

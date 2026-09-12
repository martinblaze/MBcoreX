"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { ThemedImage } from "@/components/layout/themed-image"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

export type BackdropSlide = {
  srcLight: string
  srcDark: string
  /** Focal point, e.g. "58% center" — keeps the subject in frame while the crop drifts. */
  position?: string
}

/**
 * Slow-cycling photographic backdrop: each slide crossfades in while drifting
 * scale, and consecutive slides alternate direction — one pushes in, the next
 * pulls out. Alternating matters; a same-direction loop visibly "snaps" back
 * to the start on every changeover, which is the tell that it's on a timer.
 *
 * The first slide is eager + `priority` because it's the LCP element on the
 * pages that use this; the rest load lazily as they come up in the rotation.
 */
export function BackdropCycle({
  slides,
  interval = 6500,
  className,
}: {
  slides: BackdropSlide[]
  /** ms each slide holds before crossfading. Long is the point — this should feel ambient, not like a carousel. */
  interval?: number
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || slides.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [interval, reducedMotion, slides.length])

  // Static first frame when the visitor has asked for reduced motion.
  if (reducedMotion) {
    const slide = slides[0]
    return (
      <div className={cn("absolute inset-0", className)}>
        <ThemedImage
          srcLight={slide.srcLight}
          srcDark={slide.srcDark}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: slide.position ?? "center" }}
        />
      </div>
    )
  }

  const pushIn = index % 2 === 0

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: pushIn ? 1 : 1.14 }}
          animate={{ opacity: 1, scale: pushIn ? 1.14 : 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.6, ease: "easeInOut" },
            // The zoom runs the full slide duration plus the crossfade, so the
            // drift never visibly stops while the image is on screen.
            scale: { duration: (interval + 1600) / 1000, ease: "linear" },
          }}
        >
          <ThemedImage
            srcLight={slides[index].srcLight}
            srcDark={slides[index].srcDark}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: slides[index].position ?? "center" }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

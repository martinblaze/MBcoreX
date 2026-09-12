"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

import { useReducedMotion } from "@/hooks/use-reduced-motion"

/**
 * Site-wide inertial scrolling.
 *
 * Everything scroll-driven on this site (the navbar wash, parallax bands,
 * word-by-word highlight, stacking cards) reads `window.scrollY`, so Lenis is
 * mounted once at the root rather than per-section — it rewrites the *actual*
 * document scroll position, which means those consumers need no special
 * handling and native anchor links keep working.
 *
 * Skipped entirely under `prefers-reduced-motion`: hijacking the wheel is
 * exactly the kind of motion that setting is asking us not to do.
 */
export function SmoothScroll() {
  const reducedMotion = useReducedMotion()
  const pathname = usePathname()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      // ~1s glide with an expo-out curve, matching --ease-out-expo in CSS so
      // scroll momentum and element entrances share one motion language.
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Leave touch alone — native momentum on phones already feels right and
      // overriding it is the fastest way to make a site feel broken on mobile.
      syncTouch: false,
      anchors: true,
      autoRaf: true,
    })

    return () => lenis.destroy()
  }, [reducedMotion])

  // App Router keeps the scroll container mounted across navigations; without
  // this the new route inherits the old page's offset mid-glide.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

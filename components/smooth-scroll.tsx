"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

/**
 * Site-wide inertial scrolling. Mounted once at the root; Lenis rewrites the
 * real document scroll, so scroll-driven components need no special handling.
 * Skipped under `prefers-reduced-motion`.
 */
export function SmoothScroll() {
  const pathname = usePathname()
  const lenis = useRef<Lenis | null>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const instance = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
      autoRaf: true,
    })
    lenis.current = instance
    return () => {
      instance.destroy()
      lenis.current = null
    }
  }, [])

  // A new route must start at the top. Lenis keeps its own target position and
  // would otherwise re-apply the old page's offset, so reset it through Lenis
  // (immediately, bypassing the glide) as well as natively. For deep links such
  // as /services#custom-software, go to the top first and then to the section:
  // the service sections are sticky, and resolving the anchor from a scrolled
  // position would land on their stuck offset instead of their natural one.
  useEffect(() => {
    lenis.current?.scrollTo(0, { immediate: true, force: true })
    window.scrollTo(0, 0)
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const id = window.setTimeout(() => {
      const target = document.getElementById(decodeURIComponent(hash))
      if (!target) return
      if (lenis.current) lenis.current.scrollTo(target, { immediate: true, force: true })
      else target.scrollIntoView()
    }, 80)
    return () => window.clearTimeout(id)
  }, [pathname])

  return null
}

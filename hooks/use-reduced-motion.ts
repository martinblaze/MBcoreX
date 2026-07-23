"use client"

import { useMediaQuery } from "./use-media-query"

/** Wraps the `prefers-reduced-motion` query so motion components can drop translation/scale and keep only opacity. */
export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}

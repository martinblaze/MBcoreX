import type { Transition, Variants } from "framer-motion"

/**
 * Shared easing/duration presets. Entrances use an expo-out curve (matches
 * `--ease-out-expo` in globals.css); toggles use a plain ease-in-out.
 */
export const easeOutExpo: Transition["ease"] = [0.16, 1, 0.3, 1]

export const durations = {
  fast: 0.15,
  base: 0.2,
  slow: 0.4,
} as const

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: durations.slow, ease: easeOutExpo } },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: durations.slow, ease: easeOutExpo } },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: durations.slow, ease: easeOutExpo } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: durations.base, ease: easeOutExpo } },
}

/** Apply to a parent; children using `slideUp`/`fadeIn` etc. stagger automatically. */
export const staggerChildren = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

/** Spread onto `whileHover`/`whileTap` for interactive cards. */
export const cardHover = {
  whileHover: { y: -4, transition: { duration: durations.base, ease: easeOutExpo } },
}

export const buttonTap = {
  whileTap: { scale: 0.98, transition: { duration: durations.fast } },
}

/** app/template.tsx route-level cross-fade. */
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: durations.base, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: durations.fast, ease: "easeInOut" } },
}

export const drawerSlide: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.25, ease: easeOutExpo } },
  exit: { x: "100%", transition: { duration: 0.2, ease: "easeInOut" } },
}

export const modalScale: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: durations.base, ease: easeOutExpo } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: durations.fast } },
}

export const accordionContent: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: durations.base, ease: easeOutExpo } },
  exit: { height: 0, opacity: 0, transition: { duration: durations.fast } },
}

/** Clip-path reveal for hero/portfolio imagery — pairs with components/motion/image-reveal.tsx. */
export const imageReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0.4 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
}

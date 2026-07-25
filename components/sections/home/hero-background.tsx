"use client"

import { motion, type Transition } from "framer-motion"
import { ShieldCheck, TrendingUp } from "lucide-react"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { ThemedImage } from "@/components/layout/themed-image"

function floatTransition(delay: number): Transition {
  return { duration: 5, repeat: Infinity, ease: "easeInOut", delay }
}

/**
 * Home hero background — Background1 filling the entire hero section
 * (paired with the scrim gradients in `Hero`'s `background` branch) rather
 * than sitting beside the copy in a boxed panel.
 */
export function HeroBackground() {
  const reducedMotion = useReducedMotion()
  const float = (delay: number) =>
    reducedMotion
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: floatTransition(delay),
        }

  return (
    <>
      <ThemedImage
        srcLight="/images/Background1Lightmode.png"
        srcDark="/images/Background1.png"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[78%_center]"
      />

      <motion.div
        {...float(0)}
        className="glass-surface absolute right-[10%] top-[8%] hidden items-center gap-2 rounded-full px-4 py-2 shadow-glow-blue lg:flex"
      >
        <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
        <span className="text-body-sm font-medium text-foreground">Secure by design</span>
      </motion.div>

      <motion.div
        {...float(1.2)}
        className="glass-surface absolute bottom-[10%] right-[4%] hidden items-center gap-2 rounded-full px-4 py-2 lg:flex"
      >
        <TrendingUp className="size-4 text-success" aria-hidden="true" />
        <span className="text-body-sm font-medium text-foreground">98% System Health</span>
      </motion.div>
    </>
  )
}

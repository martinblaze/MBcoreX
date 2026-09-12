"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import { Container } from "@/components/layout/container"
import { CurveTransition } from "@/components/layout/curve-transition"
import { BackdropCycle, type BackdropSlide } from "@/components/motion/backdrop-cycle"
import { MaskReveal } from "@/components/motion/mask-reveal"
import { RubberButton } from "@/components/ui/rubber-button"
import { Accent, Caption, Display, Text } from "@/components/typography/typography"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const slides: BackdropSlide[] = [
  { srcLight: "/images/Background1Lightmode.png", srcDark: "/images/Background1.png", position: "78% center" },
  { srcLight: "/images/Background2Lightmode.png", srcDark: "/images/Background2.png", position: "50% center" },
  { srcLight: "/images/Background3Lightmode.png", srcDark: "/images/Background3.png", position: "58% center" },
  { srcLight: "/images/Background9Lightmode.png", srcDark: "/images/Background9.png", position: "30% center" },
]

/**
 * Home hero — the page's one full-viewport moment.
 *
 * The backdrop cycles and drifts on its own timer while the copy layer moves
 * *up and out* on scroll at a different rate. Those two independent motions
 * are what create depth: the photograph stays put in the world while the text
 * leaves the frame ahead of it.
 */
export function HeroHome() {
  const ref = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // The copy drifts *up* and out, and is fully faded well before it reaches
  // the section's bottom edge. Drifting down instead pushed the buttons into
  // the curved seam, where the section's own `overflow-hidden` sliced them in
  // half on the way past.
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  return (
    <section ref={ref} className="grain relative isolate flex min-h-svh flex-col justify-end overflow-hidden">
      <motion.div className="absolute inset-0 -z-20" style={reducedMotion ? undefined : { scale: backdropScale }}>
        <BackdropCycle slides={slides} interval={6500} />
      </motion.div>

      {/* Scrims: horizontal for copy legibility, vertical to seat the curve. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/75 to-background/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/60" />

      <Container>
        <motion.div
          style={reducedMotion ? undefined : { y: copyY, opacity: copyOpacity }}
          className="max-w-4xl pt-40 pb-32 lg:pb-44"
        >
          <Caption className="mb-8 flex items-center gap-3 text-primary">
            <span aria-hidden="true" className="inline-block h-px w-10 bg-primary" />
            Software, Security, Solutions.
          </Caption>

          <Display as="h1" size="2xl">
            <MaskReveal delay={0.1} lines={[
                "We build secure",
                <Accent key="accent" tone="brand">digital solutions</Accent>,
                "that scale.",
              ]} />
          </Display>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text size="lg" tone="muted" className="mt-10 max-w-xl text-pretty">
              MB CoreX is a software development and cybersecurity company in Nigeria, delivering
              innovative, reliable and secure solutions for businesses ready to grow in a digital world.
            </Text>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <RubberButton variant="cta" render={<Link href="/contact" />}>
                Book a Consultation
              </RubberButton>
              <RubberButton variant="outline" render={<Link href="/portfolio" />}>
                View Our Work
              </RubberButton>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll cue — the only element that stays put as the copy leaves. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-28 flex justify-center lg:bottom-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={reducedMotion ? undefined : { opacity: copyOpacity }}
      >
        <span className="relative block h-12 w-px overflow-hidden bg-foreground/20">
          <motion.span
            className="absolute inset-x-0 top-0 block h-1/2 bg-primary"
            animate={reducedMotion ? undefined : { y: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>

      <CurveTransition position="bottom" tone="background" height={90} />
    </section>
  )
}

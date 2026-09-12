"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, type MotionStyle } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

type RubberButtonProps = React.ComponentProps<typeof Button> & {
  /** How far (px) the button is allowed to chase the cursor. Keep small — past ~14px it stops reading as weight and starts reading as a bug. */
  pull?: number
}

/**
 * The site's primary interactive button.
 *
 * Three things happen at once on hover, and they're deliberately desynced so
 * the control feels like a physical object rather than a CSS transition:
 *
 *  1. **Magnetism** — the whole button chases the cursor, damped by a spring.
 *  2. **Label lag** — the label chases it *further* and slower, so the surface
 *     appears to stretch around the pointer (the "rubber" part).
 *  3. **Directional fill** — a circle expands from wherever the cursor
 *     actually crossed the edge, instead of a uniform background fade.
 *
 * Under `prefers-reduced-motion` all three are dropped and it degrades to the
 * plain `<Button>` with its normal hover colour.
 */
export function RubberButton({
  className,
  children,
  pull = 10,
  variant = "cta",
  size = "lg",
  ...props
}: RubberButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()

  // Raw pointer offset from the button's centre, normalised to [-1, 1].
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  // Two springs off the same input: the shell is stiff and snappy, the label
  // is looser and lags behind it. That gap is what sells the stretch.
  const shellSpring = { stiffness: 260, damping: 18, mass: 0.6 }
  const labelSpring = { stiffness: 150, damping: 15, mass: 0.8 }

  const shellX = useSpring(mx, shellSpring)
  const shellY = useSpring(my, shellSpring)
  const labelX = useSpring(mx, labelSpring)
  const labelY = useSpring(my, labelSpring)

  const [fill, setFill] = useState({ x: 50, y: 50, on: false })

  function pointerPercent(event: React.PointerEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return { px: 50, py: 50, rect: null }
    return {
      px: ((event.clientX - rect.left) / rect.width) * 100,
      py: ((event.clientY - rect.top) / rect.height) * 100,
      rect,
    }
  }

  function handleEnter(event: React.PointerEvent) {
    const { px, py } = pointerPercent(event)
    // Seed the fill at the crossing point *before* flipping it on, so it
    // grows out of the edge the cursor came through.
    setFill({ x: px, y: py, on: true })
  }

  function handleMove(event: React.PointerEvent) {
    if (reducedMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(((event.clientX - rect.left) / rect.width - 0.5) * 2 * pull)
    my.set(((event.clientY - rect.top) / rect.height - 0.5) * 2 * pull)
  }

  function handleLeave(event: React.PointerEvent) {
    const { px, py } = pointerPercent(event)
    // Retract toward the exit point rather than the entry point, so a cursor
    // passing straight through sweeps the fill across instead of rewinding it.
    setFill({ x: px, y: py, on: false })
    mx.set(0)
    my.set(0)
  }

  const shellStyle: MotionStyle = reducedMotion ? {} : { x: shellX, y: shellY }
  const labelStyle: MotionStyle = reducedMotion ? {} : { x: labelX, y: labelY }

  return (
    <motion.span style={shellStyle} className="inline-flex">
      <Button
        ref={ref}
        variant={variant}
        size={size}
        onPointerEnter={handleEnter}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={cn(
          "relative isolate overflow-hidden",
          // The fill provides the hover colour, so suppress the variant's own
          // background swap — otherwise both fire and the fill is invisible.
          "hover:bg-[initial]",
          className
        )}
        {...props}
      >
        {!reducedMotion && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 aspect-square w-[150%] rounded-full bg-foreground"
            style={{ left: `${fill.x}%`, top: `${fill.y}%`, x: "-50%", y: "-50%" }}
            initial={false}
            animate={{ scale: fill.on ? 1.2 : 0 }}
            transition={{ duration: fill.on ? 0.52 : 0.38, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
        <motion.span
          style={labelStyle}
          className={cn(
            "relative inline-flex items-center gap-2 transition-colors duration-300",
            !reducedMotion && fill.on && "text-background"
          )}
        >
          {children}
        </motion.span>
      </Button>
    </motion.span>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useInView, useReducedMotion } from "framer-motion"

/**
 * Stacked screenshot carousel. The active picture sits on top in the centre;
 * the previous and next pictures sit directly behind it, each tucked a quarter
 * of its width under the active one. Moving on slides the deck so the new
 * active picture overlaps the one before it. Drag, swipe, click a neighbour,
 * use the arrows or the keyboard; it auto-advances until you touch it.
 */
export function ScreenCarousel({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)
  const frame = useRef<HTMLDivElement>(null)
  const drag = useRef<number | null>(null)
  const inView = useInView(frame, { amount: 0.4 })
  const reduced = useReducedMotion()
  const last = images.length - 1

  useEffect(() => {
    if (!auto || !inView || reduced) return
    const id = setInterval(() => setActive((a) => (a >= last ? 0 : a + 1)), 3800)
    return () => clearInterval(id)
  }, [auto, inView, reduced, last])

  const go = (next: number) => {
    setAuto(false)
    setActive(Math.min(last, Math.max(0, next)))
  }

  const ease = "cubic-bezier(0.16, 1, 0.3, 1)"

  return (
    <section
      className="relative overflow-hidden bg-ink py-12 text-paper md:py-20"
      aria-roledescription="carousel"
      aria-label={`${title} live screens`}
    >
      <div
        ref={frame}
        tabIndex={0}
        role="group"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(active + 1)
          if (event.key === "ArrowLeft") go(active - 1)
        }}
        onPointerDown={(event) => {
          drag.current = event.clientX
        }}
        onPointerUp={(event) => {
          if (drag.current === null) return
          const dx = event.clientX - drag.current
          drag.current = null
          if (dx < -40) go(active + 1)
          else if (dx > 40) go(active - 1)
        }}
        onPointerCancel={() => {
          drag.current = null
        }}
        className="relative touch-pan-y select-none outline-none [--w:clamp(230px,68vw,580px)] [--h:calc(var(--w)*0.625)] [--o:calc(var(--w)*0.62)] md:[--w:clamp(300px,40vw,580px)] md:[--o:calc(var(--w)*0.75)]"
        style={{ height: "var(--h)" }}
      >
        {images.map((src, i) => {
          const d = i - active
          const distance = Math.abs(d)
          const side = Math.sign(d)
          // Neighbours sit a quarter-width under the active card; anything
          // further out slides behind them and fades.
          const shift = distance === 0 ? "0px" : `calc(${side} * (var(--o) + ${(distance - 1) * 0.1} * var(--w)))`
          return (
            <button
              key={src}
              type="button"
              tabIndex={-1}
              onClick={() => go(i)}
              aria-label={`Show screen ${i + 1} of ${images.length}`}
              aria-current={d === 0}
              className="absolute left-1/2 top-0 block overflow-hidden bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
              style={{
                width: "var(--w)",
                height: "var(--h)",
                marginLeft: "calc(var(--w) * -0.5)",
                zIndex: 10 - distance,
                opacity: distance <= 1 ? 1 : 0,
                transform: `translateX(${shift}) scale(${Math.max(0.7, 1 - distance * 0.08)})`,
                transition: `transform 0.9s ${ease}, opacity 0.7s ${ease}`,
                pointerEvents: distance > 1 ? "none" : "auto",
              }}
            >
              <Image
                src={src}
                alt={`${title} live screen ${i + 1}`}
                fill
                sizes="(min-width: 768px) 580px, 70vw"
                className="pointer-events-none object-cover object-top"
              />
              {/* neighbours are dimmed so the active picture reads as the front */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-black transition-opacity duration-700"
                style={{ opacity: distance === 0 ? 0 : 0.55 }}
              />
              <span
                aria-hidden="true"
                className="absolute left-4 top-3 text-[clamp(1.4rem,4vw,3rem)] font-medium leading-none tracking-tight text-white"
              >
                0{i + 1}
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-4 left-4 text-[clamp(0.95rem,2vw,1.4rem)] font-medium tracking-tight text-white"
              >
                {title}
              </span>
            </button>
          )
        })}
      </div>

      {/* controls sit directly under the active picture, centred */}
      <div className="relative z-20 mt-8 flex items-center justify-center gap-4 md:mt-10">
        <button
          type="button"
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="Previous screen"
          className="flex h-10 w-14 items-center justify-center rounded-full border border-paper/30 transition-colors hover:bg-paper hover:text-ink disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-paper"
        >
          ←
        </button>
        <p className="t-small min-w-14 text-center text-paper/70" aria-live="polite">
          {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={() => go(active + 1)}
          disabled={active === last}
          aria-label="Next screen"
          className="flex h-10 w-14 items-center justify-center rounded-full border border-paper/30 transition-colors hover:bg-paper hover:text-ink disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-paper"
        >
          →
        </button>
      </div>
    </section>
  )
}

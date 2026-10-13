"use client"

import { useRef } from "react"

import { testimonials } from "@/content/work"

/** Horizontal scroll-snap row of quote cards with prev/next pills. */
export function Testimonials() {
  const track = useRef<HTMLUListElement>(null)

  const scroll = (direction: 1 | -1) => {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: direction * (el.clientWidth * 0.5), behavior: "smooth" })
  }

  return (
    <div>
      <ul
        ref={track}
        className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item) => (
          <li
            key={item.name}
            className="flex min-h-[22rem] w-[82vw] shrink-0 snap-start flex-col justify-between bg-white p-6 md:w-[34rem]"
          >
            <blockquote className="t-lead">&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-ink text-xs font-medium text-paper">
                {item.name.charAt(0)}
              </span>
              <span className="t-small">
                <span className="block font-medium">{item.name}</span>
                <span className="block text-muted">{item.role}</span>
              </span>
            </figcaption>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-2">
        {([-1, 1] as const).map((direction) => (
          <button
            key={direction}
            type="button"
            onClick={() => scroll(direction)}
            aria-label={direction === 1 ? "Next testimonials" : "Previous testimonials"}
            className="flex h-10 w-14 items-center justify-center rounded-full bg-paper-2 transition-colors hover:bg-ink hover:text-paper"
          >
            {direction === 1 ? "→" : "←"}
          </button>
        ))}
      </div>
    </div>
  )
}

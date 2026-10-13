"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const steps = [
  {
    title: "Discovery",
    text: "We start with a call. We learn your business, your customers and your constraints before proposing a single line of code.",
  },
  {
    title: "Strategy",
    text: "We agree scope, architecture, and the search terms worth winning, so everyone knows what done looks like.",
  },
  {
    title: "Design",
    text: "Interfaces designed for clarity and trust first, polish second. You review real screens, not slides.",
  },
  {
    title: "Build",
    text: "We build in short cycles with AI-assisted workflows for speed, and human review on every release.",
  },
  {
    title: "Launch & grow",
    text: "We ship, set up analytics and Google Search Console, then stay on to fix, improve and rank.",
  },
]

/** Black "how we work" band. Cards expand on hover/focus/tap, like the Riotters process row. */
export function Process() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col gap-3 lg:h-[26rem] lg:flex-row">
      {steps.map((step, i) => {
        const open = active === i
        return (
          <motion.button
            key={step.title}
            type="button"
            layout
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={open}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative flex min-h-24 flex-col justify-between border p-5 text-left transition-colors duration-500 lg:min-h-0",
              open ? "border-paper text-paper lg:flex-[4]" : "border-line-dark text-paper/45 lg:flex-1"
            )}
          >
            <span className="t-small">0{i + 1}</span>
            <span>
              <span className="t-title block">{step.title}</span>
              <span
                className={cn(
                  "t-small mt-4 block max-w-xs text-paper/80 transition-all duration-500",
                  open ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-0"
                )}
              >
                {step.text}
              </span>
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "absolute bottom-5 right-5 size-2 rounded-full transition-colors",
                open ? "bg-brand" : "bg-line-dark"
              )}
            />
          </motion.button>
        )
      })}
    </div>
  )
}

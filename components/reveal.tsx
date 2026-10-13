"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { cn } from "@/lib/utils"

const ease = [0.16, 1, 0.3, 1] as const

/** Fade-and-rise entrance, triggered once when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  as?: "div" | "p" | "li" | "section"
}) {
  const MotionTag = motion[Tag]
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </MotionTag>
  )
}

type HeadlineProps = {
  /** Wrap words in [[double brackets]] to give them the brand-blue highlighter. */
  text: string
  as?: "h1" | "h2" | "h3" | "p"
  className?: string
  delay?: number
  /** Animate on mount (hero) instead of on scroll. */
  immediate?: boolean
}

/** Word-by-word masked reveal with an optional wiped highlighter. */
export function Headline({ text, as: Tag = "h2", className, delay = 0, immediate }: HeadlineProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" })
  const show = immediate || inView
  const parts = text.split(/(\[\[.*?\]\])/).filter(Boolean)
  let index = 0

  // The highlighter waits for the last word to land: stagger of the final word
  // plus the word animation's duration and a short beat so it never overlaps.
  const wordCount = text.replace(/\[\[|\]\]/g, "").split(" ").filter(Boolean).length
  const highlightDelay = delay + (wordCount - 1) * 0.045 + 1.05

  const renderWords = (value: string) => {
    const words = value.split(" ").filter(Boolean)
    return (
      <>
        {/^\s/.test(value) && " "}
        {words.map((word, w) => {
          const i = index++
          return (
            <span key={i}>
              <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={show ? { y: 0 } : undefined}
                  transition={{ duration: 0.95, ease, delay: delay + i * 0.045 }}
                >
                  {word}
                </motion.span>
              </span>
              {w < words.length - 1 && " "}
            </span>
          )
        })}
        {/\s$/.test(value) && " "}
      </>
    )
  }

  // Highlighted phrase: one span per letter so CSS can "write" them in order.
  const renderHand = (value: string) => {
    let n = 0
    const words = value.split(" ").filter(Boolean)
    return words.map((word, w) => (
      <span key={w}>
        <span className="inline-block whitespace-nowrap">
          {word.split("").map((letter, c) => (
            <span key={c} className="ch" style={{ animationDelay: `${highlightDelay + 0.5 + n++ * 0.06}s` }}>
              {letter}
            </span>
          ))}
        </span>
        {w < words.length - 1 && " "}
      </span>
    ))
  }

  return (
    <Tag ref={ref as never} className={className} aria-label={text.replace(/\[\[|\]\]/g, "")}>
      <span aria-hidden="true">
        {parts.map((part, key) =>
          part.startsWith("[[") ? (
            <span key={key} className={cn("hl", show && "is-in")} style={{ animationDelay: `${highlightDelay}s` }}>
              {renderHand(part.slice(2, -2).trim())}
            </span>
          ) : (
            <span key={key}>{renderWords(part)}</span>
          )
        )}
      </span>
    </Tag>
  )
}

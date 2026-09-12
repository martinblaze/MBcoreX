"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { ArrowUpRight, Lock, MousePointerClick } from "lucide-react"

import { cn } from "@/lib/utils"

/** Logical viewport the embedded site is rendered at, per shell. */
const VIEWPORT = {
  laptop: { width: 1440, aspect: 16 / 10 },
  phone: { width: 390, aspect: 390 / 844 },
} as const

/** Below this container width the laptop shell stops being legible, so we switch to the phone. */
const PHONE_BREAKPOINT = 560

type LivePreviewProps = {
  /** URL of the running product. */
  src: string
  /** Product name — used to build the iframe's accessible name. */
  name: string
  /**
   * Screenshot shown instead of the embed. Required, because it is also the
   * fallback for any site that refuses to be framed.
   */
  fallbackImage: string
  /**
   * Set false when the target sends `X-Frame-Options` or a CSP
   * `frame-ancestors` that blocks us — the browser renders nothing at all in
   * that case, so we must not try. Falls back to `fallbackImage`.
   */
  embeddable?: boolean
  /** Skip the click-to-interact shield (e.g. on a case-study page where the embed is the point). */
  eager?: boolean
  className?: string
}

/**
 * A live, interactive embed of one of our products inside a device shell.
 *
 * The embedded site is rendered at a real logical viewport (1440px, or 390px
 * in the phone shell) and then CSS-scaled down to fit the screen area. That
 * matters: sizing the iframe element itself to the on-page width would make
 * the product render its *mobile* layout inside a laptop lid. Scaling keeps
 * clicks correctly mapped, so the preview stays genuinely usable.
 *
 * The iframe only gets a `src` once scrolled into view — three products
 * booting at once on the home page would be a heavy, pointless load.
 */
export function LivePreview({
  src,
  name,
  fallbackImage,
  embeddable = true,
  eager = false,
  className,
}: LivePreviewProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(outerRef, { once: true, margin: "200px" })
  const [width, setWidth] = useState(0)
  const [active, setActive] = useState(false)

  // Measured rather than breakpoint-driven: these previews sit in a 7-column
  // grid cell, so the container width — not the viewport width — decides which
  // shell and scale are correct.
  useEffect(() => {
    const node = outerRef.current
    if (!node) return
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const shell = width > 0 && width < PHONE_BREAKPOINT ? "phone" : "laptop"
  const { width: logicalWidth, aspect } = VIEWPORT[shell]

  // Bezel thickness, then the screen geometry that falls out of it.
  const bezel = shell === "phone" ? 10 : 9
  const shellWidth = shell === "phone" ? Math.min(width, 360) : width
  const screenWidth = Math.max(0, shellWidth - bezel * 2)
  const screenHeight = screenWidth / aspect
  const scale = screenWidth > 0 ? screenWidth / logicalWidth : 0
  const logicalHeight = Math.round(logicalWidth / aspect)

  const showEmbed = embeddable && inView && scale > 0

  const screen = (
    <div
      className="relative overflow-hidden bg-white"
      style={{
        height: screenHeight || undefined,
        borderRadius: shell === "phone" ? 26 : 4,
      }}
    >
      {showEmbed ? (
        <iframe
          src={src}
          title={`${name} — live interactive preview`}
          // Exempts this iframe from the Lenis rule that disables pointer
          // events on embeds; see app/globals.css.
          data-live-preview=""
          data-lenis-prevent=""
          loading="lazy"
          // `allow-same-origin` is required, not incidental: without it the
          // frame gets an *opaque* origin, where `localStorage`/IndexedDB
          // access throws and cookies are dropped — which white-screens any
          // app doing client-side auth (all three of ours use Firebase).
          //
          // The usual warning about pairing it with `allow-scripts` applies
          // only when the framed document is same-origin with its embedder,
          // where the frame could reach out and strip its own sandbox. Every
          // origin here is third-party to this site, so the frame keeps its
          // own origin and still cannot touch this page.
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 border-0"
          style={{
            width: logicalWidth,
            height: logicalHeight,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        />
      ) : (
        <Image
          src={fallbackImage}
          alt={`${name} — product screenshot`}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-top"
        />
      )}

      {/* Click-to-interact shield. A live iframe under the cursor swallows the
          wheel, which would trap the visitor mid-page, so interaction is opt-in
          and released again as soon as the pointer leaves. */}
      {showEmbed && !eager && !active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group/shield absolute inset-0 z-10 flex items-end justify-center bg-transparent pb-5 transition-colors hover:bg-foreground/5"
        >
          <span className="flex items-center gap-2 bg-foreground/85 px-4 py-2 text-[10px] font-medium tracking-[0.14em] text-background uppercase backdrop-blur-sm">
            <MousePointerClick className="size-3.5" aria-hidden="true" />
            Click to interact
          </span>
        </button>
      )}
    </div>
  )

  return (
    <div
      ref={outerRef}
      className={cn("w-full", className)}
      onPointerLeave={() => setActive(false)}
    >
      {shell === "laptop" ? (
        <div className="relative">
          {/* Lid */}
          <div
            className="relative border border-white/10 bg-[#111318] shadow-[0_40px_80px_-32px_rgb(0_0_0/0.55)]"
            style={{ borderRadius: 14, padding: bezel }}
          >
            {/* Camera dot, centred in the top bezel. */}
            <span
              aria-hidden="true"
              className="absolute top-[3px] left-1/2 size-[3px] -translate-x-1/2 rounded-full bg-white/25"
            />
            {screen}
          </div>
          {/* Base — genuinely wider than the lid, which is the cue that reads
              as "laptop" rather than "framed picture". */}
          <div
            aria-hidden="true"
            className="relative mx-auto h-[11px] w-[104%] bg-gradient-to-b from-[#d2d6dd] to-[#8b9099] dark:from-[#3a3f48] dark:to-[#22262c]"
            style={{ borderRadius: "0 0 12px 12px" }}
          />
          <div
            aria-hidden="true"
            className="mx-auto h-[4px] w-[13%] rounded-b-full bg-[#767b84] dark:bg-[#1b1e23]"
          />
        </div>
      ) : (
        <div
          className="relative mx-auto border border-white/10 bg-[#111318] shadow-[0_30px_60px_-28px_rgb(0_0_0/0.55)]"
          style={{ width: shellWidth || undefined, borderRadius: 36, padding: bezel }}
        >
          <span
            aria-hidden="true"
            className="absolute top-[4px] left-1/2 h-[4px] w-[64px] -translate-x-1/2 rounded-full bg-white/15"
          />
          {screen}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between gap-4">
        <span className="flex items-center gap-2 text-caption tracking-normal normal-case text-muted-foreground">
          <Lock className="size-3" aria-hidden="true" />
          {hostOf(src)}
          {!embeddable && " — screenshot"}
        </span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="link-wipe inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-foreground"
        >
          Open live site
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}

function hostOf(url: string) {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

"use client"

import { useCallback, useState } from "react"
import { motion } from "framer-motion"

const FONT_SIZE = 285
const BASELINE = 250
/** Cap height of the grotesk as a fraction of its font size, used to crop the SVG tight to the letters. */
const CAP_HEIGHT = 0.72

/**
 * Which texture fills the letters. Switch by uncommenting one line.
 * `ratio` is height / width of the image; `outline` draws a thin black edge so
 * letters stay readable when the texture has large white areas.
 */
const TEXTURE = { src: "/images/texture.jpg", ratio: 414 / 736, outline: false, offset: -120 }
// const TEXTURE = { src: "/images/texture2.jpg", ratio: 1, outline: true, offset: -560 }

/**
 * Giant footer wordmark filled with a flowing black-and-white texture.
 *
 * The letters are an SVG clip path over the texture image. Once the real font
 * has loaded, the SVG's viewBox is fitted to the measured width of the word, so
 * the letters keep their natural proportions at any screen size. The texture
 * drifts slowly behind them.
 */
export function FooterWordmark({ text = "MBcoreX" }: { text?: string }) {
  const [box, setBox] = useState({ x: 0, width: 1200 })
  const height = Math.round(FONT_SIZE * CAP_HEIGHT + 10)
  const top = BASELINE - Math.round(FONT_SIZE * CAP_HEIGHT) - 4
  const imageWidth = box.width + 300
  const textStyle = {
    fontFamily: "var(--font-sans), sans-serif",
    fontWeight: 800,
    fontSize: FONT_SIZE,
    letterSpacing: -5,
  } as const

  const measure = useCallback((node: SVGTextElement | null) => {
    if (!node) return
    const fit = () => {
      const { x, width } = node.getBBox()
      if (width > 0) setBox({ x, width })
    }
    // Re-measure once the web font is in; until then the fallback box is used.
    document.fonts.ready.then(fit)
  }, [])

  return (
    <motion.div
      aria-hidden="true"
      initial={{ clipPath: "inset(100% 0 0 0)", y: "10%" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="select-none px-[2vw] pb-[1vw] pt-[1vw]"
    >
      <svg viewBox={`${box.x} ${top} ${box.width} ${height}`} className="block h-auto w-full" role="presentation">
        <defs>
          <clipPath id="wordmark-clip">
            <text ref={measure} x="0" y={BASELINE} style={textStyle}>
              {text}
            </text>
          </clipPath>
        </defs>
        <g clipPath="url(#wordmark-clip)">
          <rect x={box.x} y={top} width={box.width} height={height} fill="#0b0b0b" />
          <image
            className="wordmark-texture"
            href={TEXTURE.src}
            x={box.x - 150}
            y={top + TEXTURE.offset}
            width={imageWidth}
            height={imageWidth * TEXTURE.ratio}
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
        {TEXTURE.outline && (
          <text x="0" y={BASELINE} style={textStyle} fill="none" stroke="#0b0b0b" strokeWidth={5} strokeLinejoin="round">
            {text}
          </text>
        )}
      </svg>
    </motion.div>
  )
}

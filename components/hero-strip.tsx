"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

import { caseStudies } from "@/content/work"

/** Full-bleed row of project screenshots that slides sideways as the page scrolls. */
export function HeroStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-38%"])

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.ul style={{ x }} className="hero-strip flex w-max gap-3">
        {[...caseStudies, ...caseStudies].map((study, i) => (
          <li key={`${study.slug}-${i}`} className="relative aspect-[16/10] w-[62vw] shrink-0 md:w-[30vw] bg-paper-2">
            <Image
              src={i % 2 === 0 ? study.cover : study.gallery[0]}
              alt=""
              fill
              sizes="(min-width: 768px) 30vw, 62vw"
              priority={i < 3}
              className="object-cover object-top"
            />
          </li>
        ))}
      </motion.ul>
    </div>
  )
}

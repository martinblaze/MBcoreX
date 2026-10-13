"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

import { LoopVideo } from "@/components/loop-video"
import type { CaseStudy } from "@/content/work"

/** Case study tile: either a looping live recording or a live screenshot, unmasked on scroll, with title and tag chips below. */
export function CaseCard({ study, priority }: { study: CaseStudy; priority?: boolean }) {
  const frame = useRef<HTMLDivElement>(null)
  // The media drifts inside its frame as the card passes through the viewport.
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "end start"] })
  const drift = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"])

  return (
    <Link href={`/case-studies/${study.slug}`} className="group block">
      <motion.div
        ref={frame}
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="relative aspect-video overflow-hidden bg-paper-2"
      >
        {study.cardMedia === "video" ? (
          <LoopVideo src={study.motion} poster={study.motionPoster} className="object-contain" />
        ) : (
          <motion.div style={{ y: drift, scale: 1.16 }} className="absolute inset-0">
            <div className="relative size-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]">
              <Image
                src={study.cover}
                alt={`${study.title} website screenshot`}
                fill
                priority={priority}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight">{study.title}</h3>
        <span className="t-small text-muted transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {study.tags.map((tag) => (
          <li key={tag} className="border border-line px-2 py-0.5 text-[0.7rem] tracking-tight">
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  )
}

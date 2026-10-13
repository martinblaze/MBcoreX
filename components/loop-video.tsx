"use client"

import { useRef, useState } from "react"

import { cn } from "@/lib/utils"

type LoopVideoProps = {
  src: string
  poster: string
  className?: string
  /** Let a tap start/stop the video on touch screens (leave off inside links, where a tap navigates). */
  tapToPlay?: boolean
}

/**
 * Muted looping video that stays on its poster frame until the pointer hovers
 * it, and rewinds when the pointer leaves. On touch screens it plays on tap
 * only when `tapToPlay` is set.
 */
export function LoopVideo({ src, poster, className, tapToPlay = false }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    ref.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => {})
  }
  const stop = () => {
    const video = ref.current
    if (!video) return
    video.pause()
    video.currentTime = 0
    setPlaying(false)
  }

  return (
    <div
      className="relative size-full"
      onPointerEnter={(event) => event.pointerType === "mouse" && play()}
      onPointerLeave={(event) => event.pointerType === "mouse" && stop()}
      onPointerUp={(event) => {
        if (!tapToPlay || event.pointerType === "mouse") return
        if (playing) stop()
        else play()
      }}
    >
      <video
        ref={ref}
        className={cn("size-full object-cover object-top", className)}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[0.72rem] font-medium tracking-tight text-ink transition-opacity duration-300",
          playing ? "opacity-0" : "opacity-100",
          !tapToPlay && "hidden pointer-fine:flex"
        )}
      >
        <span className="text-[0.6rem]">▶</span>
        <span className="hidden pointer-fine:inline">Hover to play</span>
        <span className="pointer-fine:hidden">Tap to play</span>
      </span>
    </div>
  )
}

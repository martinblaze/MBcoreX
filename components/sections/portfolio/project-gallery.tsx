"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProjectGalleryProps = {
  images: string[]
  alt: string
}

const edgeFade =
  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)"

/**
 * Coverflow-style screenshot showcase — the active screen sits large and
 * sharp in the center, neighbors peek in smaller and faded on either side.
 * Built directly on embla (not the shared `Carousel` primitive) since this
 * needs an unclipped viewport for the neighbors to show through.
 */
export function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 2,
    align: "center",
    containScroll: false,
  })
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrent(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    // Sync local state to embla's current slide as soon as it's ready, then
    // subscribe to further changes — embla is an external system here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  if (images.length === 0) return null

  const total = images.length
  function distanceFromCenter(index: number) {
    let diff = index - current
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="relative">
        <div
          ref={emblaRef}
          className="overflow-hidden"
          style={{ WebkitMaskImage: edgeFade, maskImage: edgeFade }}
        >
          <div className="flex touch-pan-y">
            {images.map((src, index) => {
              const diff = distanceFromCenter(index)
              const abs = Math.abs(diff)
              const isCenter = diff === 0

              return (
                <div key={src} className="min-w-0 shrink-0 grow-0 basis-[60%] px-2 sm:basis-[52%]">
                  <div
                    className="transition-[transform,opacity] duration-300 ease-out"
                    style={{
                      transform: `scale(${isCenter ? 1 : Math.max(1 - abs * 0.16, 0.68)}) rotate(${isCenter ? 0 : diff * -5}deg)`,
                      opacity: Math.max(1 - abs * 0.4, 0.3),
                      zIndex: 10 - abs,
                    }}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-ambient">
                      <Image
                        src={src}
                        alt={`${alt} — screen ${index + 1} of ${images.length}`}
                        fill
                        sizes="(min-width: 1024px) 480px, 60vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon-sm"
              className="absolute top-1/2 left-0 z-20 -translate-y-1/2 rounded-full border-none bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 hover:text-white sm:-left-2"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous screen"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="absolute top-1/2 right-0 z-20 -translate-y-1/2 rounded-full border-none bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 hover:text-white sm:-right-2"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next screen"
            >
              <ChevronRight />
            </Button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-1.5">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to screen ${index + 1}`}
              aria-current={index === current}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === current ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

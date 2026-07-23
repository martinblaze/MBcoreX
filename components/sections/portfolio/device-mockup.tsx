"use client"

import Image from "next/image"
import { Laptop, Smartphone, Tablet } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type DeviceMockupProps = {
  image: string
  alt: string
  className?: string
}

const devices = [
  { id: "desktop", label: "Desktop", icon: Laptop, frame: "aspect-[16/10] rounded-t-xl rounded-b-sm max-w-3xl" },
  { id: "tablet", label: "Tablet", icon: Tablet, frame: "aspect-[3/4] rounded-2xl max-w-xs" },
  { id: "mobile", label: "Mobile", icon: Smartphone, frame: "aspect-[9/18.5] rounded-[2rem] max-w-[220px]" },
] as const

/**
 * Frames the same case-study screenshot at desktop/tablet/mobile aspect
 * ratios — a responsive-preview motif rather than distinct captured
 * screens, since only one real product image exists per project.
 */
export function DeviceMockup({ image, alt, className }: DeviceMockupProps) {
  return (
    <Tabs defaultValue="desktop" className={cn("items-center", className)}>
      <TabsList>
        {devices.map((device) => (
          <TabsTrigger key={device.id} value={device.id}>
            <device.icon aria-hidden="true" />
            {device.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {devices.map((device) => (
        <TabsContent key={device.id} value={device.id} className="flex w-full justify-center">
          <div
            className={cn(
              "relative w-full overflow-hidden border border-border bg-surface-elevated p-2 shadow-ambient",
              device.frame
            )}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[inherit]">
              <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 700px, 90vw" className="object-cover" />
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

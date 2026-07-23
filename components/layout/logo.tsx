import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

const LOGO_ASPECT = 741 / 337

type LogoProps = {
  /** Rendered height in pixels; width is derived from the source aspect ratio. */
  height?: number
  href?: string | false
  className?: string
  priority?: boolean
}

/** The MB CoreX wordmark. Never distort — width is always derived from `height`. */
export function Logo({ height = 28, href = "/", className, priority = false }: LogoProps) {
  const image = (
    <Image
      src="/images/MBcorexLogoremovebg.png"
      alt={href === false ? "MB CoreX" : ""}
      width={Math.round(height * LOGO_ASPECT)}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
      style={{ height, width: "auto" }}
    />
  )

  if (href === false) return image

  return (
    <Link href={href} aria-label="MB CoreX — home" className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
      {image}
    </Link>
  )
}

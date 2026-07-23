import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** True for same-site routes/anchors (`/about`, `#faq`) — false for `mailto:`, `tel:`, or external URLs. */
export function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#")
}

/** ISO date ("2026-06-02") → "June 2, 2026", for blog/case-study bylines. */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

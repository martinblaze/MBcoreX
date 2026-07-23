"use client"

import { Link2 } from "lucide-react"
import { toast } from "sonner"

import { brandIcons } from "@/components/icons/icon-config"
import { Button } from "@/components/ui/button"
import { Caption } from "@/components/typography/typography"

type ShareButtonsProps = {
  url: string
  title: string
  className?: string
}

export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  async function copyLink() {
    await navigator.clipboard.writeText(url)
    toast.success("Link copied to clipboard")
  }

  const xHref = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  return (
    <div className={className}>
      <Caption className="mb-3 block">Share This Article</Caption>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          aria-label="Share on X"
          render={<a href={xHref} target="_blank" rel="noopener noreferrer" />}
        >
          <brandIcons.x className="size-4" aria-hidden="true" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Share on LinkedIn"
          render={<a href={linkedInHref} target="_blank" rel="noopener noreferrer" />}
        >
          <brandIcons.linkedin className="size-4" aria-hidden="true" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Copy link" onClick={copyLink}>
          <Link2 className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}

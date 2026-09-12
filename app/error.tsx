"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Display, Text } from "@/components/typography/typography"
import { RubberButton } from "@/components/ui/rubber-button"
import { siteConfig } from "@/lib/constants"

/** Route-level error boundary — catches render/runtime errors in any page and offers a recoverable path instead of a blank screen. */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Section spacing="default" glow="center" className="pt-32 lg:pt-40">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-accent text-error-500">
          <AlertTriangle className="size-7" aria-hidden="true" />
        </div>
        <Display as="h1" size="lg">
          Something Went Wrong
        </Display>
        <Text tone="muted">
          An unexpected error occurred while loading this page. Try again, or reach us directly at{" "}
          {siteConfig.email} if it keeps happening.
        </Text>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <RubberButton variant="cta" onClick={() => reset()}>
            Try Again
          </RubberButton>
          <RubberButton variant="outline" render={<Link href="/" />}>
            Return Home
          </RubberButton>
        </div>
      </div>
    </Section>
  )
}

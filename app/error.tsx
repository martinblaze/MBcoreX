"use client"

import { useEffect } from "react"

import { siteConfig } from "@/lib/constants"

/** Route-level error boundary: a recoverable path instead of a blank screen. */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="wrap pb-28 pt-40 md:pb-40 md:pt-52">
      <h1 className="t-mega max-w-[12ch]">Something went wrong.</h1>
      <p className="t-lead mt-6 max-w-md text-muted">
        Try again, or email {siteConfig.email} if it keeps happening.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-10 rounded-full bg-ink px-6 py-3 text-[0.9rem] font-medium text-paper"
      >
        Try again
      </button>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { EmailField } from "@/components/forms/preset-fields"

/** Compact newsletter signup for the footer — full-section variant lives in components/sections/newsletter-section.tsx. */
export function FooterNewsletter() {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 400))
    setSubmitting(false)
    setDone(true)
    setEmail("")
  }

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-body-sm font-medium text-foreground">Stay updated</h3>
      {done ? (
        <p className="text-body-sm text-primary">You&apos;re subscribed — thanks!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-start gap-2">
          <div className="flex-1">
            <EmailField
              aria-label="Email address"
              placeholder="you@company.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <Button type="submit" variant="outline" size="icon" loading={submitting} aria-label="Subscribe">
            {!submitting && <Send className="size-4" aria-hidden="true" />}
          </Button>
        </form>
      )}
    </div>
  )
}

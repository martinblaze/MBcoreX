"use client"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { EmailField } from "@/components/forms/preset-fields"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/typography/typography"
import { Reveal } from "@/components/motion/reveal"

type NewsletterSectionProps = {
  heading?: string
  description?: string
  onSubmit?: (email: string) => Promise<void>
}

export function NewsletterSection({
  heading = "Stay ahead on security & engineering",
  description = "Occasional insights on software, cybersecurity and AI-assisted delivery. No spam.",
  onSubmit,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    await onSubmit?.(email)
    setSubmitting(false)
    setDone(true)
    setEmail("")
  }

  return (
    <Section spacing="tight">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface px-6 py-12 text-center">
          <div>
            <Heading level={2} size="lg">
              {heading}
            </Heading>
            <Text size="sm" tone="muted" className="mt-2">
              {description}
            </Text>
          </div>
          {done ? (
            <Text size="sm" tone="brand">
              You&apos;re subscribed — thanks for joining.
            </Text>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:items-start">
              <div className="flex-1">
                <EmailField
                  aria-label="Email address"
                  placeholder="you@company.com"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <Button type="submit" variant="cta" loading={submitting}>
                {!submitting && <Send className="size-4" aria-hidden="true" />}
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  )
}

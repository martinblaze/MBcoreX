"use client"

import { useState } from "react"
import Link from "next/link"
import { Compass, Search as SearchIcon } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Display, Text, Caption } from "@/components/typography/typography"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { SearchField } from "@/components/forms/preset-fields"
import { searchContent } from "@/lib/search"

const popularLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
]

export default function NotFound() {
  const [query, setQuery] = useState("")
  const results = searchContent(query, 5)

  return (
    <Section spacing="default" glow="center">
      <Reveal>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-accent text-primary">
            <Compass className="size-7" aria-hidden="true" />
          </div>
          <Display as="h1" size="lg">
            404
          </Display>
          <Text tone="muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
          </Text>

          <div className="w-full max-w-sm text-left">
            <SearchField
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search the site"
            />
            {query.trim() !== "" && (
              <div className="mt-2 flex flex-col gap-1 rounded-lg border border-border bg-card p-2">
                {results.length === 0 ? (
                  <Text size="sm" tone="muted" className="px-2 py-1.5">
                    No results — try Services, Portfolio or Insights below.
                  </Text>
                ) : (
                  results.map((result) => (
                    <Link
                      key={result.href}
                      href={result.href}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-body-sm text-foreground transition-colors hover:bg-accent"
                    >
                      <SearchIcon className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                      <span className="truncate">{result.title}</span>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="cta" render={<Link href="/" />}>
              Return Home
            </Button>
            <Button variant="outline" render={<Link href="/contact" />}>
              Book a Consultation
            </Button>
          </div>

          <div className="mt-4 flex flex-col items-center gap-3">
            <Caption>Popular Pages</Caption>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {popularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

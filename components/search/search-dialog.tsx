"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { FileText, FolderKanban, Search as SearchIcon, Wrench } from "lucide-react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { EmptyState } from "@/components/feedback/states"
import { Text } from "@/components/typography/typography"
import { cn } from "@/lib/utils"
import { searchContent, type SearchResult } from "@/lib/search"

const typeIcons: Record<SearchResult["type"], typeof FileText> = {
  "Blog Post": FileText,
  "Case Study": FolderKanban,
  Service: Wrench,
}

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const router = useRouter()

  const results = searchContent(query)

  // Reset the active row whenever the query changes, and clear the query
  // whenever the dialog closes. Adjusted during render (React's documented
  // pattern for state that depends on another value) rather than in a
  // useEffect, which would cause an extra render pass.
  const [prevQuery, setPrevQuery] = useState(query)
  if (query !== prevQuery) {
    setPrevQuery(query)
    setActiveIndex(0)
  }

  const [prevOpen, setPrevOpen] = useState(open)
  if (open !== prevOpen) {
    setPrevOpen(open)
    if (!open) setQuery("")
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  function go(result: SearchResult) {
    setOpen(false)
    router.push(result.href)
  }

  function onInputKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault()
      go(results[activeIndex])
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="hidden text-muted-foreground sm:inline-flex"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-4" aria-hidden="true" />
        Search
        <KbdGroup className="ml-2">
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <Button variant="ghost" size="icon" aria-label="Search the site" className="sm:hidden" onClick={() => setOpen(true)}>
        <SearchIcon className="size-5" aria-hidden="true" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton={false} className="top-[20%] max-w-lg translate-y-0 gap-0 p-0 sm:max-w-lg">
          <DialogHeader className="sr-only">
            <DialogTitle>Search MB CoreX</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2 border-b border-border px-4">
            <SearchIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <Input
              autoFocus
              placeholder="Search articles, case studies, services..."
              aria-label="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onInputKeyDown}
              className="h-12 border-none px-0 shadow-none focus-visible:ring-0"
            />
            <Kbd className="shrink-0">Esc</Kbd>
          </div>

          <div className="max-h-80 overflow-y-auto p-2">
            {query.trim() === "" ? (
              <div className="p-6 text-center">
                <Text size="sm" tone="muted">
                  Start typing to search across insights, case studies and services.
                </Text>
              </div>
            ) : results.length === 0 ? (
              <EmptyState
                icon={SearchIcon}
                title="No results found"
                description="Try a broader term, or browse Services and Portfolio directly."
              />
            ) : (
              <ul>
                {results.map((result, index) => {
                  const Icon = typeIcons[result.type]
                  return (
                    <li key={result.href}>
                      <button
                        type="button"
                        onClick={() => go(result)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={cn(
                          "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                          index === activeIndex ? "bg-accent" : "hover:bg-accent/60"
                        )}
                      >
                        <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="flex min-w-0 flex-col">
                          <span className="truncate text-body-sm font-medium text-foreground">{result.title}</span>
                          <span className="truncate text-body-sm text-muted-foreground">
                            {result.type} · {result.category}
                          </span>
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

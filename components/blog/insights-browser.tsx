"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Search as SearchIcon } from "lucide-react"

import { Grid } from "@/components/layout/grid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BlogCard } from "@/components/cards/blog-card"
import { EmptyState } from "@/components/feedback/states"
import { Reveal, StaggerItem } from "@/components/motion/reveal"

import { categorySlug, type BlogCategory, type BlogPost } from "@/content/insights"
import { formatDate } from "@/lib/utils"

const PAGE_SIZE = 6

export function InsightsBrowser({ posts, initialQuery = "" }: { posts: BlogPost[]; initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery)
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return posts
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        post.category.toLowerCase().includes(q)
    )
  }, [posts, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <div className="flex flex-col gap-8">
      <div className="relative max-w-md">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          type="search"
          placeholder="Search articles..."
          aria-label="Search articles"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setPage(1)
          }}
          className="h-10 pl-9"
        />
      </div>

      {paged.length === 0 ? (
        <EmptyState
          icon={SearchIcon}
          title="No articles match your search"
          description="Try a different keyword, or browse all categories below."
          action={{ label: "Clear Search", onClick: () => setQuery("") }}
        />
      ) : (
        <Reveal stagger>
          <Grid cols={3} gap="lg">
            {paged.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={formatDate(post.publishedAt)}
                  image={post.image}
                  href={`/insights/${post.slug}`}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </Grid>
        </Reveal>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </Button>
          <Badge variant="secondary" className="h-auto px-3 py-1">
            Page {currentPage} of {totalPages}
          </Badge>
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Next page"
            disabled={currentPage === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      )}
    </div>
  )
}

export function CategoryChips({ categories, active }: { categories: BlogCategory[]; active?: BlogCategory }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/insights">
        <Badge variant={!active ? "default" : "secondary"} className="h-auto cursor-pointer px-3 py-1.5">
          All
        </Badge>
      </Link>
      {categories.map((category) => (
        <Link key={category} href={`/insights/category/${categorySlug(category)}`}>
          <Badge variant={active === category ? "default" : "secondary"} className="h-auto cursor-pointer px-3 py-1.5">
            {category}
          </Badge>
        </Link>
      ))}
    </div>
  )
}

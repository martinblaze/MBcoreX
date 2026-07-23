import { blogPosts } from "@/content/insights"
import { portfolioProjects } from "@/content/portfolio"
import { services } from "@/content/services"

export type SearchResult = {
  type: "Blog Post" | "Case Study" | "Service"
  title: string
  description: string
  href: string
  category: string
}

/** Static search index, built once at module load from existing content sources. */
export const searchIndex: SearchResult[] = [
  ...blogPosts.map((post) => ({
    type: "Blog Post" as const,
    title: post.title,
    description: post.excerpt,
    href: `/insights/${post.slug}`,
    category: post.category,
  })),
  ...portfolioProjects.map((project) => ({
    type: "Case Study" as const,
    title: project.title,
    description: project.summary,
    href: `/portfolio/${project.slug}`,
    category: project.category,
  })),
  ...services.map((service) => ({
    type: "Service" as const,
    title: service.title,
    description: service.shortDescription,
    href: `/services#${service.slug}`,
    category: service.category,
  })),
]

/** Simple substring relevance match across title/description/category — no external search service needed at this content scale. */
export function searchContent(query: string, limit = 8): SearchResult[] {
  const trimmed = query.trim().toLowerCase()
  if (!trimmed) return []

  const scored = searchIndex
    .map((item) => {
      const title = item.title.toLowerCase()
      const description = item.description.toLowerCase()
      const category = item.category.toLowerCase()

      let score = 0
      if (title.startsWith(trimmed)) score += 10
      else if (title.includes(trimmed)) score += 6
      if (category.includes(trimmed)) score += 3
      if (description.includes(trimmed)) score += 1

      return { item, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map((entry) => entry.item)
}

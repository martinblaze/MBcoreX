import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/seo"
import { portfolioProjects } from "@/content/portfolio"
import { blogPosts, blogCategories, categorySlug } from "@/content/insights"

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/pricing",
  "/portfolio",
  "/case-studies",
  "/cybersecurity",
  "/ai-solutions",
  "/insights",
  "/careers",
  "/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }))

  const projectRoutes = portfolioProjects.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const postRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/insights/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  const categoryRoutes = blogCategories.map((category) => ({
    url: `${siteUrl}/insights/category/${categorySlug(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }))

  return [...routes, ...projectRoutes, ...postRoutes, ...categoryRoutes]
}

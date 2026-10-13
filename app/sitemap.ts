import type { MetadataRoute } from "next"

import { blogPosts } from "@/content/insights"
import { locations } from "@/content/locations"
import { services } from "@/content/services"
import { caseStudies } from "@/content/work"
import { absoluteUrl } from "@/lib/seo"

// Update when site content materially changes; used as lastModified for static pages.
const lastUpdated = new Date("2026-10-13")

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/locations", priority: 0.8, changeFrequency: "monthly" },
    { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
    { path: "/case-studies", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path || "/"),
      lastModified: lastUpdated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: lastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...locations.map((location) => ({
      url: absoluteUrl(`/locations/${location.slug}`),
      lastModified: lastUpdated,
      changeFrequency: "monthly" as const,
      priority: location.slug === "lagos" || location.slug === "abuja" ? 0.8 : 0.6,
    })),
    ...caseStudies.map((study) => ({
      url: absoluteUrl(`/case-studies/${study.slug}`),
      lastModified: lastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/insights/${post.slug}`),
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}

import type { Metadata } from "next"

import { siteConfig } from "@/lib/constants"

/**
 * Placeholder production domain — swap via NEXT_PUBLIC_SITE_URL once the
 * real domain is live. Every canonical/OG URL below is derived from this.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mbcorex.com"

const defaultOgImage = {
  url: `${siteUrl}/images/MBcorexLogoremovebg.png`,
  width: 741,
  height: 337,
  alt: siteConfig.name,
}

type BuildMetadataInput = {
  title: string
  description: string
  path: string
  image?: { url: string; width: number; height: number; alt: string }
  noIndex?: boolean
}

/** Per-page metadata builder — every page passes its own title/description/path through this. */
export function buildMetadata({ title, description, path, image, noIndex = false }: BuildMetadataInput): Metadata {
  const url = `${siteUrl}${path}`
  const ogImage = image ?? defaultOgImage

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [ogImage],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  }
}

/** Organization JSON-LD — rendered once in the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/MBcorexLogoremovebg.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: { "@type": "PostalAddress", addressCountry: "NG" },
    areaServed: { "@type": "Country", name: "Nigeria" },
    sameAs: [],
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export function caseStudyJsonLd(project: { title: string; seoTitle?: string; summary: string; slug: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.seoTitle ?? project.title,
    description: project.summary,
    url: `${siteUrl}/portfolio/${project.slug}`,
    image: `${siteUrl}${project.image}`,
    author: { "@type": "Organization", name: siteConfig.name, url: siteUrl },
  }
}

export function articleJsonLd(post: {
  title: string
  excerpt: string
  slug: string
  image: string
  publishedAt: string
  updatedAt?: string
  authorName: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: post.authorName },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/MBcorexLogoremovebg.png` },
    },
    mainEntityOfPage: `${siteUrl}/insights/${post.slug}`,
  }
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}

export function serviceJsonLd(service: { title: string; description: string; slug: string; href?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteUrl },
    url: `${siteUrl}${service.href ?? `/services#${service.slug}`}`,
  }
}

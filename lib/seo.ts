import type { Metadata } from "next"

import { locations } from "@/content/locations"
import { services, type Faq, type Service } from "@/content/services"
import { siteConfig } from "@/lib/constants"

/**
 * Production domain — set NEXT_PUBLIC_SITE_URL in the deployment environment.
 * Every canonical, Open Graph and structured-data URL is derived from this.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mbcorex.com").replace(/\/$/, "")

export const absoluteUrl = (path: string) => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`

export const organizationId = `${siteUrl}/#organization`
export const websiteId = `${siteUrl}/#website`
export const founderId = `${siteUrl}/#founder`

const logoUrl = absoluteUrl("/images/MBcorexLogoremovebg.png")

/** Default social image: generated at /opengraph-image (see app/opengraph-image.tsx). */
const defaultOgImage = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}: web, software and mobile app development and Google SEO in Nigeria`,
}

type BuildMetadataInput = {
  title: string
  description: string
  path: string
  image?: { url: string; width: number; height: number; alt: string }
  noIndex?: boolean
  /** Use "article" for guides so Google and social previews treat them as editorial content. */
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  keywords?: string[]
}

/** Per-page metadata builder — every page passes its own title/description/path through this. */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path)
  const ogImage = image ?? defaultOgImage

  return {
    // `absolute` keeps long search-intent titles intact and stops the root title
    // template appending the brand a second time.
    title: { absolute: title.includes("MB CoreX") ? title : `${title} | MB CoreX` },
    description,
    keywords,
    alternates: { canonical: url, languages: { "en-NG": url, "x-default": url } },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [ogImage],
      locale: "en_NG",
      type,
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime, authors: [siteConfig.legalName] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  }
}

// ---------------------------------------------------------------------------
// Structured data (JSON-LD)
// ---------------------------------------------------------------------------

const country = { "@type": "Country", name: "Nigeria", sameAs: "https://en.wikipedia.org/wiki/Nigeria" }

/** Every state plus the FCT, so search engines see the full service area. */
const areaServed = [
  country,
  ...locations.map((location) => ({
    "@type": "AdministrativeArea",
    name: location.kind === "fct" ? "Federal Capital Territory" : `${location.name} State`,
    containedInPlace: country,
  })),
]

function offerFor(service: Service) {
  return {
    "@type": "Offer",
    priceCurrency: "NGN",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "NGN",
      minPrice: service.priceFrom,
      maxPrice: service.priceTo,
    },
    itemOffered: { "@type": "Service", name: service.title, url: absoluteUrl(`/services/${service.slug}`) },
    areaServed: country,
  }
}

/**
 * Rendered once in the root layout. MB CoreX is an online-only company, so no
 * street address is declared; inventing one would be misleading.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": organizationId,
    name: siteConfig.name,
    alternateName: ["MBCoreX", "MB Core X", siteConfig.legalName],
    legalName: siteConfig.legalName,
    url: siteUrl,
    logo: { "@type": "ImageObject", url: logoUrl, width: 741, height: 337 },
    image: logoUrl,
    description:
      "MB CoreX is an online software company in Nigeria that builds websites, web applications, custom software and mobile apps, and runs in-depth Google SEO for businesses in every state.",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: { "@type": "PostalAddress", addressCountry: "NG" },
    areaServed,
    serviceType: services.map((service) => service.title),
    knowsAbout: [
      "Web development",
      "Web application development",
      "Custom software development",
      "Mobile app development",
      "Search engine optimisation",
      "Technical SEO",
      "Next.js",
      "TypeScript",
    ],
    currenciesAccepted: "NGN",
    availableLanguage: "English",
    founder: { "@id": founderId },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: "NG",
        availableLanguage: "English",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MB CoreX services",
      itemListElement: services.map(offerFor),
    },
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: siteConfig.name,
    alternateName: "MBCoreX",
    inLanguage: "en-NG",
    publisher: { "@id": organizationId },
  }
}

/** Person JSON-LD for the founder bio on /about — knowledge areas only, no certification claim. */
export function personJsonLd(person: { name: string; role: string; bio: string; knowledgeAreas: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": founderId,
    name: person.name,
    jobTitle: person.role,
    description: person.bio,
    knowsAbout: person.knowledgeAreas,
    worksFor: { "@id": organizationId },
    url: absoluteUrl("/about"),
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
      item: absoluteUrl(item.path),
    })),
  }
}

export function webPageJsonLd(page: {
  name: string
  description: string
  path: string
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage"
}) {
  return {
    "@context": "https://schema.org",
    "@type": page.type ?? "WebPage",
    name: page.name,
    description: page.description,
    url: absoluteUrl(page.path),
    inLanguage: "en-NG",
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
  }
}

export function itemListJsonLd(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  }
}

export function caseStudyJsonLd(project: { title: string; seoTitle?: string; summary: string; slug: string; cover: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.seoTitle ?? project.title,
    description: project.summary,
    url: absoluteUrl(`/case-studies/${project.slug}`),
    image: absoluteUrl(project.cover),
    author: { "@id": organizationId },
    creator: { "@id": organizationId },
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
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "en-NG",
    author: { "@type": "Person", name: post.authorName, "@id": founderId },
    publisher: { "@id": organizationId },
    mainEntityOfPage: absoluteUrl(`/insights/${post.slug}`),
  }
}

export function faqJsonLd(items: Faq[]) {
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

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: { "@id": organizationId },
    areaServed,
    url: absoluteUrl(`/services/${service.slug}`),
    offers: offerFor(service),
  }
}

/** Service delivered to one state, used on region pages. */
export function regionServiceJsonLd(args: { name: string; description: string; path: string; area: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    provider: { "@id": organizationId },
    areaServed: { "@type": "AdministrativeArea", name: args.area, containedInPlace: country },
    url: absoluteUrl(args.path),
  }
}

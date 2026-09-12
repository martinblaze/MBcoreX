import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Reveal } from "@/components/motion/reveal"
import { CTABanner } from "@/components/sections/cta-banner"
import { InsightsBrowser, CategoryChips } from "@/components/blog/insights-browser"
import { JsonLd } from "@/components/seo/json-ld"

import { blogCategories, categorySlug, categoryFromSlug, getPostsByCategory } from "@/content/insights"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

type Props = { params: Promise<{ category: string }> }

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: categorySlug(category) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = categoryFromSlug(slug)
  if (!category) return {}

  return buildMetadata({
    title: `${category} Insights`,
    description: `MB CoreX articles on ${category.toLowerCase()} — engineering, security and business thinking from the team building the software.`,
    path: `/insights/category/${slug}`,
  })
}

export default async function InsightsCategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = categoryFromSlug(slug)
  if (!category) notFound()

  const posts = getPostsByCategory(category)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: category, path: `/insights/category/${slug}` },
        ])}
      />

      <PageHero
        breadcrumbs={
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: category }]}
          />
        }
        eyebrow="Category"
        title={[category]}
        description={`${posts.length} article${posts.length === 1 ? "" : "s"} on ${category.toLowerCase()}.`}
      />

      <Section spacing="tight">
        <Reveal>
          <CategoryChips categories={blogCategories} active={category} />
        </Reveal>
      </Section>

      <Section>
        <InsightsBrowser posts={posts} />
      </Section>

      <CTABanner
        heading="Have a Question in the Meantime?"
        description="Reach out directly — we're happy to talk through it."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
      />
    </>
  )
}

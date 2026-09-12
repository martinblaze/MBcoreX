import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Section } from "@/components/layout/section"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Accent, Caption, Heading, Text } from "@/components/typography/typography"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/motion/reveal"
import { ImageReveal } from "@/components/motion/image-reveal"
import { CTABanner } from "@/components/sections/cta-banner"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { InsightsBrowser, CategoryChips } from "@/components/blog/insights-browser"
import { JsonLd } from "@/components/seo/json-ld"

import { blogPosts, blogCategories, allTags } from "@/content/insights"
import { getReadingTime } from "@/lib/reading-time"
import { formatDate } from "@/lib/utils"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"

type Props = { searchParams: Promise<{ tag?: string }> }

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Technical writing from MB CoreX on software engineering, AI-assisted development, cybersecurity, cloud and business technology.",
  path: "/insights",
})

export default async function InsightsPage({ searchParams }: Props) {
  const { tag } = await searchParams
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const rest = blogPosts.filter((post) => post.slug !== featured.slug)

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])} />

      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />}
        eyebrow="Insights"
        title={[
          "Engineering &amp; security",
          <Accent key="accent" tone="brand">insights.</Accent>,
        ]}
        description="Technical writing on software engineering, AI-assisted development, cybersecurity, cloud and business technology — written by the people building the software."
        image={{
          srcLight: "/images/Engineering&SecurityInsightsLightmode.png",
          srcDark: "/images/Engineering&SecurityInsights.png",
          position: "center",
        }}
      />

      <Section spacing="tight">
        <Reveal>
          <Caption className="mb-4 block">Featured Article</Caption>
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/30 lg:grid-cols-2"
          >
            <ImageReveal className="relative aspect-[16/10] w-full lg:h-full lg:aspect-auto">
              <Image
                src={featured.image}
                alt=""
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </ImageReveal>
            <div className="flex flex-col justify-center gap-3 p-6 lg:p-10">
              <div className="flex items-center gap-2">
                <Badge>{featured.category}</Badge>
                <Text size="sm" tone="muted">
                  {formatDate(featured.publishedAt)} · {getReadingTime(featured.body)} min read
                </Text>
              </div>
              <Heading level={2} size="lg">
                {featured.title}
              </Heading>
              <Text tone="muted" className="line-clamp-3">
                {featured.excerpt}
              </Text>
              <span className="mt-2 inline-flex items-center gap-1.5 text-body-sm font-medium text-primary">
                Read Article
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal>
          <Caption className="mb-4 block">Browse by Category</Caption>
          <CategoryChips categories={blogCategories} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Heading level={2} size="lg" className="mb-8">
            All Articles
          </Heading>
        </Reveal>
        <InsightsBrowser posts={rest} initialQuery={tag ?? ""} />
      </Section>

      <Section spacing="tight">
        <Reveal>
          <Caption className="mb-4 block">Popular Tags</Caption>
          <div className="flex flex-wrap gap-2">
            {allTags.map((item) => (
              <Link key={item} href={`/insights?tag=${encodeURIComponent(item)}`}>
                <Badge variant="outline" className="h-auto cursor-pointer px-3 py-1">
                  {item}
                </Badge>
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      <NewsletterSection />

      <CTABanner
        heading="Have a Question in the Meantime?"
        description="Reach out directly — we're happy to talk through it."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
      />
    </>
  )
}

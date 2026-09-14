import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, Clock } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Grid } from "@/components/layout/grid"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Heading, Text } from "@/components/typography/typography"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Reveal } from "@/components/motion/reveal"
import { ImageReveal } from "@/components/motion/image-reveal"
import { BlogCard } from "@/components/cards/blog-card"
import { CTABanner } from "@/components/sections/cta-banner"
import { PostBody, getHeadings } from "@/components/blog/post-body"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { ReadingProgress } from "@/components/blog/reading-progress"
import { ShareButtons } from "@/components/blog/share-buttons"
import { JsonLd } from "@/components/seo/json-ld"

import { blogPosts, getBlogPost, getRelatedPosts, categorySlug } from "@/content/insights"
import { getReadingTime } from "@/lib/reading-time"
import { formatDate } from "@/lib/utils"
import { buildMetadata, breadcrumbJsonLd, articleJsonLd, siteUrl } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    image: { url: `${siteUrl}${post.image}`, width: 1433, height: 1099, alt: post.title },
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const headings = getHeadings(post.body)
  const readingTime = getReadingTime(post.body)
  const related = getRelatedPosts(post)
  const initials = post.authorName
    .split(" ")
    .map((part) => part[0])
    .join("")

  return (
    <>
      <ReadingProgress />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          excerpt: post.excerpt,
          slug: post.slug,
          image: post.image,
          publishedAt: post.publishedAt,
          authorName: post.authorName,
        })}
      />

      <Section spacing="tight" className="pt-32 lg:pt-40">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: post.category, href: `/insights/category/${categorySlug(post.category)}` },
            { label: post.title },
          ]}
        />
      </Section>

      <Section spacing="tight" containerWidth="narrow">
        <Reveal>
          <Badge>{post.category}</Badge>
          <Heading level={1} size="xl" className="mt-4">
            {post.title}
          </Heading>
          <Text tone="muted" className="mt-4">
            {post.excerpt}
          </Text>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5">
              <Avatar>
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div>
                <Text size="sm" className="font-medium">
                  {post.authorName}
                </Text>
                <Text size="sm" tone="muted">
                  {post.authorRole}
                </Text>
              </div>
            </div>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <div className="flex items-center gap-1.5 text-body-sm text-muted-foreground">
              <CalendarDays className="size-4" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
            <div className="flex items-center gap-1.5 text-body-sm text-muted-foreground">
              <Clock className="size-4" aria-hidden="true" />
              {readingTime} min read
            </div>
          </div>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <ImageReveal className="relative aspect-[16/9] w-full rounded-2xl">
          <Image src={post.image} alt="" fill priority sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover" />
        </ImageReveal>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[1fr_220px]">
          <Reveal as="section" className="min-w-0 order-2 lg:order-1">
            <PostBody blocks={post.body} />

            <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/insights?tag=${encodeURIComponent(tag)}`}>
                  <Badge variant="outline" className="h-auto cursor-pointer px-3 py-1">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>

            <ShareButtons
              url={`${siteUrl}/insights/${post.slug}`}
              title={post.title}
              className="mt-8 border-t border-border pt-6"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <TableOfContents items={headings} />
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <Reveal>
            <Heading level={2} size="lg" className="mb-8">
              Related Articles
            </Heading>
          </Reveal>
          <Grid cols={3} gap="lg">
            {related.map((item) => (
              <BlogCard
                key={item.slug}
                title={item.title}
                excerpt={item.excerpt}
                category={item.category}
                date={formatDate(item.publishedAt)}
                image={item.image}
                href={`/insights/${item.slug}`}
              />
            ))}
          </Grid>
        </Section>
      )}

      <CTABanner
        image="talk"
        heading="Have a Project That Needs This Kind of Thinking?"
        description="Let's talk about how MB CoreX can help you build it."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
      />
    </>
  )
}

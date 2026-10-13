import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { GuideBody } from "@/components/guide-body"
import { Pill } from "@/components/pill"
import { PostCard } from "@/components/post-card"
import { Reveal } from "@/components/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { blogPosts, getBlogPost, getRelatedPosts, guideSeo } from "@/content/insights"
import { services } from "@/content/services"
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, absoluteUrl } from "@/lib/seo"

type Params = { slug: string }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  const seo = guideSeo[post.slug]
  return buildMetadata({
    title: seo?.title ?? post.title,
    description: seo?.description ?? post.excerpt,
    path: `/insights/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    keywords: post.tags,
    image: { url: absoluteUrl(post.image), width: 1200, height: 630, alt: post.title },
  })
}

export default async function GuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)
  const date = new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ])}
      />

      <article>
        <header className="wrap pt-32 md:pt-40">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/insights" }, { name: post.category }]} />
          <h1 className="t-display mt-8 max-w-[22ch]">{post.title}</h1>
          <p className="t-small mt-6 text-muted">
            {post.authorName}, {post.authorRole} · <time dateTime={post.publishedAt}>{date}</time> · {post.category}
          </p>
          <p className="t-lead mt-6 max-w-2xl text-muted">{post.excerpt}</p>
          <div className="relative mt-10 aspect-[1200/630] overflow-hidden bg-paper-2">
            <Image src={post.image} alt={post.title} fill priority sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
          </div>
        </header>

        <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <GuideBody blocks={post.body} />
          </div>
          <aside className="md:col-span-3 md:col-start-10">
            <div className="md:sticky md:top-24">
              <p className="t-small text-muted">Services</p>
              <ul className="mt-3 flex flex-col gap-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="u-link text-lg font-medium tracking-tight">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Pill href="/contact">Get a quote</Pill>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap">
          <p className="t-small mb-6 text-muted">Keep reading</p>
          <div className="grid gap-x-3 gap-y-12 md:grid-cols-3">
            {related.map((item) => (
              <Reveal key={item.slug}>
                <PostCard post={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

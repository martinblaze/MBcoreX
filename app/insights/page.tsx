import type { Metadata } from "next"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { Pill } from "@/components/pill"
import { PostCard } from "@/components/post-card"
import { Headline, Reveal } from "@/components/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { blogPosts } from "@/content/insights"
import { breadcrumbJsonLd, buildMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo"

const title = "Guides: Website, Software, App and SEO Costs in Nigeria"
const description =
  "Practical guides for Nigerian businesses: what websites, mobile apps, custom software and SEO really cost, how to rank on Google, and how to choose a software company."

export const metadata: Metadata = buildMetadata({ title: `${title} | MB CoreX`, description, path: "/insights" })

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: title, description, path: "/insights", type: "CollectionPage" })} />
      <JsonLd data={itemListJsonLd("MB CoreX guides", blogPosts.map((post) => ({ name: post.title, path: `/insights/${post.slug}` })))} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/insights" }])} />

      <section className="wrap pb-16 pt-32 md:pb-24 md:pt-40">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Guides" }]} />
        <Headline as="h1" immediate className="t-mega mt-8 max-w-[14ch]" text="Straight answers for [[Nigerian]] businesses." />
        <Reveal delay={0.4} className="mt-10 max-w-xl">
          <p className="t-lead">
            Honest guides on what websites, apps, software and SEO cost in Nigeria, and how to get the most from them.
          </p>
        </Reveal>
      </section>

      <section className="wrap grid gap-x-3 gap-y-14 pb-24 md:grid-cols-3 md:pb-36">
        {blogPosts.map((post, index) => (
          <Reveal key={post.slug} delay={(index % 3) * 0.06}>
            <PostCard post={post} priority={index < 3} />
          </Reveal>
        ))}
      </section>

      <section className="wrap pb-28 md:pb-44">
        <Headline text="Want it done for you? [[Let's talk]]." className="t-display max-w-[16ch]" />
        <Reveal delay={0.2} className="mt-8">
          <Pill href="/contact">Book a discovery call</Pill>
        </Reveal>
      </section>
    </>
  )
}

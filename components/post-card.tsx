import Image from "next/image"
import Link from "next/link"

import type { BlogPost } from "@/content/insights"

export function PostCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link href={`/insights/${post.slug}`} className="group block">
      <div className="relative aspect-[1200/630] overflow-hidden bg-paper-2">
        <Image
          src={post.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <p className="t-small mt-4 text-muted">
        {post.category} ·{" "}
        <time dateTime={post.publishedAt}>
          {new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}
        </time>
      </p>
      <h3 className="mt-1 text-xl font-medium leading-snug tracking-tight">{post.title}</h3>
      <p className="t-small mt-2 max-w-md text-muted">{post.excerpt}</p>
    </Link>
  )
}

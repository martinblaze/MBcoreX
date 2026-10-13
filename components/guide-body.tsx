import Link from "next/link"

import type { BlogBlock } from "@/content/insights"

/** Renders a guide's content blocks as semantic HTML (h2, p, ul/ol, blockquote). */
export function GuideBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className="t-title mt-8 first:mt-0">
                {block.text}
              </h2>
            )
          case "paragraph":
            return (
              <p key={index} className="t-lead text-ink/85">
                {block.text}
              </p>
            )
          case "list": {
            const List = block.ordered ? "ol" : "ul"
            return (
              <List key={index} className={`t-lead flex flex-col gap-2 pl-5 text-ink/85 ${block.ordered ? "list-decimal" : "list-disc"}`}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </List>
            )
          }
          case "quote":
            return (
              <blockquote key={index} className="border-l-2 border-ink py-1 pl-5 text-[clamp(1.2rem,2vw,1.6rem)] leading-snug tracking-tight">
                {block.text}
                {block.attribution && <footer className="t-small mt-2 text-muted">{block.attribution}</footer>}
              </blockquote>
            )
          case "links":
            return (
              <aside key={index} className="mt-6 border border-line p-5">
                <p className="t-small mb-3 text-muted">{block.heading}</p>
                <ul className="flex flex-col gap-2">
                  {block.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="u-link text-lg font-medium tracking-tight">
                        {item.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )
        }
      })}
    </div>
  )
}

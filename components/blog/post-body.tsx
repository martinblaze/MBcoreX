import type { BlogBlock } from "@/content/insights"
import { Heading, Text, Quote } from "@/components/typography/typography"
import { PostCodeBlock } from "./post-code-block"
import { slugify } from "@/lib/slugify"

/** Renders a post's structured content blocks — the same block model TableOfContents reads headings from. */
export function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <Heading key={index} id={slugify(block.text)} level={2} size="md" className="mt-6 scroll-mt-28">
                {block.text}
              </Heading>
            )
          case "paragraph":
            return (
              <Text key={index} tone="muted" className="leading-relaxed">
                {block.text}
              </Text>
            )
          case "list":
            return block.ordered ? (
              <ol key={index} className="list-decimal space-y-2 pl-5 text-body-md text-muted-foreground marker:text-primary">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="list-disc space-y-2 pl-5 text-body-md text-muted-foreground marker:text-primary">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          case "quote":
            return (
              <Quote key={index} className="my-2">
                {block.text}
                {block.attribution && <footer className="mt-2 text-body-sm not-italic text-muted-foreground">— {block.attribution}</footer>}
              </Quote>
            )
          case "code":
            return <PostCodeBlock key={index} code={block.code} lang={block.lang} filename={block.filename} />
          default:
            return null
        }
      })}
    </div>
  )
}

/** Heading blocks only, with the same slug ids PostBody assigns — feeds TableOfContents. */
export function getHeadings(blocks: BlogBlock[]) {
  return blocks
    .filter((block): block is Extract<BlogBlock, { type: "heading" }> => block.type === "heading")
    .map((block) => ({ text: block.text, id: slugify(block.text) }))
}

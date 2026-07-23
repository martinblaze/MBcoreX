import type { BlogBlock } from "@/content/insights"

const WORDS_PER_MINUTE = 200

function wordCount(block: BlogBlock): number {
  switch (block.type) {
    case "paragraph":
    case "heading":
      return block.text.trim().split(/\s+/).filter(Boolean).length
    case "list":
      return block.items.reduce((sum, item) => sum + item.trim().split(/\s+/).filter(Boolean).length, 0)
    case "quote":
      return block.text.trim().split(/\s+/).filter(Boolean).length
    case "code":
      // Code reads slower than prose but isn't prose word-count — weight it lightly.
      return Math.round(block.code.split(/\s+/).filter(Boolean).length * 0.3)
    default:
      return 0
  }
}

/** Estimated reading time in whole minutes (minimum 1), from a post's content blocks. */
export function getReadingTime(body: BlogBlock[]): number {
  const total = body.reduce((sum, block) => sum + wordCount(block), 0)
  return Math.max(1, Math.round(total / WORDS_PER_MINUTE))
}

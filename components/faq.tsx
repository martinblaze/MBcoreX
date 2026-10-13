import type { Faq } from "@/content/services"

/**
 * Native <details> accordion: no JavaScript, fully crawlable, keyboard
 * accessible. The same questions feed FAQPage structured data on the page.
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-line py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium leading-snug tracking-tight [&::-webkit-details-marker]:hidden">
            {item.question}
            <span aria-hidden="true" className="mt-0.5 text-2xl leading-none transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="t-lead mt-3 max-w-3xl text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

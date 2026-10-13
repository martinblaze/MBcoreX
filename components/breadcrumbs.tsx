import Link from "next/link"

/** Visible breadcrumb trail; pair it with breadcrumbJsonLd() on the same page. */
export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="t-small text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="u-link text-ink">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
            {index < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

import { codeToHtml } from "shiki"

type PostCodeBlockProps = {
  code: string
  lang: string
  filename?: string
}

/** Server-rendered, syntax-highlighted code block for blog post bodies (Shiki — zero client JS). */
export async function PostCodeBlock({ code, lang, filename }: PostCodeBlockProps) {
  const html = await codeToHtml(code, { lang, theme: "github-dark-default" })

  return (
    <div className="my-2 overflow-hidden rounded-xl border border-border bg-surface-elevated">
      {filename && (
        <div className="border-b border-border px-4 py-2 font-mono text-caption text-muted-foreground">
          {filename}
        </div>
      )}
      <div
        className="overflow-x-auto p-4 text-body-sm [&_code]:font-mono [&_pre]:bg-transparent!"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

"use client"

import { useId, useRef, useState } from "react"
import { Paperclip, UploadCloud, X } from "lucide-react"

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { cn } from "@/lib/utils"

type FileUploadFieldProps = {
  label?: string
  description?: string
  error?: string
  name?: string
  accept?: string
  multiple?: boolean
  onFilesChange?: (files: File[]) => void
  required?: boolean
}

/** Drag-and-drop capable file input. No dedicated shadcn primitive — built directly on `<input type="file">`. */
export function FileUploadField({
  label,
  description,
  error,
  name,
  accept,
  multiple = false,
  onFilesChange,
  required,
}: FileUploadFieldProps) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)

  function handleFiles(list: FileList | null) {
    if (!list) return
    const next = multiple ? [...files, ...Array.from(list)] : [list[0]]
    setFiles(next)
    onFilesChange?.(next)
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index)
    setFiles(next)
    onFilesChange?.(next)
  }

  return (
    <Field data-invalid={!!error || undefined}>
      {label && (
        <FieldLabel htmlFor={inputId}>
          {label}
          {required && <span className="text-brand-red-500"> *</span>}
        </FieldLabel>
      )}

      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") inputRef.current?.click()
        }}
        onDragOver={(event) => {
          event.preventDefault()
          setDragActive(true)
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(event) => {
          event.preventDefault()
          setDragActive(false)
          handleFiles(event.dataTransfer.files)
        }}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-input px-6 py-8 text-center transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          dragActive && "border-primary bg-accent",
          error && "border-destructive"
        )}
      >
        <UploadCloud className="size-6 text-muted-foreground" aria-hidden="true" />
        <p className="text-body-sm text-muted-foreground">
          <span className="font-medium text-primary">Click to upload</span> or drag and drop
        </p>
        <input
          ref={inputRef}
          id={inputId}
          name={name}
          type="file"
          accept={accept}
          multiple={multiple}
          required={required}
          className="sr-only"
          onChange={(event) => handleFiles(event.target.files)}
        />
      </div>

      {files.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center justify-between gap-2 rounded-md border border-border bg-surface-elevated px-3 py-2 text-body-sm"
            >
              <span className="flex min-w-0 items-center gap-2 truncate">
                <Paperclip className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="truncate">{file.name}</span>
              </span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                aria-label={`Remove ${file.name}`}
                className="shrink-0 text-muted-foreground transition-colors hover:text-destructive"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {description && !error && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
}

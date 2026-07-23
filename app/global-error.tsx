"use client"

import { useEffect } from "react"

/** Last-resort fallback if the root layout itself throws — replaces the entire document, so it renders its own html/body. */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body style={{ background: "#05070c", color: "#f5f6f8", fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100svh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "1.75rem", fontWeight: 600 }}>Something Went Wrong</h1>
          <p style={{ color: "#b7bdc9", maxWidth: "28rem" }}>
            MB CoreX hit an unexpected error. Please try again — if it persists, reach us at MBCoreX@gmail.com.
          </p>
          <button
            onClick={() => reset()}
            style={{
              background: "#2f6fed",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.625rem 1.25rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}

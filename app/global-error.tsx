"use client"

import { useEffect } from "react"

/** Last-resort fallback if the root layout itself throws; renders its own html/body. */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body style={{ background: "#fbfbf9", color: "#0b0b0b", fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100svh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "1.5rem",
            padding: "2rem",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: 500, letterSpacing: "-0.04em" }}>Something went wrong.</h1>
          <p style={{ color: "#6c6c68", maxWidth: "28rem" }}>
            Please try again. If it persists, reach us at MBCoreX@gmail.com.
          </p>
          <button
            onClick={() => reset()}
            style={{
              background: "#0b0b0b",
              color: "#fbfbf9",
              border: "none",
              borderRadius: "999px",
              padding: "0.75rem 1.5rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}

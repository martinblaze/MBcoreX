import { ImageResponse } from "next/og"

export const alt = "MB CoreX: web, software and mobile app development and Google SEO in Nigeria"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Default social share card, generated at build time so every page has a branded preview. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfbf9",
          padding: 72,
          color: "#0b0b0b",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 48, fontWeight: 800, letterSpacing: -2 }}>
          MBcoreX
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1, fontWeight: 600, letterSpacing: -4 }}>
            We build software and
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            <div
              style={{
                display: "flex",
                background: "#0048f8",
                color: "#fff",
                fontSize: 92,
                lineHeight: 1,
                fontWeight: 600,
                letterSpacing: -4,
                padding: "6px 24px",
              }}
            >
              get you found
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 92,
                lineHeight: 1,
                fontWeight: 600,
                letterSpacing: -4,
                marginLeft: 20,
                paddingTop: 6,
              }}
            >
              on Google.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#555" }}>
          <span>Websites · Web apps · Custom software · Mobile apps · Google SEO</span>
          <span>All 36 states + FCT</span>
        </div>
      </div>
    ),
    size
  )
}

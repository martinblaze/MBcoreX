import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MB CoreX",
    short_name: "MB CoreX",
    description: "Online software company in Nigeria: websites, web apps, custom software, mobile apps and Google SEO.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfbf9",
    theme_color: "#fbfbf9",
    lang: "en-NG",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  }
}

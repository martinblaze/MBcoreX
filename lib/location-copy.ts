import { getLocation, locations, sectors, type Location } from "@/content/locations"
import type { Faq } from "@/content/services"

/** "Lagos State", but "the Federal Capital Territory" for Abuja. */
export function placeLabel(location: Location) {
  return location.kind === "fct" ? "the Federal Capital Territory (Abuja)" : `${location.name} State`
}

/** Short form for titles: "Lagos", "Abuja". */
export function placeShort(location: Location) {
  return location.kind === "fct" ? "Abuja" : location.name
}

export function listJoin(items: string[]) {
  if (items.length <= 1) return items.join("")
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`
}

export function locationIntro(location: Location): string[] {
  const place = placeLabel(location)
  const cities = listJoin(location.cities.slice(0, 4))
  const sectorPhrases = location.sectors.map((key) => sectors[key].phrase)
  return [
    `${location.context} MB CoreX is an online software company, so we do not run a walk-in office in ${placeShort(location)}. We work with businesses across ${place}, including in ${cities}, entirely by video call, WhatsApp and shared design previews, and the quality of the work does not depend on where you are.`,
    `Businesses here lean heavily on ${listJoin(sectorPhrases)}. That shapes what they need from software: ${sectors[location.sectors[0]].ideas[0].title.toLowerCase()}, ${sectors[location.sectors[1]].ideas[0].title.toLowerCase()} and ${sectors[location.sectors[2]].ideas[0].title.toLowerCase()} are typical starting points. Below are practical examples of what we could build for a business in ${placeShort(location)}.`,
  ]
}

export function locationFaqs(location: Location): Faq[] {
  const place = placeLabel(location)
  const short = placeShort(location)
  const cities = listJoin(location.cities.slice(0, 3))
  const sectorLabels = listJoin(location.sectors.map((key) => sectors[key].label.toLowerCase()))
  return [
    {
      question: `Do you have an office in ${short}?`,
      answer: `No. MB CoreX is an online software company with no walk-in office, and we say so plainly. We serve clients in ${cities} and the rest of ${place} through video calls, WhatsApp and shared previews, and many of our projects are delivered to clients we never meet in person.`,
    },
    {
      question: `What kinds of businesses in ${short} do you work with?`,
      answer: `We work with any business that needs reliable software or a strong online presence. In ${place}, that often means companies in ${sectorLabels}, but we have also built for healthcare and e-commerce. What matters is the problem, not the industry.`,
    },
    {
      question: `How much does a website or app cost for a business in ${short}?`,
      answer: `Pricing does not change with location. A focused website typically starts from about ₦150,000, web applications from about ₦800,000, and custom software or mobile apps from about ₦1.5 million, with the final figure set by scope after a short discovery call.`,
    },
    {
      question: `Can you help my ${short} business rank on Google?`,
      answer: `Yes. Our Google SEO service covers keyword research, technical fixes, content and authority building. For a ${short} business we write pages that reflect how customers in ${cities} actually search, and we report progress every month. We cannot promise a specific position, but we can show exactly what is being done and what is changing.`,
    },
    {
      question: `Can we meet in person in ${short}?`,
      answer: `We work online by default. For larger projects we can discuss an in-person kick-off when it makes sense for both sides, but nothing about our process requires it.`,
    },
  ]
}

/** A one-line, place-specific description of what a service means for a business in this location. */
export function serviceLine(location: Location, serviceSlug: string) {
  const short = placeShort(location)
  const [s0, s1, s2] = location.sectors.map((key) => sectors[key].phrase)
  const [c0, c1, c2] = location.cities
  switch (serviceSlug) {
    case "web-development":
      return `Fast, search-ready websites for ${s0} businesses in ${c0}, ${c1} and across ${short}.`
    case "web-applications":
      return `Customer portals and dashboards that replace spreadsheets for ${s1} teams in ${c2 ?? c0}.`
    case "custom-software":
      return `Systems built around how ${s2} work really happens in ${short}, not a generic template.`
    case "mobile-app-development":
      return `Android and iOS apps designed for ${short} customers on mid-range phones and mobile data.`
    case "google-seo":
      return `SEO that helps ${s0} firms appear when buyers in ${c0}, ${c1} and the rest of ${short} search.`
    default:
      return ""
  }
}

export function nearbyLocations(location: Location, count = 5) {
  return locations.filter((other) => other.zone === location.zone && other.slug !== location.slug).slice(0, count)
}

export { getLocation }

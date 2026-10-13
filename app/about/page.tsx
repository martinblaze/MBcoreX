import type { Metadata } from "next"

import { JsonLd } from "@/components/seo/json-ld"
import { Marquee } from "@/components/marquee"
import { Pill } from "@/components/pill"
import { Headline, Reveal } from "@/components/reveal"
import { buildMetadata, personJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "About MB CoreX: Online Software Company in Nigeria",
  description:
    "A small, senior, online team in Nigeria led by founder Martin Blaze. We build websites, web apps, custom software and mobile apps, and get you found on Google.",
  path: "/about",
})

const founder = {
  name: "Martin Blaze",
  role: "Founder, MB CoreX",
  bio: "Martin Blaze is a full-stack software engineer who founded MB CoreX to give businesses one accountable partner for building software and getting it found on Google. He works across web, mobile and cloud systems, and pairs engineering with practical search work: technical SEO, content and local visibility.",
  knowsAbout: [
    "Web development",
    "Web applications",
    "Custom software",
    "Mobile app development",
    "Google SEO",
    "Technical SEO",
    "Next.js",
    "TypeScript",
  ],
}

const principles = [
  {
    title: "Senior people, direct access",
    text: "You talk to the person doing the work. No account managers, no hand-offs, no telephone game.",
  },
  {
    title: "Built to be found",
    text: "Every site and product ships with SEO structure and performance built in, not bolted on afterwards.",
  },
  {
    title: "Fast without cutting corners",
    text: "AI-assisted workflows speed up delivery. Architecture, quality and every release stay under human review.",
  },
]

const stack = ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe", "Vercel", "AWS"]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={personJsonLd({
          name: founder.name,
          role: founder.role,
          bio: founder.bio,
          knowledgeAreas: founder.knowsAbout,
        })}
      />

      <section className="wrap pb-20 pt-32 md:pb-32 md:pt-40">
        <Headline
          as="h1"
          immediate
          className="t-mega max-w-[18ch]"
          text="A small team that builds it, launches it and [[gets it found]]."
        />
      </section>

      <section className="wrap grid gap-10 border-t border-line py-20 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-4">
          <p className="t-small text-muted">Founder</p>
          <p className="t-title mt-2">{founder.name}</p>
          <p className="t-small text-muted">{founder.role}</p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
          <p className="t-lead">{founder.bio}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {founder.knowsAbout.map((item) => (
              <li key={item} className="border border-line px-3 py-1 text-[0.8rem]">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-ink py-20 text-paper md:py-32">
        <div className="wrap">
          <Headline text="How we [[work]]" className="t-display mb-12 md:mb-20" />
          <ul className="grid gap-px bg-line-dark md:grid-cols-3">
            {principles.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.08} className="bg-ink p-6 md:p-8">
                <p className="t-small text-paper/50">0{i + 1}</p>
                <p className="t-title mt-12 md:mt-24">{item.title}</p>
                <p className="t-small mt-4 max-w-xs text-paper/70">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line py-8 md:py-12">
        <Marquee className="text-[clamp(2rem,5vw,5rem)] font-medium leading-none tracking-[-0.04em]" items={stack} />
      </section>

      <section className="wrap py-28 md:py-44">
        <Headline text="Like what you see? Let's [[talk]]." className="t-mega max-w-[14ch]" />
        <Reveal delay={0.2} className="mt-10">
          <Pill href="/contact">Book a discovery call</Pill>
        </Reveal>
      </section>
    </>
  )
}

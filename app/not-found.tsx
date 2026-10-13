import { Pill } from "@/components/pill"

export default function NotFound() {
  return (
    <section className="wrap pb-28 pt-40 md:pb-40 md:pt-52">
      <p className="t-small text-muted">404</p>
      <h1 className="t-mega mt-2 max-w-[12ch]">This page doesn&apos;t exist.</h1>
      <div className="mt-10 flex gap-4">
        <Pill href="/">Back home</Pill>
        <Pill href="/contact" variant="outline">
          Contact us
        </Pill>
      </div>
    </section>
  )
}

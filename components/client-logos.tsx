import Image from "next/image"

import { clients } from "@/content/work"

function Logo({ client }: { client: (typeof clients)[number] }) {
  return (
    <li className="flex shrink-0 items-center gap-3">
      <Image src={client.logo} alt="" width={36} height={36} className="size-9 object-contain grayscale" />
      <span className="whitespace-nowrap text-lg font-medium tracking-tight">{client.title}</span>
    </li>
  )
}

/** Static row on desktop, endless carousel on mobile (as on Riotters). */
export function ClientLogos() {
  return (
    <>
      <ul className="mt-6 hidden flex-wrap items-center gap-x-14 gap-y-6 md:flex">
        {clients.map((client) => (
          <Logo key={client.title} client={client} />
        ))}
      </ul>
      <div className="mt-6 overflow-hidden md:hidden" aria-hidden="true">
        <div className="logo-track flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center gap-10 pr-10">
              {clients.map((client) => (
                <Logo key={client.title} client={client} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

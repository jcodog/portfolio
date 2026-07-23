import { IconArrowUpRight } from "@tabler/icons-react"

import { homeContent } from "@/features/home/config/content"

export const ContactCta = () => {
  const { contact } = homeContent

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-border bg-foreground text-background"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <p className="text-sm font-medium tracking-wide text-background/65">
          {contact.eyebrow}
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.5fr)] lg:items-end">
          <div>
            <h2
              id="contact-title"
              className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
            >
              {contact.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-background/70">
              {contact.description}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            {contact.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2 border-b border-background/35 pb-1 text-lg font-medium transition-colors hover:border-background"
              >
                {link.label}
                <IconArrowUpRight
                  aria-hidden="true"
                  className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-background/20 pt-6 text-sm text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Jason · JCoNet LTD</p>
          <p>Software, infrastructure and product engineering</p>
        </div>
      </div>
    </section>
  )
}

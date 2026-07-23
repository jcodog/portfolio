import { IconArrowUpRight } from "@tabler/icons-react"

import { homeContent } from "@/features/home/config/content"

export const ContactCta = () => {
  const { contact } = homeContent

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-y border-border bg-muted/30"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-sm font-medium tracking-wide text-primary">
              {contact.eyebrow}
            </p>

            <h2
              id="contact-title"
              className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              {contact.title}
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              {contact.description}
            </p>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <div className="w-full min-w-0 border-l border-border pl-6 lg:min-w-80">
              {contact.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-6 border-b border-border py-4 text-base font-medium transition-colors first:border-t hover:text-primary"
                >
                  {link.label}
                  <IconArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Jason · JCoNet LTD</p>
          <p>Software, infrastructure and product engineering</p>
        </footer>
      </div>
    </section>
  )
}

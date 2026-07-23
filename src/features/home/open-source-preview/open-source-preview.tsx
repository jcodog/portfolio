import {
  IconArrowUpRight,
  IconBrandGithub,
  IconPackage,
} from "@tabler/icons-react"

import { openSourceProjects } from "@/features/open-source/data/projects"

export const OpenSourcePreview = () => {
  const project = openSourceProjects.find((item) => item.featured)

  if (!project) {
    return null
  }

  return (
    <section
      id="open-source"
      aria-labelledby="open-source-title"
      className="border-y border-primary-foreground/15 bg-primary text-primary-foreground"
    >
      <div className="mx-auto grid w-full max-w-[90rem] gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium tracking-wide text-primary-foreground/70">
            Open source
          </p>

          <h2
            id="open-source-title"
            className="mt-6 max-w-xl text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl"
          >
            Open source, built for real production work.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-primary-foreground/75">
            Packages and utilities shaped by problems I have needed to solve in
            real products.
          </p>
        </div>

        <article className="lg:col-span-8 lg:border-l lg:border-primary-foreground/20 lg:pl-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono text-sm text-primary-foreground/70">
                {project.packageName}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {project.name}
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/75">
                {project.summary}
              </p>
            </div>

            <p className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
              {project.language}
            </p>
          </div>

          <div className="mt-8 border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <p className="text-sm text-primary-foreground/65">Install with Bun</p>
            <code className="mt-2 block break-all font-mono text-sm sm:mt-0">
              bun add {project.packageName}
            </code>
          </div>

          <ul className="mt-8 grid border-t border-primary-foreground/20 sm:grid-cols-2">
            {project.highlights.map((highlight, index) => (
              <li
                key={highlight}
                className="flex items-center gap-4 border-b border-primary-foreground/20 py-4 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
              >
                <span className="font-mono text-xs text-primary-foreground/55">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium">{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-7 text-sm font-medium">
            <a
              href={project.repositoryHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border-b border-primary-foreground/40 pb-1 transition-opacity hover:opacity-70"
            >
              <IconBrandGithub aria-hidden="true" className="size-4" />
              Repository
              <IconArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={project.packageHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border-b border-primary-foreground/40 pb-1 transition-opacity hover:opacity-70"
            >
              <IconPackage aria-hidden="true" className="size-4" />
              Package
              <IconArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

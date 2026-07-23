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
      className="border-t border-border"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary">
            Open source
          </p>

          <h2
            id="open-source-title"
            className="mt-5 max-w-md text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            Developer tools built around real problems.
          </h2>
        </div>

        <article className="border-y border-border py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono text-sm text-primary">
                {project.packageName}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {project.name}
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                {project.summary}
              </p>
            </div>

            <p className="shrink-0 font-mono text-xs text-muted-foreground">
              {project.language}
            </p>
          </div>

          <ul className="mt-8 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="border-l border-primary pl-3 text-muted-foreground"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
            <a
              href={project.repositoryHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 hover:text-primary"
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
              className="group inline-flex items-center gap-2 hover:text-primary"
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

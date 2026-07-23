import { FeaturedProject } from "@/features/home/featured-work/featured-project"
import { workProjects } from "@/features/work/data/projects"

export const FeaturedWork = () => {
  const projects = workProjects.filter((project) => project.featured)

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-title"
      className="border-y border-border bg-muted/20"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 py-24 lg:px-10 lg:py-28">
        <header className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-3">
            <p className="text-sm font-medium tracking-wide text-primary">
              Selected work
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {String(projects.length).padStart(2, "0")} featured projects
            </p>
          </div>

          <div className="lg:col-span-9">
            <h2
              id="featured-work-title"
              className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl"
            >
              Products, platforms and production systems.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              A selection of work spanning product engineering, automation,
              infrastructure and operations.
            </p>
          </div>
        </header>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {projects.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

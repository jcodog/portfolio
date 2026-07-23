import { FeaturedProject } from "@/features/home/featured-work/featured-project"
import { workProjects } from "@/features/work/data/projects"

export const FeaturedWork = () => {
  const projects = workProjects.filter((p) => p.featured)

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-title"
      className="border-t border-border"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <header className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <p className="text-sm font-medium tracking-wide text-primary">
            Selected work
          </p>

          <div>
            <h2
              id="featured-work-title"
              className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Products, platforms and production systems
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              A selection of work spanning product engineering, automation,
              infrastructure and operations.
            </p>
          </div>
        </header>

        <div className="mt-16">
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

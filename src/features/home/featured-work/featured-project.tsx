import type { WorkProject } from "@/features/work/types"

type FeaturedProjectProps = Readonly<{
  project: WorkProject
  index: number
}>

export const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
  return (
    <article className="grid gap-7 py-11 lg:grid-cols-12 lg:gap-8 lg:py-14">
      <div className="flex items-baseline gap-3 lg:col-span-2 lg:block">
        <p className="font-mono text-sm text-primary">
          {String(index + 1).padStart(2, "0")}
        </p>
        <p className="font-mono text-xs text-muted-foreground lg:mt-2">
          {project.year}
        </p>
      </div>

      <div className="lg:col-span-5">
        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          {project.summary}
        </p>
      </div>

      <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8">
        <p className="text-lg leading-8">{project.contribution}</p>

        <p className="mt-6 text-sm leading-6 text-muted-foreground">
          {project.technologies.join(" · ")}
        </p>
      </div>
    </article>
  )
}

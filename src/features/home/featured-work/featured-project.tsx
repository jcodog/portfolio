import type { WorkProject } from "@/features/work/types"

type FeaturedProjectProps = Readonly<{
  project: WorkProject
  index: number
}>

export const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
  return (
    <article className="grid gap-5 py-8 md:grid-cols-[5rem_minmax(0,1fr)] lg:grid-cols-[7rem_minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-8 lg:py-10">
      <p className="font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, "0")} / {project.year}
      </p>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
          {project.summary}
        </p>
      </div>

      <div className="md:col-start-2 lg:col-start-auto">
        <p className="leading-7">{project.contribution}</p>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {project.technologies.join(" · ")}
        </p>
      </div>
    </article>
  )
}

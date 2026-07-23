import type { WorkProject } from "@/features/work/types"

type FeaturedProjectProps = Readonly<{
  project: WorkProject
  index: number
}>

export const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
  return (
    <article className="grid gap-6 border-t border-border py-10 md:grid-cols-[6rem_minmax(0,1fr)] lg:grid-cols-[8rem_minmax(0,1fr)_minmax(18rem,0.8fr)] lg:py-14">
      <p className="font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, "0")} / {project.year}
      </p>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          {project.summary}
        </p>
      </div>

      <div className="md:col-start-2 lg:col-start-auto">
        <p className="leading-7">{project.contribution}</p>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {project.technologies.join(" · ")}
        </p>
      </div>
    </article>
  )
}

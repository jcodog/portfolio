export type WorkProject = Readonly<{
  slug: string
  title: string
  year: string
  summary: string
  contribution: string
  technologies: readonly string[]
  featured: boolean
}>

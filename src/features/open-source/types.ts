export type OpenSourceProject = Readonly<{
  slug: string
  name: string
  packageName: string
  summary: string
  language: string
  repositoryHref: string
  packageHref: string
  highlights: readonly string[]
  featured: boolean
}>

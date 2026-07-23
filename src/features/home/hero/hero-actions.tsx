import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react"

import { homeContent } from "@/features/home/config/content"

export const HeroActions = () => {
  const { actions } = homeContent.hero

  return (
    <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium">
      <a
        href={actions.primary.href}
        className="group inline-flex items-center gap-2 border-b border-foreground/40 pb-1 transition-colors hover:border-primary hover:text-primary"
      >
        {actions.primary.label}
        <IconArrowDown
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-y-1"
        />
      </a>

      <a
        href={actions.github.href}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 border-b border-transparent pb-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        {actions.github.label}
        <IconArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </div>
  )
}

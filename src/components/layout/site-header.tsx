import type { ReactNode } from "react"
import Link from "next/link"

type SiteHeaderLink = Readonly<{
  label: string
  href: string
  external?: boolean
}>

type SiteHeaderAction = SiteHeaderLink &
  Readonly<{
    icon: ReactNode
  }>

type SiteHeaderProps = Readonly<{
  brand: SiteHeaderLink
  navigation?: readonly SiteHeaderLink[]
  actions?: readonly SiteHeaderAction[]
}>

type HeaderLinkProps = Readonly<{
  item: SiteHeaderLink
  className: string
  children: ReactNode
  ariaLabel?: string
}>

const HeaderLink = ({
  item,
  className,
  children,
  ariaLabel,
}: HeaderLinkProps) => {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={item.href} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  )
}

export const SiteHeader = ({
  brand,
  navigation = [],
  actions = [],
}: SiteHeaderProps) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-10">
        <HeaderLink
          item={brand}
          className="text-base font-semibold tracking-tight transition-colors hover:text-primary"
        >
          {brand.label}
        </HeaderLink>

        <nav
          aria-label="Primary navigation"
          className="flex min-w-0 items-center gap-0.5"
        >
          <div className="flex min-w-0 items-center overflow-x-auto">
            {navigation.map((item) => (
              <HeaderLink
                key={item.href}
                item={item}
                className="shrink-0 px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-3 sm:text-sm"
              >
                {item.label}
              </HeaderLink>
            ))}
          </div>

          {actions.map((item) => (
            <HeaderLink
              key={item.href}
              item={item}
              ariaLabel={item.label}
              className="ml-1 inline-flex size-9 shrink-0 items-center justify-center border-l border-border pl-1 text-muted-foreground transition-colors hover:text-foreground [&_svg]:size-4"
            >
              {item.icon}
            </HeaderLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

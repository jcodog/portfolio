import type { ReactNode } from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <HeaderLink
          item={brand}
          className="font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          {brand.label}
        </HeaderLink>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-1"
        >
          <div className="flex items-center">
            {navigation.map((item) => (
              <HeaderLink
                key={item.href}
                item={item}
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
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
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
            >
              {item.icon}
            </HeaderLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

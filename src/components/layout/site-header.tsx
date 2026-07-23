import Link from "next/link"
import { IconBrandGithub } from "@tabler/icons-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const

export const SiteHeader = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          Jason
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-1"
        >
          <div className="hidden items-center sm:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="https://github.com/jcodog"
            target="_blank"
            rel="noreferrer"
            aria-label="View Jason on GitHub"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "icon",
              })
            )}
          >
            <IconBrandGithub aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}

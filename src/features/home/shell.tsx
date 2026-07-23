import { SiteHeader } from "@/components/layout/site-header"

import { Hero } from "@/features/home/hero/hero"

export const HomeShell = () => {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
      </main>
    </>
  )
}

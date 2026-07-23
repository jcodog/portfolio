import { IconBrandGithub } from "@tabler/icons-react"

import { SiteHeader } from "@/components/layout/site-header"
import { homeContent } from "@/features/home/config/content"
import { Hero } from "@/features/home/hero/hero"

export const HomeShell = () => {
  const { header } = homeContent

  return (
    <>
      <SiteHeader
        brand={header.brand}
        navigation={header.navigation}
        actions={[
          {
            ...header.github,
            icon: <IconBrandGithub aria-hidden="true" />,
          },
        ]}
      />

      <main>
        <Hero />
      </main>
    </>
  )
}

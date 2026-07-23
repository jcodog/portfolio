import { IconBrandGithub } from "@tabler/icons-react"

import { SiteHeader } from "@/components/layout/site-header"
import { AboutPreview } from "@/features/home/about-preview/about-preview"
import { ContactCta } from "@/features/home/contact-cta/contact-cta"
import { homeContent } from "@/features/home/config/content"
import { FeaturedWork } from "@/features/home/featured-work/featured-work"
import { Hero } from "@/features/home/hero/hero"
import { OpenSourcePreview } from "@/features/home/open-source-preview/open-source-preview"

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
        <FeaturedWork />
        <OpenSourcePreview />
        <AboutPreview />
        <ContactCta />
      </main>
    </>
  )
}

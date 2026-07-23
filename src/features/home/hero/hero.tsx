import { homeContent } from "@/features/home/config/content"

import { HeroActions } from "@/features/home/hero/hero-actions"

export const Hero = () => {
  const { hero } = homeContent

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="flex min-h-svh items-center"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-sm font-medium tracking-wide text-primary">
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl"
          >
            {hero.title}
          </h1>

          <div className="mt-8 flex max-w-3xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              {hero.description}
            </p>

            <HeroActions />
          </div>
        </div>
      </div>
    </section>
  )
}

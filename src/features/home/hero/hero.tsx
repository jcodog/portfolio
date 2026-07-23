import { homeContent } from "@/features/home/config/content"
import { HeroActions } from "@/features/home/hero/hero-actions"

export const Hero = () => {
  const { hero } = homeContent

  return (
    <section id="home" aria-labelledby="hero-title">
      <div className="mx-auto flex min-h-[76svh] w-full max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8 lg:pb-24">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.5fr)] lg:items-end">
          <div className="max-w-5xl">
            <p className="text-sm font-medium tracking-wide text-primary">
              {hero.eyebrow}
            </p>

            <h1
              id="hero-title"
              className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              {hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              {hero.description}
            </p>

            <div className="mt-8">
              <HeroActions />
            </div>
          </div>

          <aside className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Focus
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              {hero.focus.map((item, index) => (
                <li key={item} className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

import { homeContent } from "@/features/home/config/content"
import { HeroActions } from "@/features/home/hero/hero-actions"

export const Hero = () => {
  const { hero } = homeContent

  return (
    <section id="home" aria-labelledby="hero-title" className="overflow-hidden">
      <div className="mx-auto flex min-h-[82svh] w-full max-w-[90rem] items-center px-6 pb-24 pt-36 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="w-full">
          <p className="text-sm font-medium tracking-wide text-primary">
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-6 max-w-[15ch] text-6xl font-semibold leading-[0.93] tracking-[-0.045em] text-balance sm:text-7xl lg:text-8xl xl:text-[6.75rem]"
          >
            {hero.title}
          </h1>

          <div className="mt-14 grid gap-10 border-t border-border pt-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <p className="max-w-2xl text-xl leading-9 text-muted-foreground">
                {hero.description}
              </p>

              <div className="mt-8">
                <HeroActions />
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Focus
              </p>

              <ol className="mt-4 border-t border-border">
                {hero.focus.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-border py-3"
                  >
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

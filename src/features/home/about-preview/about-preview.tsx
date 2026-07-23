import { homeContent } from "@/features/home/config/content"

export const AboutPreview = () => {
  const { about } = homeContent

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-border"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] lg:px-8 lg:py-28">
        <p className="text-sm font-medium tracking-wide text-primary">
          {about.eyebrow}
        </p>

        <div>
          <h2
            id="about-title"
            className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            {about.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {about.description}
          </p>

          <dl className="mt-10 divide-y divide-border border-y border-border">
            {about.experience.map((item) => (
              <div
                key={`${item.period}-${item.organisation}`}
                className="grid gap-2 py-5 sm:grid-cols-[8rem_minmax(0,1fr)_minmax(0,1.3fr)] sm:gap-6"
              >
                <dt className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </dt>
                <dd className="font-medium">{item.organisation}</dd>
                <dd className="text-muted-foreground">{item.role}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

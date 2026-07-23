import { homeContent } from "@/features/home/config/content"

export const AboutPreview = () => {
  const { about } = homeContent

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-border"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_2fr] lg:px-8 lg:py-32">
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

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            {about.description}
          </p>
        </div>
      </div>
    </section>
  )
}

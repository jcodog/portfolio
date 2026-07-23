import { homeContent } from "@/features/home/config/content"

export const AboutPreview = () => {
  const { about } = homeContent

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-border"
    >
      <div className="mx-auto grid w-full max-w-[90rem] gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium tracking-wide text-primary">
            {about.eyebrow}
          </p>

          <h2
            id="about-title"
            className="mt-6 max-w-xl text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl"
          >
            {about.title}
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="max-w-3xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
            {about.description}
          </p>

          <dl className="mt-12 border-t border-border">
            {about.experience.map((item) => (
              <div
                key={`${item.period}-${item.organisation}`}
                className="grid gap-2 border-b border-border py-6 sm:grid-cols-12 sm:gap-6"
              >
                <dt className="font-mono text-xs text-muted-foreground sm:col-span-3">
                  {item.period}
                </dt>
                <dd className="font-medium sm:col-span-4">
                  {item.organisation}
                </dd>
                <dd className="text-muted-foreground sm:col-span-5">
                  {item.role}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export type HomeProject = Readonly<{
  title: string
  summary: string
  contribution: string
  technologies: readonly string[]
  href: string
  year: string
}>

export const homeContent = {
  header: {
    brand: {
      label: "JCo",
      href: "/",
    },
    navigation: [
      {
        label: "Work",
        href: "/#featured-work",
      },
      {
        label: "Open source",
        href: "/#open-source",
      },
      {
        label: "About",
        href: "/#about",
      },
      {
        label: "Contact",
        href: "/#contact",
      },
    ],
    github: {
      label: "View Jason on GitHub",
      href: "https://github.com/jcodog",
      external: true,
    },
  },
  hero: {
    eyebrow: "DevOps Engineer · Software Developer · Product Builder",
    title: "I build software products and the systems that keep them running.",
    description:
      "I'm Jason, the developer behind JCoNet LTD. I work across product engineering, automation, infrastructure and production operations.",
    actions: {
      primary: {
        label: "View selected work",
        href: "#featured-work",
      },
      github: {
        label: "View GitHub",
        href: "https://github.com/jcodog",
      },
    },
  },
  about: {
    eyebrow: "About",
    title: "Engineering across product and production.",
    description:
      "I’m a DevOps engineer and software developer behind JCoNet LTD. My work spans user-facing products, backend systems, automation, infrastructure and the operational work required to keep software reliable.",
  },
  work: {
    eyebrow: "Selected work",
    title: "Products, systems and infrastructure.",
    projects: [
      {
        title: "Cleo v3",
        summary:
          "A ground-up rewrite of a multi-platform assistant and community management product.",
        contribution:
          "Product architecture, full-stack development, infrastructure and operations.",
        technologies: [
          "Next.js",
          "TypeScript",
          "Convex",
          "Discord.js",
          "GitHub Actions",
        ],
        href: "/work/cleo-v3",
        year: "2026",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a product, platform or infrastructure problem?",
    description:
      "I’m open to conversations about software development, DevOps, automation and technical product work.",
  },
} as const

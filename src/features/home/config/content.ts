export const homeContent = {
  header: {
    brand: {
      label: "Jason",
      href: "/",
    },
    navigation: [
      {
        label: "Work",
        href: "#work",
      },
      {
        label: "About",
        href: "#about",
      },
      {
        label: "Contact",
        href: "#contact",
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
    title: "I build software from interface to infrastructure.",
    description:
      "I design, develop and operate reliable software products, developer platforms and community systems.",
    actions: {
      primary: {
        label: "Explore my work",
        href: "#work",
      },
      github: {
        label: "View GitHub",
        href: "https://github.com/jcodog",
      },
    },
  },
} as const

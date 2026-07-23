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
    experience: [
      {
        period: "2021–2023",
        organisation: "Siemens",
        role: "Junior Software Developer and DevOps Engineer",
      },
      {
        period: "2019–2021",
        organisation: "North Kesteven District Council",
        role: "IT Support",
      },
      {
        period: "2018–present",
        organisation: "JCoNet LTD",
        role: "Founder and product engineer",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a product, platform or infrastructure problem?",
    description:
      "I’m open to conversations about software development, DevOps, automation and technical product work.",
    links: [
      {
        label: "Discuss a project on Upwork",
        href: "https://www.upwork.com/freelancers/~0116d70440185dfa1d",
        external: true,
      },
      {
        label: "View GitHub",
        href: "https://github.com/jcodog",
        external: true,
      },
    ],
  },
} as const

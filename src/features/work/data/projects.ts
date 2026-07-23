import type { WorkProject } from "@/features/work/types"

export const workProjects = [
  {
    slug: "cleo-v3",
    title: "Cleo v3",
    year: "2026",
    summary:
      "A ground-up rewrite of a community assistant spanning Discord automation, moderation, support tooling and a web dashboard.",
    contribution:
      "Product architecture, full-stack engineering, deployment infrastructure and production operations.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Convex",
      "Discord.js",
      "GitHub Actions",
      "Linux",
    ],
    featured: true,
  },
  {
    slug: "production-delivery",
    title: "Production delivery architecture",
    year: "2026",
    summary:
      "A reproducible release and deployment system for shipping compiled services safely to production.",
    contribution:
      "CI/CD design, release packaging, runtime validation, systemd integration and VPS operations.",
    technologies: ["GitHub Actions", "Bash", "systemd", "Node.js", "Linux"],
    featured: true,
  },
  {
    slug: "cod-stats-tracker",
    title: "COD Stats Tracker",
    year: "2026",
    summary:
      "A dedicated product for turning Call of Duty player and match data into useful performance insights.",
    contribution:
      "Product design, application architecture, data modelling and development.",
    technologies: ["TypeScript", "React", "Next.js"],
    featured: true,
  },
  {
    slug: "cleo-stream-package",
    title: "Cleo Stream Package",
    year: "2026",
    summary:
      "A reusable broadcast package for producing branded animated stream assets.",
    contribution:
      "Visual direction, Blender automation, rendering and media delivery.",
    technologies: ["Blender", "Python", "FFmpeg"],
    featured: false,
  },
] satisfies readonly WorkProject[]

import type { OpenSourceProject } from "@/features/open-source/types"

export const openSourceProjects = [
  {
    slug: "mailchannels-client",
    name: "MailChannels Client",
    packageName: "@jconet-ltd/mailchannels-client",
    summary:
      "A lightweight TypeScript client for sending transactional email through the MailChannels Email API.",
    language: "TypeScript",
    repositoryHref: "https://github.com/jcodog/mailchannels",
    packageHref:
      "https://www.npmjs.com/package/@jconet-ltd/mailchannels-client",
    highlights: [
      "Runtime request validation",
      "Required DKIM defaults",
      "Dry-run support",
      "No production dependencies",
    ],
    featured: true,
  },
] satisfies readonly OpenSourceProject[]

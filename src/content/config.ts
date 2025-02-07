import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const project = defineCollection({
  loader: glob({ pattern: "**/*.{mdx,md}", base: "./src/content/project" }),
  schema: () =>
    z.object({
      title: z.string(),
      repository_link: z.string().url(),
      project_link: z.string().url(),
    }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{mdx,md}", base: "./src/content/work" }),
  schema: z.object({
    jobTitle: z.string(),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().or(z.string()),
  }),
});

export const collections = { project, work };

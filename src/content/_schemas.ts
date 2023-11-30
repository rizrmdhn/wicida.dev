import { z } from "astro:content"

export const coreTeamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  image: z.string(),
  social: z
    .object({
      github: z.string(),
      linkedin: z.string(),
      facebook: z.string(),
      instagram: z.string(),
      twitter: z.string(),
    })
    .optional(),
})

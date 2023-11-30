import { defineCollection } from "astro:content"
import { coreTeamMemberSchema } from "./_schemas"

const coreTeamMemberCollection = defineCollection({
  type: "data",
  schema: coreTeamMemberSchema,
})

export const collections = { coreTeamMembers: coreTeamMemberCollection }

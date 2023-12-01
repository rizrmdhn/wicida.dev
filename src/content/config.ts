import { defineCollection } from 'astro:content'
import { coreTeamMemberSchema, projectListSchema } from './_schemas'

const coreTeamMemberCollection = defineCollection({
    type: 'data',
    schema: coreTeamMemberSchema,
})

const projectListCollection = defineCollection({
    type: 'data',
    schema: projectListSchema,
})

export const collections = {
    coreTeamMembers: coreTeamMemberCollection,
    projectList: projectListCollection,
}

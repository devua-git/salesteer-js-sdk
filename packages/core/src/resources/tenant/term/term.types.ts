import { z } from 'zod'
import { objectWithTimestamps } from '../../../utils/validation'

export const termSchema = z
  .object({
    id: z.coerce.number(),

    title: z.string(),
    content: z.string(),

    version: z.coerce.number(),
    slug: z.string(),

    has_updated_version: z.boolean().optional(),
    accepted_by_user: z.boolean().optional(),
  })
  .and(objectWithTimestamps)
export type Term = z.infer<typeof termSchema>

export const termAcceptanceSchema = z
  .object({
    id: z.coerce.number(),
    ip_address: z.string(),
    user_agent: z.string(),

    term: termSchema.optional(),
  })
  .and(objectWithTimestamps)
export type TermAcceptance = z.infer<typeof termAcceptanceSchema>

export const termWithAcceptancesSchema = termSchema.and(
  z.object({
    acceptances: z.array(termAcceptanceSchema),
  })
)
export type TermWithAcceptances = z.infer<typeof termWithAcceptancesSchema>

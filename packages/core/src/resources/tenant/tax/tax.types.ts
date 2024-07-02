import { z } from 'zod'
import { makePaginateSchema } from '../../../utils/validation'

export const taxSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  default: z.coerce.boolean(),
  value: z.coerce.number(),
})
export type Tax = z.infer<typeof taxSchema>

export const taxListSchema = makePaginateSchema(taxSchema)

export const taxableEntity = z.object({
  taxes: z.array(taxSchema).optional(),
})

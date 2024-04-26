import { z } from 'zod'
import { makePaginateSchema } from '../../../utils/validation'

export const countrySchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  code: z.string(),
})
export type Country = z.infer<typeof countrySchema>

export const countryPaginateSchema = makePaginateSchema(countrySchema)

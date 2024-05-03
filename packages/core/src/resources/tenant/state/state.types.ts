import { z } from 'zod'
import { countrySchema } from '../country/country.types'
import { makePaginateSchema } from '../../../utils/validation'

export const stateSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  country_id: z.coerce.number(),

  country: countrySchema.optional(),
})
export type State = z.infer<typeof stateSchema>

export const statePaginateSchema = makePaginateSchema(stateSchema)
export type PaginatedState = z.infer<typeof statePaginateSchema>

import { z } from 'zod'
import { makePaginateSchema } from '../../../utils/validation'
import { stateSchema } from '../state/state.types'

export const provinceSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  state_id: z.coerce.number(),

  state: stateSchema.optional(),
})
export type Province = z.infer<typeof provinceSchema>

export const provincePaginateSchema = makePaginateSchema(provinceSchema)
export type PaginateProvince = z.infer<typeof provincePaginateSchema>

import { z } from 'zod'
import { stateSchema } from '../state/state.types'
import { makePaginateSchema } from '../../../utils/validation'

export const provinceSchema = z.object({
  id: z.number(),
  name: z.string(),
  state_id: z.number(),

  state: stateSchema.optional(),
})
export type Province = z.infer<typeof provinceSchema>

export const provincePaginateSchema = makePaginateSchema(provinceSchema)
export type PaginatedProvince = z.infer<typeof provincePaginateSchema>
import { z } from 'zod'
import { makePaginateSchema } from '../../../utils/validation'
import { provinceSchema } from '../province/province.types'

export const citySchema = z.object({
  id: z.number(),
  name: z.string(),
  province_id: z.number(),
  province: provinceSchema.optional(),
})
export type City = z.infer<typeof citySchema>

export const cityPaginateSchema = makePaginateSchema(citySchema)
export type PaginatedCity = z.infer<typeof cityPaginateSchema>

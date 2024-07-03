import { z } from 'zod'
import { makePaginateSchema } from '../../../utils/validation'
import { provinceSchema } from '../province/province.types'

export const citySchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  province_id: z.coerce.number(),
  province: provinceSchema.optional(),
})
export type City = z.infer<typeof citySchema>

export const cityPaginateSchema = makePaginateSchema(citySchema)
export type PaginateCity = z.infer<typeof cityPaginateSchema>

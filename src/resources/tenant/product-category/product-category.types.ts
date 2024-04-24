import { z } from 'zod'
import { makePaginateSchema } from '../../../utils/validation'

export const productCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  parent_id: z.number().nullable(),
  parent: z.unknown().optional(),
  nested_parent: z.unknown().optional(),
})
export type ProductCategory = z.infer<typeof productCategorySchema>

export const productCategoryPaginateSchema = makePaginateSchema(
  productCategorySchema
)

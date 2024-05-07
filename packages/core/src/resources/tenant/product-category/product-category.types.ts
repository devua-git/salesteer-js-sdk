import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
} from '../../../utils/validation'

export const productCategorySchema = z
  .object({
    id: z.coerce.number(),
    name: z.string(),
    parent_id: z.coerce.number().nullable(),
  })
  .and(objectWithTimestamps)
export type ProductCategory = z.infer<typeof productCategorySchema>

export const productCategoryPaginateSchema = makePaginateSchema(
  productCategorySchema
)

const baseProductCategoryTreeNodeSchema = z.object({
  id: z.coerce.number(),
})

export type ProductCategoryTreeNode = z.infer<
  typeof baseProductCategoryTreeNodeSchema
> & {
  children: ProductCategoryTreeNode[]
}

const productCategoryTreeNodeSchema: z.ZodType<ProductCategoryTreeNode> =
  baseProductCategoryTreeNodeSchema.extend({
    children: z.lazy(() => productCategoryTreeNodeSchema.array()),
  })

export const categoryTreesResponseSchema = z.object({
  categories: z.array(
    productCategorySchema.and(
      z.object({
        root: z.coerce.boolean(),
        children: z.array(z.coerce.number()),
      })
    )
  ),

  categories_trees: z.array(productCategoryTreeNodeSchema),
})

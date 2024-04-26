import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
} from '../../../utils/validation'
import { productSchema } from '../product/product.types'
import { customerSchema } from '../customer/customer.types'

export const productListSchema = z
  .object({
    id: z.number(),
    title: z.string(),

    hashed_id: z.string(),

    is_active: z.coerce.boolean(),
    is_public: z.coerce.boolean(),

    can_make_offer: z.coerce.boolean().nullish().default(false),

    products: z.array(productSchema).optional(),
    customers: z.array(customerSchema).optional(),
  })
  .and(objectWithTimestamps)
export type ProductList = z.infer<typeof productListSchema>

export const productListPaginateSchema = makePaginateSchema(productListSchema)
export type PaginatedProductList = z.infer<typeof productListPaginateSchema>

export const productListProductSchema = productSchema.and(
  z.object({
    discount: z.coerce.number().nullable(),
    product_id: z.coerce.number(),
    product_list_id: z.coerce.number(),
  })
)
export type ProductListProduct = z.infer<typeof productListProductSchema>

export const productListProductPaginateSchema = makePaginateSchema(
  productListProductSchema
)
export type PaginatedProductListProduct = z.infer<
  typeof productListProductPaginateSchema
>

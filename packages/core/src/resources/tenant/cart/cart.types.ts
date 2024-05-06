import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
} from '../../../utils/validation'

export const cartSchema = z
  .object({
    id: z.coerce.number(),

    name: z.string().nullable(),

    user_id: z.coerce.number(),
    customer_id: z.coerce.number(),

    products: z.array(
      z.object({
        product_id: z.coerce.number(),
        quantity: z.coerce.number(),
      })
    ),
  })
  .and(objectWithTimestamps)
export type Cart = z.infer<typeof cartSchema>

export const cartPaginateSchema = makePaginateSchema(cartSchema)
export type PaginatedCartList = z.infer<typeof cartPaginateSchema>

export type CartCreateRequest = { customer_id: number; name?: string | null }
export type CartUpdateRequest = { name?: string | null }

export type CartSyncRequest = {
  products: { product_id: number; quantity: number }[]
}

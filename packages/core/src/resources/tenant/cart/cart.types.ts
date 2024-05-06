import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
} from '../../../utils/validation'
import { imageSchema } from '../image/image.types'

export const cartSchema = z
  .object({
    id: z.coerce.number(),

    name: z.string().nullable(),

    user_id: z.coerce.number(),
    customer_id: z.coerce.number(),

    products: z.array(
      z.object({
        id: z.coerce.number(),
        name: z.string(),
        description: z.string().nullable(),
        net_amount: z.coerce.number(),
        previous_amount: z.coerce.number().nullable(),
        quantity: z.coerce.number(),
        image: imageSchema.nullish(),
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

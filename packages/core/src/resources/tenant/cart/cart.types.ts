import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
} from '../../../utils/validation'
import { imageSchema } from '../image/image.types'
import { amountsSchema } from '../tax/tax.types'
import { placeSchema } from '../place/place.types'
import { userSchema } from '../user/user.types'
import { offerSchema } from '../offer/offer.types'

export const cartSchema = z
  .object({
    id: z.coerce.number(),
    name: z.string().nullable(),
    user_id: z.coerce.number().nullable(),
    customer_id: z.coerce.number().nullable(),

    anonymous_id: z.string().nullable(),

    amounts: amountsSchema,
    shipping_amounts: amountsSchema,

    shipping_place_id: z.coerce.number().nullable(),
    shipping_place: placeSchema.nullable(),

    user: userSchema.nullable(),
    offer: offerSchema.nullable(),

    products: z.array(
      z.object({
        id: z.coerce.number(),

        name: z.string(),
        description: z.string().nullable(),

        amounts: amountsSchema,
        quantity: z.coerce.number(),
        image: imageSchema.nullish(),
      })
    ),
  })
  .and(objectWithTimestamps)
export type Cart = z.infer<typeof cartSchema>

export const cartPaginateSchema = makePaginateSchema(cartSchema)
export type PaginateCartList = z.infer<typeof cartPaginateSchema>

export type CartCreateRequest =
  | { customer_id: number; name?: string | null }
  | { anonymous_id: string; name?: string | null }
export type CartUpdateRequest = { name?: string | null }

export type CartSyncRequest = {
  products: { product_id: number; quantity: number }[]
}

export type CartSetShippingRequest = {
  anonymous_id: number
  place_id: string
  line2?: string
}

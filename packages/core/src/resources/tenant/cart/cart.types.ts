import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
} from '../../../utils/validation'
import { imageSchema } from '../image/image.types'
import { offerSchema } from '../offer/offer.types'
import { placeSchema } from '../place/place.types'
import { amountsSchema } from '../tax/tax.types'
import { userSchema } from '../user/user.types'

export const cartSchema = z
  .object({
    id: z.coerce.number(),
    name: z.string().nullable(),
    user_id: z.coerce.number().nullable(),
    customer_id: z.coerce.number().nullable(),

    is_person: z.boolean(),
    company_name: z.string().nullable(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    email: z.string().nullable(),

    tax_code: z.string().nullable(),
    vat_number: z.string().nullable(),

    anonymous_id: z.string().nullable(),

    amounts: amountsSchema,
    shipping_amounts: amountsSchema,

    wants_invoice: z.boolean(),
    is_billing_same_as_shipping: z.boolean(),

    shipping_place_id: z.coerce.number().nullable(),
    shipping_place: placeSchema.nullable(),
    billing_place_id: z.coerce.number().nullable(),
    billing_place: placeSchema.nullable(),

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

export type CartUpdateRequest = {
  name?: string | null
  is_person?: boolean
  first_name?: string | null
  last_name?: string | null
  email?: string | null
  company_name?: string | null
  tax_code?: string | null
  vat_number?: string | null
  wants_invoice?: boolean
  is_billing_same_as_shipping?: boolean
}

export type CartSyncRequest = {
  products: { product_id: number; quantity: number }[]
}

export type CartSetAddressRequest = {
  anonymous_id: number
  is_billing: boolean
  place_id: string
  line2?: string
}

import { z } from 'zod'
import { makePaginateSchema, zodDatetime } from '../../../utils/validation'
import { productSchema } from '../product/product.types'
import { plannableEventSchema } from '../event/event.types'

export const rentSchema = z.object({
  id: z.coerce.number(),
  event_id: z.coerce.number(),
  product_id: z.coerce.number(),
  customer_id: z.coerce.number(),
  serialized_product: z.any(),
  paid_at: zodDatetime.nullable(),
  customer: z.any(), //todo: risolvere il tipo
  event: plannableEventSchema.optional(),
})
export type Rent = z.infer<typeof rentSchema>

export const rentPaginateSchema = makePaginateSchema(rentSchema)
export type PaginateRentList = z.infer<typeof rentPaginateSchema>

export const rentProductDetailSchema = z.object({
  product: productSchema,
  price: z.coerce.number(),
  days: z.coerce.number(),
  available: z.coerce.boolean(),
})
export type RentProductDetail = z.infer<typeof rentProductDetailSchema>

export const rentCheckoutSchema = z.object({
  rent: rentSchema,
  checkout_url: z.string(),
})

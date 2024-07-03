import { z } from 'zod'
import { makePaginateSchema } from '../../../utils/validation'
import { unitMeasureSchema } from '../unit-measure/unit-measure.types'

export const taxSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  default: z.coerce.boolean(),
  value: z.coerce.number(),
})
export type Tax = z.infer<typeof taxSchema>

export const taxListSchema = makePaginateSchema(taxSchema)

export const taxableEntity = z.object({
  taxes: z.array(taxSchema),
})

export const amountsSchema = z.object({
  amount_net: z.coerce.number(),
  amount_sale: z.coerce.number(),
  amount_subtotal: z.coerce.number(),
  amount_presale_tax: z.coerce.number(),
  amount_tax: z.coerce.number(),
  amount_presale_total: z.coerce.number(),
  amount_total: z.coerce.number(),
})
export type Amounts = z.infer<typeof amountsSchema>

export const hasAmountsSchema = z.object({
  amounts: amountsSchema,
})
export type HasAmounts = z.infer<typeof hasAmountsSchema>

export const hasPriceAndQuantitySchema = z.object({
  price: z.coerce.number(),
  quantity: z.coerce.number(),
  sale: z.coerce.number(),

  taxes: z.array(taxSchema),

  unit_measure_id: z.coerce.number(),
  unit_measure: unitMeasureSchema,
})
export type HasPriceAndQuantity = z.infer<typeof hasPriceAndQuantitySchema>

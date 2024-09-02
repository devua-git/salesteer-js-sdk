import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
  zodEntityName,
} from '../../../utils/validation'
import type { SaleType } from '../tax/tax.types'
import { hasAmountsSchema, hasPriceAndQuantitySchema } from '../tax/tax.types'

export const InvoiceStatus = {
  created: 0,
  sent: 1,
  cashed: 2,
}
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]

export const invoiceableEntitySchema = z.object({
  id: z.number(),
  total_invoiced_minutes: z.number(),
  can_create_automatic_invoices: z.coerce.boolean(),
})
export type InvoiceableEntity = z.infer<typeof invoiceableEntitySchema>

export const invoiceItemSchema = z
  .object({
    id: z.number(),
    description: z.string(),
    invoice_id: z.number(),
  })
  .and(hasPriceAndQuantitySchema)
  .and(hasAmountsSchema)
export type InvoiceItem = z.infer<typeof invoiceItemSchema>

export const invoiceSchema = z
  .object({
    id: z.coerce.number(),

    invoiceable_id: z.coerce.number().nullish(),
    invoiceable_type: zodEntityName.nullish(),
    invoiceable: invoiceableEntitySchema.optional(),

    customer_id: z.coerce.number(),

    passive: z.coerce.boolean(),
    partial_percentage: z.coerce.number(),
    status: z.coerce.number().pipe(z.nativeEnum(InvoiceStatus)),

    items: z.array(invoiceItemSchema),

    customer_business_name: z.string(),
    customer_vat_number: z.string().nullish(),
    customer_tax_code: z.string().nullish(),
    customer_city: z.string(),
    customer_line1: z.string(),
    customer_line2: z.string().nullish(),
    customer_postal_code: z.string(),
    customer_country: z.string(),
    customer_state: z.string().nullish(),
    customer_province: z.string().nullish(),
    customer_sdi_code: z.string().nullish(),
    customer_pec: z.string().nullish(),
  })
  .and(hasAmountsSchema)
  .and(objectWithTimestamps)
export type Invoice = z.infer<typeof invoiceSchema>

export const invoicePaginateSchema = makePaginateSchema(invoiceSchema)
export type PaginateInvoiceList = z.infer<typeof invoicePaginateSchema>

export type InvoiceCreateRequest = {
  customer_id: number
  passive: boolean
  items: {
    description: string
    price: number
    taxes_ids: number[]
    quantity: number
    //TODO: REFACTOR to unit_measure_id
    unit_measure: { id: number }
    sale: number
    sale_type: SaleType
  }[]
}

export type InvoiceUpdateRequest = (
  | {
      customer_tax_code: string
      customer_vat_number?: string | null
    }
  | {
      customer_vat_number: string
      customer_tax_code?: string | null
    }
) & {
  customer_business_name?: string
  customer_city?: string
  customer_line1?: string
  customer_line2?: string | null
  customer_postal_code?: string
  customer_country?: string
  customer_state?: string | null
  customer_province?: string | null
  customer_sdi_code?: string | null
  customer_pec?: string | null

  status: InvoiceStatus

  items: {
    description: string
    price: number
    taxes_ids: number[]
    quantity: number
    //TODO: REFACTOR to unit_measure_id
    unit_measure: { id: number }
    sale: number
    sale_type: SaleType
  }[]
}

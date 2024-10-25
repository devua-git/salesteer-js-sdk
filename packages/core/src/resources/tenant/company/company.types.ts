import { z } from 'zod'
import { objectWithTimestamps } from '../../../utils/validation'

export const companySchema = z
  .object({
    id: z.coerce.number(),

    name: z.string(),
    domain: z.string().nullable(),
    vat_number: z.string().nullable(),

    logo: z.string().nullable(),
    logo_uri: z.string().nullable(),
    dark_mode_logo: z.string().nullable(),
    dark_mode_logo_uri: z.string().nullable(),
  })
  .and(objectWithTimestamps)

export type Company = z.infer<typeof companySchema>

export const tenantSchema = z
  .object({
    id: z.string(),
    stripe_commission: z.coerce.number().nullish(),
    stripe_connect_account_id: z.string().nullish(),
    stripe_rent_success_redirect_url: z.string().nullish(),
    is_shop_api_enabled: z.coerce.boolean().optional(),
    default_shop_term_slug: z.string().nullish(),
  })
  .and(
    z
      .object({
        is_shop_enabled: z.literal(true),
        default_shop_product_list_id: z.coerce.number(),
      })
      .or(
        z.object({
          is_shop_enabled: z.literal(false),
          default_shop_product_list_id: z.null(),
        })
      )
  )
export type Tenant = z.infer<typeof tenantSchema>

export const currentCompanyDataSchema = z.object({
  company: companySchema.nullable(),
  tenant: tenantSchema,
})
export type CurrentCompanyData = z.infer<typeof currentCompanyDataSchema>

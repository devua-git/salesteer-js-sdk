import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
} from '../../../utils/validation'

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

export const companyPaginateSchema = makePaginateSchema(companySchema)
export type PaginatedCompany = z.infer<typeof companyPaginateSchema>

import { z } from 'zod'
import { makePaginateSchema } from '../../../utils/validation'

export const vatTypeSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  default: z.coerce.boolean(),
  value: z.coerce.number(),
})
export type VatType = z.infer<typeof vatTypeSchema>

export const vatTypePaginateSchema = makePaginateSchema(vatTypeSchema)

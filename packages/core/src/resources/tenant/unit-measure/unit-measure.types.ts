import { z } from 'zod'

export const unitMeasureSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  symbol: z.string(),
  precision: z.coerce.number(),
  default: z.coerce.boolean(),
})
export type UnitMeasure = z.infer<typeof unitMeasureSchema>

import { z } from 'zod'
import { zodEntityName } from '../../../utils/validation'

export const imageSchema = z.object({
  id: z.coerce.number(),
  path: z.string(),
  imageable_type: zodEntityName.nullable(),
  imageable_id: z.coerce.number(),
  url: z.string(),
  type: z.string().nullable(),
})

export type Image = z.infer<typeof imageSchema>

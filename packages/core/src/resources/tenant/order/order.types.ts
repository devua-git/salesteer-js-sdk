import { z } from 'zod'
import { objectWithTimestamps } from '../../../utils/validation'
import { pipelineStepSchema } from '../pipeline-step/pipeline-step.types'
import { hasAmountsSchema } from '../tax/tax.types'
import { productSchema } from '../product/product.types'

export const orderSchema = z
  .object({
    id: z.coerce.number(),
    data: z.object({
      offer: z
        .object({
          id: z.coerce.number(),
          hashed_id: z.string(),
          name: z.string(),
          products: z.array(productSchema.and(hasAmountsSchema)),
        })
        .and(hasAmountsSchema),
      nominative: z.string(),
      customer_type: z.enum(['customer', 'person']),
      vat_number: z.string().nullable(),
      tax_code: z.string().nullable(),
      billing_address: z.object({
        line1: z.string(),
        line2: z.string().nullable(),
        postal_code: z.string(),
        country: z.string(),
        state: z.string(),
        province: z.string(),
        city: z.string(),
      }),
    }),
    pipeline_entity_step_id: z.coerce.number(),
    pipeline_step: pipelineStepSchema,
  })
  .and(objectWithTimestamps)

export type Order = z.infer<typeof orderSchema>

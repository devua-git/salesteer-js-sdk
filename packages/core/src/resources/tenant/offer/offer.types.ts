import { z } from 'zod'
import { objectWithSoftDelete, objectWithTimestamps } from '../../../utils/validation'
import { pipelineStepSchema } from '../pipeline-step/pipeline-step.types'
import { productSchema } from '../product/product.types'
import { amountsSchema, hasAmountsSchema } from '../tax/tax.types'

export const offerSchema = z
  .object({
    id: z.coerce.number(),
    customer_id: z.coerce.number().nullable(),
    project_id: z.coerce.number().nullable(),
    name: z.string(),
    description: z.string(),
    completed: z.coerce.boolean(),
    shipment_place_id: z.coerce.number().nullable(),
    expiration_date: z.string(),
    person_id: z.coerce.number().nullable(),
    pipeline_entity_step_id: z.coerce.number(),
    opportunity_id: z.coerce.number().nullable(),
    delivery_time: z.coerce.number().nullable(),
    order_id: z.coerce.number().nullable(),
    amounts: amountsSchema,
    recurrentAmounts: amountsSchema,
    hashed_id: z.string(),
    can_create_automatic_invoices: z.coerce.boolean(),
    total_invoiced_minutes: z.coerce.number(),
    plannable_title: z.string(),
    pipeline_step: pipelineStepSchema,
    non_recurrent_products: z.array(productSchema.and(hasAmountsSchema)),
    recurrent_products: z.array(productSchema.and(hasAmountsSchema)),
  })
  .and(objectWithTimestamps)
  .and(objectWithSoftDelete)

export type Offer = z.infer<typeof offerSchema>

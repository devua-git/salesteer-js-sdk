import { z } from 'zod'
import { offerSchema } from '../offer/offer.types'
import { objectWithTimestamps } from '../../../utils/validation'
import { pipelineStepSchema } from '../pipeline-step/pipeline-step.types'

export const orderSchema = z
  .object({
    id: z.coerce.number(),
    data: offerSchema,
    pipeline_entity_step_id: z.coerce.number(),
    pipeline_step: pipelineStepSchema,
  })
  .and(objectWithTimestamps)

export type Order = z.infer<typeof orderSchema>

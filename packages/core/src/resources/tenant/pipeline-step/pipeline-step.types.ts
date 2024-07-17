import { z } from 'zod'
import { objectWithTimestamps } from '../../../utils/validation'

export const pipelineStepSchema = z
  .object({
    id: z.coerce.number(),
    entity_type: z.string(),
    title: z.string(),
    code: z.string(),
    color: z.string(),
    order: z.coerce.number(),
    closing_percentage: z.coerce.number(),
    type: z.coerce.number(),
    protected: z.coerce.boolean(),
  })
  .and(objectWithTimestamps)

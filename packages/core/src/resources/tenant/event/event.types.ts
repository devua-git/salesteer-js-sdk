import { z } from 'zod'
import { zodDatetime, zodEntityName } from '../../../utils/validation'

export const plannableEventSchema = z.object({
  id: z.coerce.number(),

  customer_id: z.coerce.number().nullable(),
  person_id: z.coerce.number().nullable(),

  customer: z.any().nullable(), // TODO: customerSchema
  person: z.any().nullable(), // TODO: personSchema

  title: z.string(),
  description: z.string().nullable(),

  date_start: zodDatetime,
  date_end: zodDatetime,

  start_hours: z.coerce.number(),
  end_hours: z.coerce.number(),

  is_fulfilled: z.coerce.boolean(),
  is_public: z.coerce.boolean(),
  is_deadline: z.coerce.boolean(),

  fulfill_motivation: z.string().nullable(),
  event_completion_reason_id: z.coerce.number().nullable(),
  // completion_reason: eventCompletionReasonSchema.nullish(),

  planner_title: z.string(),
  plannable_id: z.coerce.number().nullable(),
  plannable_type: zodEntityName.nullable(),
  plannable: z.any().nullable(),

  parent_id: z.coerce.number().nullable(),
  parent_event: z.unknown().nullable(),
  child_event: z.unknown().nullable(),

  status: z.string().optional(),
  level: z.coerce.number().optional(),
  col_left: z.coerce.number().optional(),
  col_right: z.coerce.number().optional(),

  event_type_id: z.coerce.number().nullable(),
  // event_type: eventTypeSchema.nullish(),

  rent: z.any().nullish(),
})
// .merge(commentableEntitySchema)
// .merge(reportableEntitySchema)
// .merge(assignableEntitySchema)

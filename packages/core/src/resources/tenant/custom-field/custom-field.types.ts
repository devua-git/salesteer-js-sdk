import { z } from 'zod'
import { objectWithTimestamps, zodEntityName } from '../../../utils/validation'

export const CustomFieldType = {
  String: 1,
  Integer: 2,
  Date: 3,
  Decimal: 4,
  Datetime: 5,
  Boolean: 6,
  Text: 7,
} as const
export type CustomFieldType = (typeof CustomFieldType)[keyof typeof CustomFieldType]

export const customFieldSchema = z
  .object({
    id: z.coerce.number(),

    name: z.string(),
    description: z.string().nullable(),

    type: z.nativeEnum(CustomFieldType),
    entity_type: zodEntityName.nullable(),
    custom_object_id: z.coerce.number().nullable(),
    constrained_to_entity_type: zodEntityName.nullable(),

    is_required: z.boolean(),
    is_unique: z.boolean(),
    is_taggable: z.boolean(),
    is_array: z.boolean(),

    valid_values: z.array(z.string()).nullable(),
  })
  .and(objectWithTimestamps)

export type CustomField = z.infer<typeof customFieldSchema>

export const entityWithCustomFieldsSchema = z.object({
  custom_fields: z.array(
    z.object({
      custom_field_id: z.number(),
      name: z.string(),
      value: z.any(),
      type: z.nativeEnum(CustomFieldType),
      constrained_to_entity_type: zodEntityName.nullable(),
      is_taggable: z.boolean(),
      is_unique: z.boolean(),
      is_required: z.boolean(),
      is_array: z.boolean(),
      valid_values: z.array(z.string()).nullable(),
    }),
  ),
})
export type EntityWithCustomFields = z.infer<
  typeof entityWithCustomFieldsSchema
>

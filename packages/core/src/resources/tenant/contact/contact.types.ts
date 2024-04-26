import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
} from '../../../utils/validation'

export const ContactType = {
  email: 1,
  phone: 2,
  fax: 3,
  pec: 4,
  mobile: 5,
} as const
export type ContactType = (typeof ContactType)[keyof typeof ContactType]

export const contactSchema = z
  .object({
    id: z.coerce.number(),

    type: z.nativeEnum(ContactType),
    value: z.string(),

    places: z.any().optional(),
    leads: z.any().optional(),
    people: z.any().optional(),
  })
  .merge(objectWithTimestamps)
export type Contact = z.infer<typeof contactSchema>

export const contactListSchema = makePaginateSchema(contactSchema)

export const entityContactSchema = z
  .object({
    contact_id: z.coerce.number(),
    contactables_id: z.coerce.number(),
    contactable_type: z.string(),
    contactable_id: z.coerce.number(),

    type: z.nativeEnum(ContactType),
    value: z.string(),
  })
  .merge(objectWithTimestamps)
export type EntityContact = z.infer<typeof entityContactSchema>

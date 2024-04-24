import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
  zodEntityName,
} from '../../../utils/validation'
import type { ContactType } from '../contact/contact.types'
import { entityContactSchema } from '../contact/contact.types'
import { containsAddressSchema } from '../address/address.types'

export const placeSchema = z
  .object({
    id: z.number(),

    placeable_id: z.number(),
    placeable_type: zodEntityName,

    legal_office: z.coerce.boolean(),
    description: z.string(),

    contacts: z.array(entityContactSchema),
  })
  .merge(containsAddressSchema)
  .merge(objectWithTimestamps)
export type Place = z.infer<typeof placeSchema>

export const placePaginateSchema = makePaginateSchema(placeSchema)
export type PaginatedPlaceList = z.infer<typeof placePaginateSchema>

export const placeableEntitySchema = z.object({
  id: z.number(),
  legal_office: placeSchema.nullish(),
  places: z.array(placeSchema).optional(),
})
export type PlaceableEntity = z.infer<typeof placeableEntitySchema>

export type PlaceCreateRequest = {
  placeable_id: number
  placeable_type: string
  line1?: string
  line2?: string
  postal_code?: string
  country_id: number
  state_id?: number
  state_name?: string
  province_id?: number
  province_name?: string
  city_id?: number
  city_name?: string
  legal_office: boolean
  description?: string
  contacts?: {
    type: ContactType
    value: string
  }[]
}

export type PlaceUpdateRequest = PlaceCreateRequest

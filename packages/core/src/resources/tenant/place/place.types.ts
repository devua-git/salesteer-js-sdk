import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
  zodEntityName,
} from '../../../utils/validation'
import type { ContactType } from '../contact/contact.types'
import { entityContactSchema } from '../contact/contact.types'
import { containsAddressSchema } from '../address/address.types'
import { countrySchema } from '../country/country.types'
import { stateSchema } from '../state/state.types'
import { provinceSchema } from '../province/province.types'
import { citySchema } from '../city/city.types'

export const placeSchema = z
  .object({
    id: z.coerce.number(),

    placeable_id: z.coerce.number(),
    placeable_type: zodEntityName,

    legal_office: z.coerce.boolean(),
    description: z.string().nullable(),

    contacts: z.array(entityContactSchema).optional().default([]),
  })
  .and(containsAddressSchema)
  .and(objectWithTimestamps)
export type Place = z.infer<typeof placeSchema>

export const placePaginateSchema = makePaginateSchema(placeSchema)
export type PaginatePlaceList = z.infer<typeof placePaginateSchema>

export const placeableEntitySchema = z.object({
  id: z.coerce.number(),
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

export const placeAutocompleteSchema = z.object({
  data: z.array(z.object({ place_id: z.string(), label: z.string() })),
})

export const placeAutocompleteCreateResponseSchema =
z.object({
  country: countrySchema,
  state: stateSchema,
  province: provinceSchema,
  city: citySchema,
  postal_code: z.string(),
  line_1: z.string(),
})
export type PlaceAutocompleteCreateResponse = z.infer<typeof placeAutocompleteCreateResponseSchema>
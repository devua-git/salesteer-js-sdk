import { z } from 'zod'
import { citySchema } from '../city/city.types'
import { countrySchema } from '../country/country.types'
import { provinceSchema } from '../province/province.types'
import { stateSchema } from '../state/state.types'

export const containsAddressSchema = z.object({
  line1: z.string().nullable(),
  line2: z.string().nullish(),
  postal_code: z.string().nullable(),

  city_id: z.coerce.number().nullable(),
  city: citySchema.nullish(),

  country_id: z.coerce.number().nullable(),
  country: countrySchema.nullish(),

  state_id: z.coerce.number().nullable(),
  state: stateSchema.nullish(),

  province_id: z.coerce.number().nullable(),
  province: provinceSchema.nullish(),

  is_valid_address: z.coerce.boolean(),
})

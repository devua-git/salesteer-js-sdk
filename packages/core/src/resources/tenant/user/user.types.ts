import { z } from 'zod'
import { companySchema } from '../company/company.type'
import { imageSchema } from '../image/image.types'
import { abilitySchema, roleSchema } from '../role/role.types'
import {
  objectWithSoftDelete,
  objectWithTimestamps,
  zodDatetime,
} from '../../../utils/validation'

export const userSchema = z
  .object({
    id: z.coerce.number(),
    name: z.string(),
    email: z.string(),

    email_verified_at: zodDatetime.nullish(),

    admin: z.coerce.boolean(),
    is_owner: z.coerce.boolean(),
    is_external: z.coerce.boolean(),
    has_central_invoiceable_address: z.coerce.boolean(),

    timezone: z.string(),
    locale: z.string().nullish(),

    company_id: z.coerce.number().nullable(),
    company: companySchema.nullish(),

    profile_image: imageSchema.nullable(),

    roles: z.array(roleSchema).nullish(),
    abilities: z.array(abilitySchema).nullish(),
    all_abilities: z.array(abilitySchema).nullish(),

    config: z.record(z.string(), z.any()).nullish(),
  })
  .and(objectWithTimestamps)
  .and(objectWithSoftDelete)
export type User = z.infer<typeof userSchema>

export const signInSchema = userSchema.or(
  z.object({
    user: userSchema,
    token: z.string(),
  })
)

export interface UserRegisterRequest {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export interface UserSignInRequest {
  email: string
  password: string
  remember: boolean
}

export interface UserPasswordResetRequest {
  email: string
}

export interface UserPasswordForgotRequest {
  token: string
  email: string
  password: string
}

import { z } from 'zod'
import { isFlagSet } from '../../../utils/bitwise'
import { getEnumValues } from '../../../utils/map-enum'
import {
  makePaginateSchema,
  objectWithSoftDelete,
  objectWithTimestamps,
} from '../../../utils/validation'
import { placeableEntitySchema } from '../place/place.types'

export const CustomerType = {
  Prospect: 1, // 0001
  Account: 2, // 0010
  Supplier: 4, // 0100
  Person: 8, // 0100
} as const
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType]

export const UserManagedCustomerRole = {
  admin: 1,
  employee: 2,
}
export type UserManagedCustomerRole =
  (typeof UserManagedCustomerRole)[keyof typeof UserManagedCustomerRole]

export function customerIsType(customer: Customer, typeFlag: CustomerType) {
  return isFlagSet(customer.type, typeFlag)
}

export function getCustomerTypes(customer: Customer) {
  return getEnumValues(CustomerType).filter((customerType) =>
    customerIsType(customer, customerType)
  )
}

export const customerSchema = z
  .object({
    id: z.coerce.number(),

    type: z.nativeEnum(CustomerType),

    company_name: z.string().nullable(),
    vat_number: z.string().nullable(),
    tax_code: z.string().nullable(),
    sdi_code: z.string().nullable(),
    pec: z.string().nullable(),
    rank: z.coerce.number().nullable(),
    average_satisfaction: z.coerce.number().nullish(),
    description: z.string().nullable(),

    //TODO
    // groups: z.array(customerGroupSchema).optional(),
    // product_interests: z.array(productInterestSchema).optional(),

    //TODO
    // acquire_type_id: z.coerce.number().nullable(),
    // acquire_type: acquireTypeSchema.nullish(),

    can_be_dropped: z.coerce.boolean().optional(),
    has_duplicates: z.coerce.boolean().optional(),
  })
  .and(objectWithTimestamps)
  .and(objectWithSoftDelete)
  .and(placeableEntitySchema)
export type Customer = z.infer<typeof customerSchema>

export const customerPaginateSchema = makePaginateSchema(customerSchema)
export type PaginateCustomerList = z.infer<typeof customerPaginateSchema>

export const userManagedCustomerSchema = customerSchema.and(
  z.object({
    pivot: z.object({ role: z.nativeEnum(UserManagedCustomerRole) }),
  })
)
export type UserManagedCustomer = z.infer<typeof userManagedCustomerSchema>

export type CustomerCreateRequest = {
  company_name: string
  vat_number?: string
  tax_code?: string
  type: CustomerType
  sdi_code?: string
  pec?: string
  description?: string
  acquire_type_id?: number
  product_interests_ids?: number[]
  groups_ids?: number[]
}

export type CustomerUpdateRequest = CustomerCreateRequest

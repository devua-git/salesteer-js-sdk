import { z } from 'zod'
import { zodEntityName } from '../../../utils/validation'

export const isRoleSuperAdmin = (role: Role) => role.name === 'super-admin'

export const abilitySchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  title: z.string(),
  entity_type: zodEntityName.or(z.literal('*')),
})
export type Ability = z.infer<typeof abilitySchema>

export const roleSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  title: z.string(),
  abilities: z.array(abilitySchema).optional(),
})
export type Role = z.infer<typeof roleSchema>

export const crudAbilities = [
  'create',
  'list',
  'list-assigned',
  'update',
  'update-assigned',
  'drop',
  'drop-assigned',
]

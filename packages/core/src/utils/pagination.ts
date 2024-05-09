import type { PrimitiveType, PrimitiveWithNullType } from './types'

export type SortMode = 'asc' | 'desc'

export type SortedColumn = {
  column: string
  mode: SortMode
}

export type QueryFilter = {
  operator: QueryFilterOperator
  value?: PrimitiveWithNullType | PrimitiveWithNullType[]
}

export type PaginateQueryParams = {
  page: number
  perpage?: number
  sorting: Record<string, SortMode>
  filters: Record<string, QueryFilter>
}

export type PaginationPreference = {
  columns: string[]
  params: PaginateQueryParams
}

export type CsvQueryParams = PaginateQueryParams & {
  format: 'csv'
  columns: { field: string; label: string }[]
  page: number
  perpage?: number
  sorting: Record<string, SortMode>
  filters: Record<string, QueryFilter>
}

export type CursorPaginateQueryParams = {
  perpage?: number
  filters: Record<string, QueryFilter>
  cursor?: string | number
  sorting?: Record<string, SortMode>
}

export const queryFilterOperators = [
  'eq',
  'neq',
  'lt',
  'lte',
  'gt',
  'gte',
  'in',
  'notIn',
  'between',
  'notBetween',
  'contains',
  'notContains',
  'startsWith',
  'notStartsWith',
  'endsWith',
  'notEndsWith',
  'null',
  'notNull',
  'empty',
  'notEmpty',
  'true',
  'false',
  'date',
  'dateBefore',
  'dateAfter',
  'dateBetween',
  'dateNotBetween',
] as const
export type QueryFilterOperator = (typeof queryFilterOperators)[number]

export const isEmptyValueOperator = (operator: QueryFilterOperator) =>
  ['true', 'false', 'null', 'notNull', 'empty', 'notEmpty'].includes(operator)

export const isBetweenValueOperator = (operator: QueryFilterOperator) =>
  ['between', 'notBetween', 'dateBetween', 'dateNotBetween'].includes(operator)

export const isMultipleValueOperator = (operator: QueryFilterOperator) =>
  [
    'between',
    'notBetween',
    'dateBetween',
    'dateNotBetween',
    'in',
    'notIn',
  ].includes(operator)

export function isValidQueryFilter(filter: QueryFilter) {
  // If value is an array removes the filter if:
  // - operator requires a primitive
  // - has null values in the array
  // - is a between operator but array lenght is not two
  if (Array.isArray(filter.value)) {
    const hasNullValues = filter.value.filter(isValueEmpty).length > 0
    const hasLengthOfTwo = filter.value.length === 2

    if (
      !isMultipleValueOperator(filter.operator) ||
      hasNullValues ||
      (isBetweenValueOperator(filter.operator) && !hasLengthOfTwo)
    ) {
      return false
    }

    return true
  }

  // Removes filter if value is empty and operator requires value
  if (isValueEmpty(filter.value)) {
    return false
  }
  return true
}

export function getValidQueryFilters(filters: Record<string, QueryFilter>) {
  const validFilters = { ...filters }

  for (const [filterName, { value, operator }] of Object.entries(
    validFilters
  )) {
    // Removes value if operator requires no value
    if (isEmptyValueOperator(operator)) {
      validFilters[filterName].value = undefined
      continue
    }

    if (!isValidQueryFilter({ value, operator })) {
      delete validFilters[filterName]
    }
  }

  return validFilters
}

function isValueEmpty(value?: PrimitiveWithNullType): value is PrimitiveType {
  return value === null || value === undefined || value === ''
}

export type PaginateResult<T> = {
  data: T[]
  total: number
  per_page: number
  current_page: number
  last_page: number
  first_page_url: string
  last_page_url: string
  next_page_url: string | null
  prev_page_url: string | null
  path: string
  from: number
  to: number
  columns?: string[]
  orderables?: string[]
}

export type CursorPaginateResult<T> = {
  data: T[]
  path: string
  per_page: number
  next_cursor: string
  next_page_url: string
  prev_cursor: string
  prev_page_url: string
}

export type FilterablesConfigType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'date'
  | 'select'

export const queryFilterStringOperators = [
  'eq',
  'neq',
  'contains',
  'notContains',
  'startsWith',
  'notStartsWith',
  'endsWith',
  'notEndsWith',
  'null',
  'notNull',
  'empty',
  'notEmpty',
] as const

export type QueryFilterStringOperator =
  (typeof queryFilterStringOperators)[number]

export type FilterablesStringConfig = {
  type: 'string'
  defaultOperator?: QueryFilterStringOperator
  defaultValue?: string
}

export const queryFilterNumberOperators = [
  'eq',
  'neq',
  'lt',
  'lte',
  'gt',
  'gte',
  'between',
  'notBetween',
  'null',
  'notNull',
] as const

export type QueryFilterNumberOperator =
  (typeof queryFilterNumberOperators)[number]

export type FilterablesNumberConfig = {
  type: 'number'
  defaultOperator?: QueryFilterNumberOperator
  defaultValue?: number
}

export const queryFilterBooleanOperators = [
  'true',
  'false',
  'null',
  'notNull',
] as const

export type QueryFilterBooleanOperator =
  (typeof queryFilterBooleanOperators)[number]

export type FilterablesBooleanConfig = {
  type: 'boolean'
  defaultOperator?: QueryFilterBooleanOperator
  defaultValue?: boolean
}

export const queryFilterDateOperators = [
  'date',
  'dateBefore',
  'dateAfter',
  'dateBetween',
  'dateNotBetween',
  'null',
  'notNull',
] as const

export type QueryFilterDateOperator = (typeof queryFilterDateOperators)[number]

export type FilterablesDateConfig = {
  type: 'date'
  defaultOperator?: QueryFilterDateOperator
  defaultValue?: string
}

export const queryFilterSelectOperators = [
  'eq',
  'neq',
  'in',
  'notIn',
  'null',
  'notNull',
] as const

export type QueryFilterSelectOperator =
  (typeof queryFilterSelectOperators)[number]

export type QueryFilterSelectOption = { label: string; value: string | number }

export type FilterablesSelectConfig = {
  type: 'select'
  defaultOperator?: QueryFilterSelectOperator
  defaultValue?: string | number
  options: QueryFilterSelectOption[]
}

export const queryFilterEntityOperators = [
  'eq',
  'neq',
  'in',
  'notIn',
  'null',
  'notNull',
] as const

export type QueryFilterEntityOperator =
  (typeof queryFilterEntityOperators)[number]

export type FilterablesConfig =
  | FilterablesStringConfig
  | FilterablesNumberConfig
  | FilterablesBooleanConfig
  | FilterablesDateConfig
  | FilterablesSelectConfig

export type FilterablesConfigs = Record<string, FilterablesConfig>

export const defaultFilterOperators: Record<
  FilterablesConfigType,
  QueryFilterOperator
> = {
  string: 'contains',
  number: 'eq',
  boolean: 'true',
  select: 'eq',
  date: 'date',
}

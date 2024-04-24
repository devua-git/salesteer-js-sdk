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

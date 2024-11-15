import type { ZodType, ZodTypeDef } from 'zod'
import { z } from 'zod'
import { EntityName } from './morphables'

export const zodDatetime = z.string().datetime().pipe(z.coerce.date())
export const zodDatetimeWithOffset = z
  .string()
  .datetime({ offset: true })
  .pipe(z.coerce.date())
export const zodDate = z.string().pipe(z.coerce.date())

export const zodEntityName = z.enum(EntityName)

export const objectWithTimestamps = z.object({
  created_at: zodDatetime,
  updated_at: zodDatetime.nullable(),
})

export const objectWithSoftDelete = z.object({
  deleted_at: zodDatetime.nullish(),
})

export function parseWithFallback<Output, Def extends ZodTypeDef>(
  schema: ZodType<Output, Def, unknown>,
  data: unknown
) {
  try {
    return schema.parse(data)
  } catch (e) {
    console.warn('Parse failed, returning fallback data')
    console.debug(JSON.stringify(e, null, 2))

    return data as ZodType<Output, Def, Output>['_output']
  }
}

export async function parseWithFallbackAsync<Output, Def extends ZodTypeDef>(
  schema: ZodType<Output, Def, unknown>,
  data: unknown
) {
  try {
    return await schema.parseAsync(data)
  } catch (e) {
    console.warn('Parse failed, returning fallback data')
    console.debug(JSON.stringify(e, null, 2))

    return data as ZodType<Output, Def, Output>['_output']
  }
}

export function makePaginateSchema<Output, Def extends ZodTypeDef>(
  schema: ZodType<Output, Def, unknown>
) {
  return z.object({
    data: z.array(schema),
    total: z.coerce.number(),
    per_page: z.coerce.number(),
    current_page: z.coerce.number(),
    last_page: z.coerce.number(),
    first_page_url: z.string(),
    last_page_url: z.string(),
    next_page_url: z.string().nullable(),
    prev_page_url: z.string().nullable(),
    path: z.string(),
    from: z.coerce.number(),
    to: z.coerce.number(),
    columns: z.array(z.string()).optional(),
    orderables: z.array(z.string()).optional(),
  })
}

export function makeCursorPaginateSchema<Output, Def extends ZodTypeDef>(
  schema: ZodType<Output, Def, unknown>
) {
  return z.object({
    data: z.array(schema),
    path: z.string(),
    per_page: z.coerce.number(),
    next_cursor: z.string().nullable(),
    next_page_url: z.string().nullable(),
    prev_cursor: z.string().nullable(),
    prev_page_url: z.string().nullable(),
  })
}

export const jobBatchSchema = z.object({
  id: z.string(),
  name: z.string(),
  totalJobs: z.coerce.number(),
  pendingJobs: z.coerce.number(),
  processedJobs: z.coerce.number(),
  progress: z.coerce.number(),
  failedJobs: z.coerce.number(),
  createdAt: zodDatetime,
  cancelledAt: zodDatetime.nullable(),
  finishedAt: zodDatetime.nullable(),
})

export type JobBatch = z.infer<typeof jobBatchSchema>

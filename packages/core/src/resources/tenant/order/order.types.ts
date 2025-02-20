import { z } from 'zod'
import { objectWithTimestamps, zodDatetime } from '../../../utils/validation'
import { CustomerType } from '../customer/customer.types'
import { pipelineStepSchema } from '../pipeline-step/pipeline-step.types'
import { productSchema } from '../product/product.types'
import { hasAmountsSchema, hasPriceAndQuantitySchema } from '../tax/tax.types'
import { unitMeasureSchema } from '../unit-measure/unit-measure.types'

export const orderSchema = z
  .object({
    id: z.coerce.number(),
    data: z.object({
      offer: z
        .object({
          id: z.coerce.number(),
          hashed_id: z.string(),
          name: z.string(),
          products: z.array(
            z
              .object({
                name: z.string(),
                taxes: z.array(
                  z.object({
                    name: z.string(),
                    value: z.coerce.number(),
                  }),
                ),
                parent_id: z.coerce.number().nullable(),
                parent: productSchema.nullable(),

                unit_measure_id: z.coerce.number(),
                unit_measure: unitMeasureSchema.optional(),
              })
              .and(hasAmountsSchema)
              .and(hasPriceAndQuantitySchema),
          ),
        })
        .and(hasAmountsSchema),

      customer: z
        .object({
          id: z.coerce.number(),
          nominative: z.string(),
          type: z.nativeEnum(CustomerType),
        })
        .and(
          z
            .object({
              company_name: z.string(),
              first_name: z.string().nullable(),
              last_name: z.string().nullable(),
              vat_number: z.string(),
              tax_code: z.string().nullable(),
            })
            .or(
              z.object({
                company_name: z.string().nullable(),
                first_name: z.string(),
                last_name: z.string().nullable(),
                vat_number: z.string().nullable(),
                tax_code: z.string(),
              }),
            ),
        ),
      billing_address: z.object({
        id: z.coerce.number(),
        line1: z.string(),
        line2: z.string().nullable(),
        postal_code: z.string(),
        country: z.string(),
        state: z.string(),
        province: z.string(),
        city: z.string(),
      }),
      shipping_address: z
        .object({
          id: z.coerce.number(),
          line1: z.string(),
          line2: z.string().nullable(),
          postal_code: z.string(),
          country: z.string(),
          state: z.string(),
          province: z.string(),
          city: z.string(),
        })
        .nullable(),
      shipping_date: zodDatetime.nullable(),
    }),

    pipeline_entity_step_id: z.coerce.number(),
    pipeline_step: pipelineStepSchema,
  })
  .and(objectWithTimestamps)

export type Order = z.infer<typeof orderSchema>

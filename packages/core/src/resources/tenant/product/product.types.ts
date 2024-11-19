import { z } from 'zod'
import {
  makePaginateSchema,
  objectWithTimestamps,
} from '../../../utils/validation'
import { entityWithCustomFieldsSchema } from '../custom-field/custom-field.types'
import { imageSchema } from '../image/image.types'
import { productCategorySchema } from '../product-category/product-category.types'
import { taxableEntitySchema } from '../tax/tax.types'
import { unitMeasureSchema } from '../unit-measure/unit-measure.types'

export const productSchema = z
  .object({
    id: z.coerce.number(),

    name: z.string(),
    price: z.coerce.number(),
    description: z.string().nullable(),
    product_code: z.string().nullable(),

    producer: z.string().nullish(),
    supplier: z.string().nullish(),
    total_quantity: z.coerce.number().nullish(),

    image: imageSchema.nullish(),

    product_category_id: z.coerce.number().nullish(),
    product_category: productCategorySchema.nullish(),

    unit_measure_id: z.coerce.number(),
    unit_measure: unitMeasureSchema.optional(),

    weight: z.coerce.number().nullable(),

    rentable: z.coerce.boolean(),
    is_physical: z.coerce.boolean(),
    obsolete: z.coerce.boolean(),

    metadata: z.record(z.string(), z.string()).nullable(),
  })
  .and(taxableEntitySchema)
  .and(entityWithCustomFieldsSchema)
  .and(objectWithTimestamps)
export type Product = z.infer<typeof productSchema>

export const productPaginateSchema = makePaginateSchema(productSchema)
export type PaginateProductList = z.infer<typeof productPaginateSchema>

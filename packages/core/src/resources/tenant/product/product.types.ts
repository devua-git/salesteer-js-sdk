import { z } from 'zod'
import { imageSchema } from '../image/image.types'
import { vatTypeSchema } from '../vat-type/vat-type.types'
import { productCategorySchema } from '../product-category/product-category.types'
import { unitMeasureSchema } from '../unit-measure/unit-measure.types'
import { makePaginateSchema } from '../../../utils/validation'

export const productSchema = z.object({
  id: z.number(),

  name: z.string(),
  price: z.number(),
  description: z.string().nullable(),
  product_code: z.string().optional(),
  obsolete: z.coerce.boolean(),

  producer: z.string().nullish(),
  supplier: z.string().nullish(),
  total_quantity: z.number().optional(),

  image: imageSchema.nullish(),

  vat_type_id: z.number(),
  vat_type: vatTypeSchema,

  product_category_id: z.number().nullish(),
  product_category: productCategorySchema.nullish(),

  unit_measure_id: z.number(),
  unit_measure: unitMeasureSchema.optional(),

  metadata: z.record(z.string(), z.string()).nullable(),
})
export type Product = z.infer<typeof productSchema>

export const productPaginateSchema = makePaginateSchema(productSchema)
export type PaginatedProductList = z.infer<typeof productPaginateSchema>

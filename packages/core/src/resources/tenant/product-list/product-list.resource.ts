import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { PaginateQueryParams } from '../../../utils/pagination'
import { categoryTreesResponseSchema } from '../product-category/product-category.types'
import {
  productListPaginateSchema,
  inProductListProductPaginateSchema,
} from './product-list.types'

export class ProductListResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`product-lists`, {
      params,
    })

    return parseWithFallbackAsync(productListPaginateSchema, res.data)
  }

  products = async (req: {
    productListId: number
    params?: PaginateQueryParams
  }) => {
    const res = await this.getHttp().get(
      `product-list/${req.productListId}/products`,
      {
        params: req.params,
      }
    )

    return parseWithFallbackAsync(inProductListProductPaginateSchema, res.data)
  }

  categories = async (req: { productListId: number }) => {
    const res = await this.getHttp().get(
      `product-list/${req.productListId}/categories`
    )

    return parseWithFallbackAsync(categoryTreesResponseSchema, res.data)
  }
}

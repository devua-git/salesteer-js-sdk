import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { PaginateQueryParams } from '../../../utils/pagination'
import {
  productListPaginateSchema,
  productListProductPaginateSchema,
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

    return parseWithFallbackAsync(productListProductPaginateSchema, res.data)
  }
}
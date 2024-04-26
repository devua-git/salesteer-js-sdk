import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { PaginateQueryParams } from '../../../utils/pagination'
import { productPaginateSchema } from './product.types'

export class ProductResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`products`, {
      params,
    })

    return parseWithFallbackAsync(productPaginateSchema, res.data)
  }
}

import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { PaginateQueryParams } from '../../../utils/pagination'
import { cityPaginateSchema } from './city.types'

export class CityResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`cities`, {
      params,
    })

    return parseWithFallbackAsync(cityPaginateSchema, res.data)
  }
}

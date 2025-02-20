import { BaseResource } from '../../../resource'
import type { PaginateQueryParams } from '../../../utils/pagination'
import { parseWithFallbackAsync } from '../../../utils/validation'
import { countryPaginateSchema } from './country.types'

export class CountryResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`countries`, {
      params,
    })

    return parseWithFallbackAsync(countryPaginateSchema, res.data)
  }
}

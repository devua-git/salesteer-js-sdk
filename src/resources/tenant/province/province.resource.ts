import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { PaginateQueryParams } from '../../../utils/pagination'
import { provincePaginateSchema } from './province.types'

export class ProvinceResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`provinces`, {
      params,
    })

    return parseWithFallbackAsync(provincePaginateSchema, res.data)
  }
}

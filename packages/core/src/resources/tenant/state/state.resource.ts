import { BaseResource } from '../../../resource'
import type { PaginateQueryParams } from '../../../utils/pagination'
import { parseWithFallbackAsync } from '../../../utils/validation'
import { statePaginateSchema } from './state.types'

export class StateResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`states`, {
      params,
    })

    return parseWithFallbackAsync(statePaginateSchema, res.data)
  }
}

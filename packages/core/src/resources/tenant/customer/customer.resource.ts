import { BaseResource } from '../../../resource'
import type { PaginateQueryParams } from '../../../utils/pagination'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { CustomerCreateRequest, CustomerUpdateRequest } from './customer.types'
import { customerPaginateSchema, customerSchema } from './customer.types'

export class CustomerResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`customers`, {
      params,
    })

    return parseWithFallbackAsync(customerPaginateSchema, res.data)
  }

  create = async (req: CustomerCreateRequest) => {
    const res = await this.getHttp().post(`customer`, req)
    return parseWithFallbackAsync(customerSchema, res.data)
  }

  update = async (req: { customerId: number; data: CustomerUpdateRequest }) => {
    const res = await this.getHttp().post(`customer/${req.customerId}`, req)
    return parseWithFallbackAsync(customerSchema, res.data)
  }
}

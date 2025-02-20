import { z } from 'zod'
import { BaseResource } from '../../../resource'
import type { PaginateQueryParams } from '../../../utils/pagination'
import { parseWithFallbackAsync } from '../../../utils/validation'
import { productSchema } from '../product/product.types'
import { rentCheckoutSchema, rentPaginateSchema, rentProductDetailSchema, rentSchema } from './rent.types'

export class RentResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`rents`, {
      params,
    })

    return parseWithFallbackAsync(rentPaginateSchema, res.data)
  }

  customerRents = async (req: {
    customerId: number
    params?: PaginateQueryParams
  }) => {
    const res = await this.getHttp().get(`customer/${req.customerId}/rents`, {
      params: req.params,
    })

    return parseWithFallbackAsync(rentPaginateSchema, res.data)
  }

  fetch = async (id: number) => {
    const res = await this.getHttp().get(`rents/${id}`)
    return parseWithFallbackAsync(rentSchema, res.data)
  }

  availableProducts = async (dateStart: Date, dateEnd: Date) => {
    const res = await this.getHttp().get(`rents/available`, {
      params: {
        start_date: dateStart,
        end_date: dateEnd,
      },
    })
    return parseWithFallbackAsync(z.array(productSchema), res.data)
  }

  productDetail = async (productId: number, dateStart: Date, dateEnd: Date) => {
    const res = await this.getHttp().get(`product/${productId}/rentDetail`, {
      params: {
        start_date: dateStart,
        end_date: dateEnd,
      },
    })
    return parseWithFallbackAsync(rentProductDetailSchema, res.data)
  }

  confirm = async (productId: number, data: unknown) => {
    const res = await this.getHttp().post(`rents/${productId}/confirm`, data)
    return parseWithFallbackAsync(rentCheckoutSchema, res.data)
  }
}

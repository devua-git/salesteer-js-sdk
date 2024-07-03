import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { PaginateQueryParams } from '../../../utils/pagination'
import type { PlaceCreateRequest, PlaceUpdateRequest } from './place.types'
import { placePaginateSchema, placeSchema } from './place.types'

export class PlaceResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`places`, {
      params,
    })

    return parseWithFallbackAsync(placePaginateSchema, res.data)
  }

  create = async (req: PlaceCreateRequest) => {
    const res = await this.getHttp().post('place', req)
    return parseWithFallbackAsync(placeSchema, res.data)
  }

  update = async (req: { placeId: number; data: PlaceUpdateRequest }) => {
    const res = await this.getHttp().patch(`place/${req.placeId}`, req.data)
    return parseWithFallbackAsync(placeSchema, res.data)
  }

  drop = async (placeId: number) => {
    await this.getHttp().delete(`place/${placeId}`, {})
  }
}

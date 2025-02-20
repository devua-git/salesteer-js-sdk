import { BaseResource } from '../../../resource'
import type { PaginateQueryParams } from '../../../utils/pagination'
import { parseWithFallbackAsync } from '../../../utils/validation'
import {
  placeAutocompleteCreateResponseSchema,
  placeAutocompleteSchema,
  placePaginateSchema,
  placeSchema,
} from './place.types'
import type { PlaceCreateRequest, PlaceUpdateRequest } from './place.types'

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

  autocomplete = async (query: string) => {
    let data: unknown = []

    if (query) {
      const res = await this.getHttp().get(`places/autocomplete`, {
        params: {
          query,
        },
      })

      data = res.data
    }

    return parseWithFallbackAsync(
      placeAutocompleteSchema,
      data,
    )
  }

  autocompleteCreate = async (req: { placeId: string }) => {
    const res = await this.getHttp().post(`places/autocomplete/create`, {
      place_id: req.placeId,
    })

    return parseWithFallbackAsync(placeAutocompleteCreateResponseSchema, res.data)
  }
}

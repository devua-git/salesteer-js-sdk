import { useQuery, useQueryClient, useMutation } from '@tanstack/vue-query'
import { reactive, type Ref } from 'vue'
import type { PaginateQueryParams } from '@salesteer/core'
import { BaseResourceQueries } from '../../resource-queries'
import { QUERY_PREFIX } from '../../client'

export class RentQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'rents'] as const,
    details: () => [...this.keys.all(), 'detail'] as const,
    detail: (params: unknown) =>
      [...this.keys.all(), 'detail', params] as const,
    lists: () => [...this.keys.all(), 'lists'] as const,
    list: (params: unknown) => [this.keys.lists(), params] as const,
    availableProducts: (params: unknown) =>
      [...this.keys.all(), 'availableProducts', params] as const,
    productDetail: (params: unknown) =>
      [...this.keys.all(), 'rentDetail', params] as const,
  } as const

  list = (params?: Ref<PaginateQueryParams>) => {
    return useQuery({
      queryKey: RentQueries.keys.list(params),
      queryFn: () => this.getClient().rent.list(params?.value),
    })
  }

  customerRents =
    (customerId: Ref<number>) => (params?: Ref<PaginateQueryParams>) => {
      return useQuery({
        queryKey: RentQueries.keys.list([customerId, params]),
        queryFn: () =>
          this.getClient().rent.customerRents({
            customerId: customerId.value,
            params: params?.value,
          }),
      })
    }

  fetch = (id: Ref<number>) => {
    return useQuery({
      queryKey: RentQueries.keys.detail(id),
      queryFn: () => this.getClient().rent.fetch(id.value),
    })
  }

  availableProducts = (params: Ref<Date[]>) => {
    return useQuery({
      queryKey: RentQueries.keys.availableProducts(params),
      queryFn: () =>
        this.getClient().rent.availableProducts(
          params.value[0],
          params.value[1]
        ),
    })
  }

  productDetail = (productId: number, dateStart: Date, dateEnd: Date) => {
    return useQuery({
      queryKey: RentQueries.keys.productDetail([productId, dateStart, dateEnd]),
      queryFn: () =>
        this.getClient().rent.productDetail(productId, dateStart, dateEnd),
    })
  }

  confirm = (productId: number) => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: (data: unknown) =>
          this.getClient().rent.confirm(productId, data),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: RentQueries.keys.lists() })
        },
      })
    )
  }
}

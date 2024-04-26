import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'
import type { PaginateQueryParams } from '@salesteer/core'
import { BaseResourceQueries } from '../../resource-queries'
import { QUERY_PREFIX } from '../../client'

export class ProductListQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'product-lists'] as const,
    lists: () => [...this.keys.all(), 'list'] as const,
    list: (params: unknown) => [...this.keys.lists(), params] as const,
    products: () => [...this.keys.all(), 'product'] as const,
    product: (params: unknown) => [...this.keys.products(), params] as const,
  } as const

  useList = (params?: Ref<PaginateQueryParams>) => {
    return useQuery({
      queryKey: ProductListQueries.keys.list(params),
      queryFn: () => this.getClient().productList.list(params?.value),
    })
  }

  useProducts = (productListId: Ref<number>) => {
    return (params?: Ref<PaginateQueryParams>) =>
      useQuery({
        queryKey: ProductListQueries.keys.product([productListId, params]),
        queryFn: () =>
          this.getClient().productList.products({
            productListId: productListId.value,
            params: params?.value,
          }),
      })
  }
}

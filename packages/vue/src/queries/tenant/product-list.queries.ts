import type { PaginateQueryParams } from '@salesteer/core'
import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'
import { QUERY_PREFIX } from '../../client'
import { BaseResourceQueries } from '../../resource-queries'

export class ProductListQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'product-lists'] as const,
    lists: () => [...this.keys.all(), 'list'] as const,
    list: (params: unknown) => [...this.keys.lists(), params] as const,
    products: () => [...this.keys.all(), 'product'] as const,
    product: (params: unknown) => [...this.keys.products(), params] as const,
    categories: () => [...this.keys.all(), 'category'] as const,
    category: (params: unknown) => [...this.keys.categories(), params] as const,
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

  useCategories = (productListId: Ref<number>) =>
    useQuery({
      queryKey: ProductListQueries.keys.category(productListId),
      queryFn: () =>
        this.getClient().productList.categories({
          productListId: productListId.value,
        }),
    })
}

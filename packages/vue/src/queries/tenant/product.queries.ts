import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'
import type { PaginateQueryParams } from '@salesteer/core'
import { BaseResourceQueries } from '../../resource-queries'
import { QUERY_PREFIX } from '../../client'

export class ProductQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'products'] as const,
    lists: () => [...this.keys.all(), 'list'] as const,
    list: (params: unknown) => [...this.keys.lists(), params] as const,
  } as const

  useList = (params?: Ref<PaginateQueryParams>) => {
    return useQuery({
      queryKey: ProductQueries.keys.list(params),
      queryFn: () => this.getClient().product.list(params?.value),
    })
  }
}

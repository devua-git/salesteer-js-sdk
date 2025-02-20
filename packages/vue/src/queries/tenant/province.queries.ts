import type { PaginateQueryParams } from '@salesteer/core'
import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'
import { QUERY_PREFIX } from '../../client'
import { BaseResourceQueries } from '../../resource-queries'

export class ProvinceQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'provinces'] as const,
    lists: () => [...this.keys.all(), 'list'] as const,
    list: (params: unknown) => [...this.keys.lists(), params] as const,
  } as const

  useList = (params?: Ref<PaginateQueryParams>) => {
    return useQuery({
      queryKey: ProvinceQueries.keys.list(params),
      queryFn: () => this.getClient().province.list(params?.value),
    })
  }
}

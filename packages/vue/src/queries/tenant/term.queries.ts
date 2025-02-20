import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'
import { QUERY_PREFIX } from '../../client'
import { BaseResourceQueries } from '../../resource-queries'

export class TermQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'terms'] as const,
    bySlugs: () => [...this.keys.all(), 'bySlugs'] as const,
    bySlug: (params: unknown) => [...this.keys.bySlugs(), params] as const,
  } as const

  useFetchBySlug = (slug: Ref<string>) => {
    return useQuery({
      queryKey: TermQueries.keys.bySlug(slug),
      queryFn: () => this.getClient().term.fetch(slug.value),
    })
  }
}

import { useQuery } from '@tanstack/vue-query' 
import { BaseResourceQueries } from '../../resource-queries'
import { QUERY_PREFIX } from '../../client'

export class CompanyQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'companys'] as const,
    current: () => [...this.keys.all(), 'current'] as const,
  } as const

  useCurrent = () => {
    return useQuery({
      queryKey: CompanyQueries.keys.current(),
      queryFn: () => this.getClient().company.fetchCurrent(),
    })
  }
}

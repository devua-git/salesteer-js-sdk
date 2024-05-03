import { useQuery, useQueryClient, useMutation } from '@tanstack/vue-query'
import { reactive, type Ref } from 'vue'
import { BaseResourceQueries } from '../../resource-queries'
import { QUERY_PREFIX } from '../../client'

export class CartQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'carts'] as const,
    details: () => [...this.keys.all(), 'detail'] as const,
    detail: (params: unknown) => [...this.keys.details(), params] as const,
  } as const

  useFetch = (customerId: Ref<number>) => {
    return useQuery({
      queryKey: CartQueries.keys.detail(customerId),
      queryFn: () =>
        this.getClient().cart.fetch({ customer_id: customerId.value }),
    })
  }

  useSync = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().cart.sync,
        onSettled: (_, __, req) => {
          queryClient.invalidateQueries({
            queryKey: CartQueries.keys.detail(req.customer_id),
          })
        },
      })
    )
  }
}

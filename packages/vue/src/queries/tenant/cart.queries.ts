import { useQuery, useQueryClient, useMutation } from '@tanstack/vue-query'
import { reactive, type Ref } from 'vue'
import { BaseResourceQueries } from '../../resource-queries'
import { QUERY_PREFIX } from '../../client'

export class CartQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'carts'] as const,
    byCustomers: () => [...this.keys.all(), 'byCustomer'] as const,
    byCustomer: (params: unknown) =>
      [...this.keys.byCustomers(), params] as const,
    byAnonymous: (params: unknown) =>
      [...this.keys.all(), 'byAnonymous', params] as const,
  } as const

  useCustomerCarts = (customerId: Ref<number>) => {
    return useQuery({
      queryKey: CartQueries.keys.byCustomer(customerId),
      queryFn: () =>
        this.getClient().cart.customerCarts({ customer_id: customerId.value }),
    })
  }

  useAnonymous = (anonymousId: Ref<string>) => {
    return useQuery({
      queryKey: CartQueries.keys.byAnonymous(anonymousId),
      queryFn: () => this.getClient().cart.create({ customer_id: 0 }),
    })
  }

  useCreate = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().cart.create,
        onSuccess: (_, req) => {
          if ('customer_id' in req) {
            queryClient.invalidateQueries({
              queryKey: CartQueries.keys.byCustomers(),
            })
          }
          if ('anonymous_id' in req) {
            queryClient.invalidateQueries({
              queryKey: CartQueries.keys.byAnonymous(req.anonymous_id),
            })
          }
        },
      })
    )
  }

  useUpdate = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().cart.update,
        onSuccess: (_, req) => {
          queryClient.invalidateQueries({
            queryKey: CartQueries.keys.byCustomer(req.cart.customer_id),
          })
        },
      })
    )
  }

  useDrop = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().cart.drop,
        onSuccess: (_, req) => {
          queryClient.invalidateQueries({
            queryKey: CartQueries.keys.byCustomer(req.customer_id),
          })
        },
      })
    )
  }

  useSyncProducts = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().cart.syncProducts,
        onSuccess: (_, req) => {
          queryClient.invalidateQueries({
            queryKey: CartQueries.keys.byCustomer(req.cart.customer_id),
          })
        },
      })
    )
  }
}

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
  } as const

  useCustomerCarts = (customerId: Ref<number>) => {
    return useQuery({
      queryKey: CartQueries.keys.byCustomer(customerId),
      queryFn: () =>
        this.getClient().cart.customerCarts({ customer_id: customerId.value }),
    })
  }

  useCreate = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().cart.create,
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: CartQueries.keys.byCustomers(),
          })
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

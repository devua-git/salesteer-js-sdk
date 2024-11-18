import type { Cart } from '@salesteer/core'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { reactive, type Ref } from 'vue'
import { QUERY_PREFIX } from '../../client'
import { BaseResourceQueries } from '../../resource-queries'

export class CartQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'carts'] as const,
    byCustomers: () => [...this.keys.all(), 'byCustomer'] as const,
    byCustomer: (params: unknown) =>
      [...this.keys.byCustomers(), params] as const,
    byAnonymous: (params: unknown) =>
      [...this.keys.all(), 'byAnonymous', params] as const,
  } as const

  customerCarts = (customerId: Ref<number>) => {
    return useQuery({
      queryKey: CartQueries.keys.byCustomer(customerId),
      queryFn: () =>
        this.getClient().cart.customerCarts({ customer_id: customerId.value }),
    })
  }

  anonymous = (anonymousId: Ref<string>) => {
    return useQuery({
      queryKey: CartQueries.keys.byAnonymous(anonymousId),
      queryFn: () =>
        this.getClient().cart.create({ anonymous_id: anonymousId.value }),
    })
  }

  create = () => {
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

  update = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().cart.update,
        onMutate: async (req) => {
          if (!req.cart.anonymous_id) {
            return
          }

          await queryClient.cancelQueries({
            queryKey: CartQueries.keys.byAnonymous(req.cart.anonymous_id),
          })

          const previousCart = queryClient.getQueryData(
            CartQueries.keys.byAnonymous(req.cart.anonymous_id)
          )

          queryClient.setQueryData(
            CartQueries.keys.byAnonymous(req.cart.anonymous_id),
            (old: Cart) => ({ ...old, ...req.data })
          )

          return { previousCart }
        },
        onError: (err, req, context) => {
          if (!context?.previousCart) {
            return
          }
          queryClient.setQueryData(
            CartQueries.keys.byAnonymous(req.cart.anonymous_id),
            context.previousCart
          )
        },
        onSettled: () => {
          queryClient.invalidateQueries({
            queryKey: CartQueries.keys.all(),
          })
        },
      })
    )
  }

  drop = () => {
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

  syncProducts = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().cart.syncProducts,
        onSuccess: (_, req) => {
          queryClient.invalidateQueries({
            queryKey: CartQueries.keys.all(),
          })
        },
      })
    )
  }

  setAddress = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().cart.setAddress,
        onSuccess: (_, req) => {
          queryClient.invalidateQueries({
            queryKey: CartQueries.keys.all(),
          })
        },
      })
    )
  }
}

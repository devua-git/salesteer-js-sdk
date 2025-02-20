import type { PaginateQueryParams } from '@salesteer/core'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { reactive, type Ref } from 'vue'
import { QUERY_PREFIX } from '../../client'
import { BaseResourceQueries } from '../../resource-queries'
import { UserQueries } from './user.queries'

export class CustomerQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'customers'] as const,
    lists: () => [...this.keys.all(), 'list'] as const,
    list: (params: unknown) => [...this.keys.lists(), params] as const,
    details: () => [...this.keys.all(), 'detail'] as const,
    detail: (id: number) => [...this.keys.details(), id] as const,
  } as const

  useList = (params?: Ref<PaginateQueryParams>) => {
    return useQuery({
      queryKey: CustomerQueries.keys.list(params),
      queryFn: () => this.getClient().customer.list(params?.value),
    })
  }

  useCreate = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().customer.create,
        onSuccess: (customer) => {
          queryClient.invalidateQueries({
            queryKey: CustomerQueries.keys.lists(),
          })
          queryClient.invalidateQueries({
            queryKey: UserQueries.keys.managedCustomers(),
          })

          queryClient.setQueryData(
            CustomerQueries.keys.detail(customer.id),
            customer,
          )
          queryClient.invalidateQueries({
            queryKey: CustomerQueries.keys.detail(customer.id),
          })
        },
      }),
    )
  }

  useUpdate = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().customer.update,
        onSuccess: (customer) => {
          queryClient.invalidateQueries({
            queryKey: CustomerQueries.keys.lists(),
          })
          queryClient.invalidateQueries({
            queryKey: UserQueries.keys.managedCustomers(),
          })

          queryClient.setQueryData(
            CustomerQueries.keys.detail(customer.id),
            customer,
          )
          queryClient.invalidateQueries({
            queryKey: CustomerQueries.keys.detail(customer.id),
          })
        },
      }),
    )
  }
}

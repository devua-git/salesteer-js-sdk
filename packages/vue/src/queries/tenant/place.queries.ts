import { useQuery, useQueryClient, useMutation } from '@tanstack/vue-query'
import { reactive, type Ref } from 'vue'
import type { PaginateQueryParams } from '@salesteer/core'
import { BaseResourceQueries } from '../../resource-queries'
import { QUERY_PREFIX } from '../../client'
import { UserQueries } from './user.queries'

export class PlaceQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'places'] as const,
    lists: () => [...this.keys.all(), 'list'] as const,
    list: (params: unknown) => [...this.keys.lists(), params] as const,
  } as const

  useList = (params?: Ref<PaginateQueryParams>) => {
    return useQuery({
      queryKey: PlaceQueries.keys.list(params),
      queryFn: () => this.getClient().place.list(params?.value),
    })
  }

  useCreate = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().place.create,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: PlaceQueries.keys.lists() })
          queryClient.invalidateQueries({
            queryKey: UserQueries.keys.managedCustomers(),
          })

          //TODO
          // queryClient.invalidateQueries({
          //   queryKey: CustomerService.keys.detail(place.placeable_id),
          // })
          // queryClient.invalidateQueries({
          //   queryKey: personQueryKeys.detail(place.placeable_id),
          // })
        },
      })
    )
  }

  useUpdate = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().place.update,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: PlaceQueries.keys.lists() })
          queryClient.invalidateQueries({
            queryKey: UserQueries.keys.managedCustomers(),
          })

          //TODO
          // queryClient.invalidateQueries({
          //   queryKey: CustomerService.keys.detail(place.placeable_id),
          // })
          // queryClient.invalidateQueries({
          //   queryKey: personQueryKeys.detail(place.placeable_id),
          // })
        },
      })
    )
  }

  useDrop = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().place.drop,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: PlaceQueries.keys.lists() })
          queryClient.invalidateQueries({
            queryKey: UserQueries.keys.managedCustomers(),
          })

          //TODO
          // queryClient.invalidateQueries({
          //   queryKey: CustomerService.keys.detail(place.placeable_id),
          // })
          // queryClient.invalidateQueries({
          //   queryKey: personQueryKeys.detail(place.placeable_id),
          // })
        },
      })
    )
  }
}

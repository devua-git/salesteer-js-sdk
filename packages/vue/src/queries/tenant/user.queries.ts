import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { reactive, type Ref } from 'vue'
import { BaseResourceQueries } from '../../resource-queries'
import { QUERY_PREFIX } from '../../client'

export class UserQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'users'] as const,
    me: () => [...this.keys.all(), 'me'] as const,

    managedCustomers: () => [...this.keys.all(), 'managedCustomers'] as const,
    managedCustomer: (params: unknown) =>
      [...this.keys.managedCustomers(), params] as const,
  } as const

  useMe = () => {
    return useQuery({
      queryKey: UserQueries.keys.me(),
      queryFn: () => this.getClient().user.me(),
    })
  }

  useManagedCustomers = (userId: Ref<number>) => {
    return useQuery({
      queryKey: UserQueries.keys.managedCustomer(userId),
      queryFn: () => this.getClient().user.managedCustomers(userId.value),
    })
  }

  useRegister = () => {
    return reactive(
      useMutation({
        mutationFn: this.getClient().user.register,
      })
    )
  }

  useSignIn = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().user.signIn,
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: UserQueries.keys.me(),
          })
        },
      })
    )
  }

  useSignOut = () => {
    const queryClient = useQueryClient()

    return reactive(
      useMutation({
        mutationFn: this.getClient().user.signOut,
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: UserQueries.keys.me(),
          })
        },
      })
    )
  }

  usePasswordReset = () => {
    return reactive(
      useMutation({
        mutationFn: this.getClient().user.passwordReset,
      })
    )
  }

  usePasswordForgot = () => {
    return reactive(
      useMutation({
        mutationFn: this.getClient().user.passwordForgot,
      })
    )
  }
}

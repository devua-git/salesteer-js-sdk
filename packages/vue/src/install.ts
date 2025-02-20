import { isHttpErrors, SalesteerClient, type SalesteerClientConfigs } from '@salesteer/core'
import { persistQueryClient } from '@tanstack/query-persist-client-core'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import { inject, type App } from 'vue'
import type { SalesteerQueryClientConfigs } from './client'
import { SalesteerQueryClient } from './client'
import { SALESTEER_CLIENT_KEY } from './hooks/useSalesteerClient'
import { SALESTEER_QUERY_CLIENT_KEY } from './hooks/useSalesteerQueryClient'
import { VUE_QUERY_CLIENT, VueQueryPlugin } from '@tanstack/vue-query'

export type VueSalesteerPluginOptions = {
  client?: SalesteerClientConfigs
  queryClient?: Omit<SalesteerQueryClientConfigs, 'client'>
  query?: {
    staleTime?: number
    gcTime?: number
  }
}

export const VueSalesteerPlugin = {
  install: (app: App, options?: VueSalesteerPluginOptions): void => {
    const defaultClient = new SalesteerClient(options?.client)

    const defaultQueryClient = new SalesteerQueryClient({
      client: defaultClient,
      ...options?.queryClient
    })

    app.provide(SALESTEER_CLIENT_KEY, defaultClient)
    app.provide(SALESTEER_QUERY_CLIENT_KEY, defaultQueryClient)

    setTimeout(() => {
      const isPiniaInjected = app.config.globalProperties.$pinia != null
      if (isPiniaInjected == false) {
        const pinia = createPinia()
        pinia.use(piniaPersist)
        app.use(pinia)
      }

      const isVueQueryInjected = app.runWithContext(() => inject(VUE_QUERY_CLIENT) != null)
      if (isVueQueryInjected == false) {
        app.use(VueQueryPlugin, {
          queryClientConfig: {
            defaultOptions: {
              queries: {
                staleTime: options?.query?.staleTime ?? 1000,
                gcTime: options?.query?.gcTime ?? 1000 ,

                retry: (failureCount: number, error: unknown) => {
                  return (
                    isHttpErrors(error) == false
                    || (isHttpErrors(error) && [500].includes(error.status))
                  )
                },
                retryDelay: (failureCount: number) => Math.min(1000 * 2 ** failureCount, 30000),
              },
            },
          },
          clientPersister: (queryClient) => {
            return persistQueryClient({
              queryClient,
              persister: createSyncStoragePersister({
                storage: localStorage,
              }),
            })
          },
        })
      }
    }, 0)
  },
}

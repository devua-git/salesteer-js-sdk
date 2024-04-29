import { SalesteerClient, type SalesteerClientConfigs } from '@salesteer/core'
import { type App } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import type { SalesteerQueryClientConfigs } from './client'
import { SalesteerQueryClient } from './client'
import { SALESTEER_CLIENT_KEY } from './hooks/useSalesteerClient'
import { SALESTEER_QUERY_CLIENT_KEY } from './hooks/useSalesteerQueryClient'

export type VueSalesteerPluginOptions = {
  client?: SalesteerClientConfigs
  queryClient?: Omit<SalesteerQueryClientConfigs, 'client'>
}

export const VueSalesteerPlugin = {
  install: (app: App, options?: VueSalesteerPluginOptions): void => {
    const defaultClient = new SalesteerClient(options?.client)

    const defaultQueryClient = new SalesteerQueryClient({
      client: defaultClient,
      ...options?.queryClient,
    })

    app.provide(SALESTEER_CLIENT_KEY, defaultClient)
    app.provide(SALESTEER_QUERY_CLIENT_KEY, defaultQueryClient)

    const pinia = createPinia()
    pinia.use(piniaPersist)

    app.use(pinia)
  },
}

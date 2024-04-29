import { VueSalesteerPlugin } from '@salesteer/vue'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const configs = useRuntimeConfig() as any

  nuxtApp.vueApp.use(VueSalesteerPlugin, configs?.public?.salesteer)
})

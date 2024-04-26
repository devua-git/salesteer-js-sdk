/**
 * @module @salesteer/vue
 */

import SalesteerAuthProvider from './providers/SalesteerAuthProvider.vue'

export * from '@salesteer/core'

export { VueSalesteerPlugin, type VueSalesteerPluginOptions } from './install'
export { type SalesteerQueryClientConfigs } from './client'
export { useSalesteerAuth } from './hooks/useSalesteerAuth'
export { useSalesteerClient } from './hooks/useSalesteerClient'

export { SalesteerAuthProvider }

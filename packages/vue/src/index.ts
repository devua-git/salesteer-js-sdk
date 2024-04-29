/**
 * @module @salesteer/vue
 */

import SalesteerAuthProvider from './providers/SalesteerAuthProvider.vue'
import SalesteerAuthenticatedUserProvider from './providers/SalesteerAuthenticatedUserProvider.vue'
import SalesteerAuthLayout from './providers/SalesteerAuthLayout.vue'

export * from '@salesteer/core'

export { VueSalesteerPlugin, type VueSalesteerPluginOptions } from './install'
export { type SalesteerQueryClientConfigs } from './client'
export { useSalesteerAuth } from './hooks/useSalesteerAuth'
export { useSalesteerClient } from './hooks/useSalesteerClient'

export {
  SalesteerAuthProvider,
  SalesteerAuthenticatedUserProvider,
  SalesteerAuthLayout,
}

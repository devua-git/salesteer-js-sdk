/**
 * @module @salesteer/vue
 */

import SalesteerAuthProvider from './providers/SalesteerAuthProvider.vue'
import SalesteerAuthenticatedUserProvider from './providers/SalesteerAuthenticatedUserProvider.vue'
import SalesteerAuthLayout from './providers/SalesteerAuthLayout.vue'

export { VueSalesteerPlugin, type VueSalesteerPluginOptions } from './install'
export { type SalesteerQueryClientConfigs } from './client'
export { useSalesteerAuth } from './hooks/useSalesteerAuth'
export { useSalesteerUser } from './hooks/useSalesteerUser'
export { useSalesteerClient } from './hooks/useSalesteerClient'
export { useSalesteerQueryClient } from './hooks/useSalesteerQueryClient'

export { useSalesteerAuthStore } from './stores/auth.store'

export {
  SalesteerAuthProvider,
  SalesteerAuthenticatedUserProvider,
  SalesteerAuthLayout,
}

export * from '@salesteer/core'

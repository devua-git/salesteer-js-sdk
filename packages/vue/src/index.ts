/**
 * @module @salesteer/vue
 */

import SalesteerProvider from './providers/SalesteerProvider.vue'
import SalesteerAuthLayout from './providers/SalesteerAuthLayout.vue'
import SalesteerAuthProvider from './providers/SalesteerAuthProvider.vue'
import SalesteerCompanyProvider from './providers/SalesteerCompanyProvider.vue'
import SalesteerAuthenticatedUserProvider from './providers/SalesteerAuthenticatedUserProvider.vue'

export { type SalesteerQueryClientConfigs } from './client'
export { useSalesteerAuth } from './hooks/useSalesteerAuth'
export { useSalesteerClient } from './hooks/useSalesteerClient'
export { useSalesteerCurrentCompany } from './hooks/useSalesteerCurrentCompany'
export { useSalesteerQueryClient } from './hooks/useSalesteerQueryClient'
export { useSalesteerUser } from './hooks/useSalesteerUser'
export { VueSalesteerPlugin, type VueSalesteerPluginOptions } from './install'

export { useSalesteerAuthStore } from './stores/auth.store'
export { SalesteerQueryKeys } from './query-keys'

export { SalesteerAuthenticatedUserProvider, SalesteerAuthLayout, SalesteerAuthProvider, SalesteerCompanyProvider, SalesteerProvider }

export * from '@salesteer/core'

/**
 * @module @salesteer/vue
 */

import SalesteerAuthenticatedUserProvider from './providers/SalesteerAuthenticatedUserProvider.vue'
import SalesteerAuthLayout from './providers/SalesteerAuthLayout.vue'
import SalesteerAuthProvider from './providers/SalesteerAuthProvider.vue'
import SalesteerCompanyProvider from './providers/SalesteerCompanyProvider.vue'

export { type SalesteerQueryClientConfigs } from './client'
export { useSalesteerAuth } from './hooks/useSalesteerAuth'
export { useSalesteerClient } from './hooks/useSalesteerClient'
export { useSalesteerCurrentCompany } from './hooks/useSalesteerCurrentCompany'
export { useSalesteerQueryClient } from './hooks/useSalesteerQueryClient'
export { useSalesteerUser } from './hooks/useSalesteerUser'
export { VueSalesteerPlugin, type VueSalesteerPluginOptions } from './install'

export { useSalesteerAuthStore } from './stores/auth.store'

export { SalesteerAuthenticatedUserProvider, SalesteerAuthLayout, SalesteerAuthProvider, SalesteerCompanyProvider }

export * from '@salesteer/core'

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

export {
  SalesteerClient,
  type SalesteerClientConfigs,
  EntityName,
  type PaginateQueryParams,
  type PaginateResult,
  type QueryFilter,
  getValidQueryFilters,
  isValidQueryFilter,
  isHttpErrors,
  type Customer,
  type CustomerCreateRequest,
  CustomerType,
  type CustomerUpdateRequest,
  type UserManagedCustomer,
  UserManagedCustomerRole,
  type Place,
  type PlaceCreateRequest,
  type PlaceUpdateRequest,
  type Product,
  type ProductList,
  type ProductListProduct,
  type ProductCategory,
  type ProductCategoryTreeNode,
  type Country,
  type State,
  type Province,
  type City,
  type User,
  type Cart,
  type CartSyncRequest,
} from '@salesteer/core'

/**
 * @module @salesteer/js
 */
export { SalesteerClient, type SalesteerClientConfigs } from './client'

export { EntityName } from './utils/morphables'
export * from './utils/pagination'
export * from './utils/types'

export {
  isHttpErrors,
  type HttpErrors,
  hasFieldErrors,
  type HttpClientConfigs,
} from './utils/http'

export {
  type Customer,
  type UserManagedCustomer,
  type CustomerCreateRequest,
  type CustomerUpdateRequest,
  CustomerType,
  UserManagedCustomerRole,
} from './resources/tenant/customer/customer.types'
export type {
  Place,
  PlaceCreateRequest,
  PlaceUpdateRequest,
} from './resources/tenant/place/place.types'
export type { Product } from './resources/tenant/product/product.types'
export type {
  ProductList,
  ProductListProduct,
  InProductListProduct,
} from './resources/tenant/product-list/product-list.types'
export type {
  ProductCategory,
  ProductCategoryTreeNode,
} from './resources/tenant/product-category/product-category.types'

export type { Country } from './resources/tenant/country/country.types'
export type { State } from './resources/tenant/state/state.types'
export type { Province } from './resources/tenant/province/province.types'
export type { City } from './resources/tenant/city/city.types'

export type { User } from './resources/tenant/user/user.types'

export type { Cart, CartSyncRequest } from './resources/tenant/cart/cart.types'

export type {
  Rent,
  RentProductDetail,
} from './resources/tenant/rent/rent.types'

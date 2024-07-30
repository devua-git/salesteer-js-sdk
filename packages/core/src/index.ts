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
  parseWithFallback,
  parseWithFallbackAsync,
  makePaginateSchema,
  makeCursorPaginateSchema,
} from './utils/validation'

export {
  customerSchema,
  type Customer,
  type UserManagedCustomer,
  type CustomerCreateRequest,
  type CustomerUpdateRequest,
  CustomerType,
  UserManagedCustomerRole,
} from './resources/tenant/customer/customer.types'
export type {
  placeSchema,
  Place,
  PlaceCreateRequest,
  PlaceUpdateRequest,
} from './resources/tenant/place/place.types'
export {
  productSchema,
  type Product,
} from './resources/tenant/product/product.types'
export {
  productListSchema,
  type ProductList,
  type ProductListProduct,
  type InProductListProduct,
} from './resources/tenant/product-list/product-list.types'
export {
  productCategorySchema,
  type ProductCategory,
  type ProductCategoryTreeNode,
} from './resources/tenant/product-category/product-category.types'

export {
  countrySchema,
  type Country,
} from './resources/tenant/country/country.types'
export { stateSchema, type State } from './resources/tenant/state/state.types'
export {
  provinceSchema,
  type Province,
} from './resources/tenant/province/province.types'
export { citySchema, type City } from './resources/tenant/city/city.types'

export { userSchema, type User } from './resources/tenant/user/user.types'

export {
  cartSchema,
  type Cart,
  type CartSyncRequest,
} from './resources/tenant/cart/cart.types'

export { offerSchema, type Offer } from './resources/tenant/offer/offer.types'
export { orderSchema, type Order } from './resources/tenant/order/order.types'

export { taxSchema, type Tax } from './resources/tenant/tax/tax.types'
export {
  computeNonCumulativeTaxes,
  computeNonCumulativeTaxedPrice,
} from './resources/tenant/tax/tax.utils'

export type {
  rentSchema,
  Rent,
  rentProductDetailSchema,
  RentProductDetail,
} from './resources/tenant/rent/rent.types'

/**
 * @module @salesteer/js
 */
export { SalesteerClient, type SalesteerClientConfigs } from './client'

export { EntityName } from './utils/morphables'
export * from './utils/pagination'
export * from './utils/types'

export { hasFieldErrors, type HttpClientConfigs, type HttpErrors, isHttpErrors } from './utils/http'

export {
  makeCursorPaginateSchema,
  makePaginateSchema,
  parseWithFallback,
  parseWithFallbackAsync,
} from './utils/validation'

export {
  type Customer,
  type CustomerCreateRequest,
  customerSchema,
  CustomerType,
  type CustomerUpdateRequest,
  type UserManagedCustomer,
  UserManagedCustomerRole,
} from './resources/tenant/customer/customer.types'
export type {
  Place,
  PlaceAutocompleteCreateResponse,
  PlaceCreateRequest,
  placeSchema,
  PlaceUpdateRequest,
} from './resources/tenant/place/place.types'
export {
  type ProductCategory,
  productCategorySchema,
  type ProductCategoryTreeNode,
} from './resources/tenant/product-category/product-category.types'
export {
  type InProductListProduct,
  type ProductList,
  type ProductListProduct,
  productListSchema,
} from './resources/tenant/product-list/product-list.types'
export { type Product, productSchema } from './resources/tenant/product/product.types'

export { type City, citySchema } from './resources/tenant/city/city.types'
export { type Country, countrySchema } from './resources/tenant/country/country.types'
export { type Province, provinceSchema } from './resources/tenant/province/province.types'
export { type State, stateSchema } from './resources/tenant/state/state.types'

export { type User, userSchema } from './resources/tenant/user/user.types'

export { type Cart, cartSchema, type CartSyncRequest } from './resources/tenant/cart/cart.types'

export { type Offer, offerSchema } from './resources/tenant/offer/offer.types'
export { type Order, orderSchema } from './resources/tenant/order/order.types'

export {
  type Term,
  type TermAcceptance,
  termAcceptanceSchema,
  termSchema,
  type TermWithAcceptances,
  termWithAcceptancesSchema,
} from './resources/tenant/term/term.types'

export {
  type Company,
  companySchema,
  type CurrentCompanyData,
  currentCompanyDataSchema,
  type Tenant,
  tenantSchema,
} from './resources/tenant/company/company.types'

export { SaleType, type Tax, taxSchema } from './resources/tenant/tax/tax.types'
export { computeNonCumulativeTaxedPrice, computeNonCumulativeTaxes } from './resources/tenant/tax/tax.utils'

export type { Rent, RentProductDetail, rentProductDetailSchema, rentSchema } from './resources/tenant/rent/rent.types'

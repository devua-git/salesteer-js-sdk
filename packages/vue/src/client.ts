import type { SalesteerClient } from '@salesteer/core'
import { CustomerQueries } from './queries/tenant/customer.queries'
import { UserQueries } from './queries/tenant/user.queries'
import { PlaceQueries } from './queries/tenant/place.queries'
import { ProductQueries } from './queries/tenant/product.queries'
import { ProductListQueries } from './queries/tenant/product-list.queries'
import { CityQueries } from './queries/tenant/city.queries'
import { StateQueries } from './queries/tenant/state.queries'
import { CountryQueries } from './queries/tenant/country.queries'
import { ProvinceQueries } from './queries/tenant/province.queries'
import { CartQueries } from './queries/tenant/cart.queries'

export type SalesteerQueryClientConfigs = {
  client: SalesteerClient
}

export const QUERY_PREFIX = 'salesteer-query'

export class SalesteerQueryClient {
  #client: SalesteerClient

  public customer: CustomerQueries
  public user: UserQueries
  public place: PlaceQueries
  public product: ProductQueries
  public productList: ProductListQueries

  public cart: CartQueries

  public city: CityQueries
  public state: StateQueries
  public country: CountryQueries
  public province: ProvinceQueries

  constructor(config: SalesteerQueryClientConfigs) {
    this.#client = config.client

    this.customer = new CustomerQueries(this)
    this.user = new UserQueries(this)
    this.place = new PlaceQueries(this)
    this.product = new ProductQueries(this)
    this.productList = new ProductListQueries(this)

    this.cart = new CartQueries(this)

    this.city = new CityQueries(this)
    this.state = new StateQueries(this)
    this.country = new CountryQueries(this)
    this.province = new ProvinceQueries(this)
  }

  getClient() {
    return this.#client
  }
}

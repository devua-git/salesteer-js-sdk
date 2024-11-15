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
import { RentQueries } from './queries/tenant/rent.queries'
import { TermQueries } from './queries/tenant/term.queries'
import { CompanyQueries } from './queries/tenant/company.queries'
import { PaymentQueries } from './queries/tenant/payments.queries'

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
  public payment: PaymentQueries

  public rent: RentQueries
  public term: TermQueries
  public company: CompanyQueries

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
    this.payment = new PaymentQueries(this)

    this.rent = new RentQueries(this)
    this.term = new TermQueries(this)
    this.company = new CompanyQueries(this)
  }

  getClient() {
    return this.#client
  }
}

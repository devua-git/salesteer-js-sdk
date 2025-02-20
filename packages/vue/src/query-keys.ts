import type { SalesteerClient } from '@salesteer/core'
import { CartQueries } from './queries/tenant/cart.queries'
import { CityQueries } from './queries/tenant/city.queries'
import { CompanyQueries } from './queries/tenant/company.queries'
import { CountryQueries } from './queries/tenant/country.queries'
import { CustomerQueries } from './queries/tenant/customer.queries'
import { PaymentQueries } from './queries/tenant/payments.queries'
import { PlaceQueries } from './queries/tenant/place.queries'
import { ProductListQueries } from './queries/tenant/product-list.queries'
import { ProductQueries } from './queries/tenant/product.queries'
import { ProvinceQueries } from './queries/tenant/province.queries'
import { RentQueries } from './queries/tenant/rent.queries'
import { StateQueries } from './queries/tenant/state.queries'
import { TermQueries } from './queries/tenant/term.queries'
import { UserQueries } from './queries/tenant/user.queries'

export class SalesteerQueryKeys {
  static customer=CustomerQueries.keys
  static user=UserQueries.keys
  static place=PlaceQueries.keys
  static product=ProductQueries.keys
  static productList=ProductListQueries.keys
  static cart=CartQueries.keys
  static city=CityQueries.keys
  static state=StateQueries.keys
  static country=CountryQueries.keys
  static province=ProvinceQueries.keys
  static payment=PaymentQueries.keys
  static rent=RentQueries.keys
  static term=TermQueries.keys
  static company=CompanyQueries.keys
}

import { CartResource } from './resources/tenant/cart/cart.resource'
import { CityResource } from './resources/tenant/city/city.resource'
import { CompanyResource } from './resources/tenant/company/company.resource'
import { CountryResource } from './resources/tenant/country/country.resource'
import { CustomerResource } from './resources/tenant/customer/customer.resource'
import { PaymentResource } from './resources/tenant/payment/payment.resource'
import { PlaceResource } from './resources/tenant/place/place.resource'
import { ProductListResource } from './resources/tenant/product-list/product-list.resource'
import { ProductResource } from './resources/tenant/product/product.resource'
import { ProvinceResource } from './resources/tenant/province/province.resource'
import { RentResource } from './resources/tenant/rent/rent.resource'
import { StateResource } from './resources/tenant/state/state.resource'
import { TermResource } from './resources/tenant/term/term.resource'
import { UserResource } from './resources/tenant/user/user.resource'
import { HttpClient } from './utils/http'

export type SalesteerClientConfigs = {
  endpoint?: string
  clientType?: 'spa' | 'api'
  tenantDomain?: string
}

export class SalesteerClient {
  #http: HttpClient

  public customer: CustomerResource
  public user: UserResource
  public place: PlaceResource
  public product: ProductResource
  public productList: ProductListResource

  public cart: CartResource

  public city: CityResource
  public state: StateResource
  public country: CountryResource
  public province: ProvinceResource
  public payment: PaymentResource

  public rent: RentResource
  public term: TermResource
  public company: CompanyResource

  constructor(config?: SalesteerClientConfigs) {
    this.#http = new HttpClient({
      endpoint: config?.endpoint,
      clientType: config?.clientType,
      tenantDomain: config?.tenantDomain,
    })

    this.customer = new CustomerResource(this)
    this.user = new UserResource(this)
    this.place = new PlaceResource(this)
    this.product = new ProductResource(this)
    this.productList = new ProductListResource(this)

    this.cart = new CartResource(this)

    this.city = new CityResource(this)
    this.state = new StateResource(this)
    this.country = new CountryResource(this)
    this.province = new ProvinceResource(this)
    this.payment = new PaymentResource(this)

    this.rent = new RentResource(this)
    this.term = new TermResource(this)
    this.company = new CompanyResource(this)
  }

  getHttp = () => {
    return this.#http
  }
}

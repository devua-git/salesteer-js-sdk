import { HttpClient } from './utils/http'
import { UserResource } from './resources/tenant/user/user.resource'
import { ProductListResource } from './resources/tenant/product-list/product-list.resource'
import { ProductResource } from './resources/tenant/product/product.resource'
import { CustomerResource } from './resources/tenant/customer/customer.resource'
import { PlaceResource } from './resources/tenant/place/place.resource'
import { CountryResource } from './resources/tenant/country/country.resource'
import { StateResource } from './resources/tenant/state/state.resource'
import { ProvinceResource } from './resources/tenant/province/province.resource'
import { CityResource } from './resources/tenant/city/city.resource'

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

  public city: CityResource
  public state: StateResource
  public country: CountryResource
  public province: ProvinceResource

  constructor(config?: SalesteerClientConfigs) {
    this.#http = new HttpClient({
      clientType: config?.clientType,
      tenantDomain: config?.tenantDomain,
    })

    this.customer = new CustomerResource(this)
    this.user = new UserResource(this)
    this.place = new PlaceResource(this)
    this.product = new ProductResource(this)
    this.productList = new ProductListResource(this)

    this.city = new CityResource(this)
    this.state = new StateResource(this)
    this.country = new CountryResource(this)
    this.province = new ProvinceResource(this)
  }

  getHttp = () => {
    return this.#http
  }
}

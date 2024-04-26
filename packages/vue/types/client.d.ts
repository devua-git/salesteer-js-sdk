import type { SalesteerClient } from '@salesteer/core';
import { CustomerQueries } from './queries/tenant/customer.queries';
import { UserQueries } from './queries/tenant/user.queries';
import { PlaceQueries } from './queries/tenant/place.queries';
import { ProductQueries } from './queries/tenant/product.queries';
import { ProductListQueries } from './queries/tenant/product-list.queries';
import { CityQueries } from './queries/tenant/city.queries';
import { StateQueries } from './queries/tenant/state.queries';
import { CountryQueries } from './queries/tenant/country.queries';
import { ProvinceQueries } from './queries/tenant/province.queries';
export type SalesteerQueryClientConfigs = {
    client: SalesteerClient;
};
export declare const QUERY_PREFIX = "salesteer-query";
export declare class SalesteerQueryClient {
    #private;
    customer: CustomerQueries;
    user: UserQueries;
    place: PlaceQueries;
    product: ProductQueries;
    productList: ProductListQueries;
    city: CityQueries;
    state: StateQueries;
    country: CountryQueries;
    province: ProvinceQueries;
    constructor(config: SalesteerQueryClientConfigs);
    getClient(): SalesteerClient;
}

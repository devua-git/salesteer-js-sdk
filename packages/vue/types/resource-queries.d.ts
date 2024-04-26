import type { SalesteerQueryClient } from './client';
export declare abstract class BaseResourceQueries {
    #private;
    constructor(queryClient: SalesteerQueryClient);
    getClient: () => import("@salesteer/core").SalesteerClient;
    getQueryClient: () => SalesteerQueryClient;
}

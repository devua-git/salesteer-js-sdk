import type { Ref } from 'vue';
import type { PaginateQueryParams } from '@salesteer/core';
import { BaseResourceQueries } from '../../resource-queries';
export declare class CountryQueries extends BaseResourceQueries {
    static keys: {
        readonly all: () => readonly ["salesteer-query", "countries"];
        readonly lists: () => readonly ["salesteer-query", "countries", "list"];
        readonly list: (params: unknown) => readonly ["salesteer-query", "countries", "list", unknown];
    };
    useList: (params?: Ref<PaginateQueryParams>) => import("@tanstack/vue-query").UseQueryReturnType<{
        path: string;
        data: {
            code: string;
            id: number;
            name: string;
        }[];
        total: number;
        per_page: number;
        current_page: number;
        last_page: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string | null;
        prev_page_url: string | null;
        from: number;
        to: number;
        columns?: string[] | undefined;
        orderables?: string[] | undefined;
    }, Error>;
}

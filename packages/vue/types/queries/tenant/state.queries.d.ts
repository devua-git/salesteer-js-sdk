import type { Ref } from 'vue';
import type { PaginateQueryParams } from '@salesteer/core';
import { BaseResourceQueries } from '../../resource-queries';
export declare class StateQueries extends BaseResourceQueries {
    static keys: {
        readonly all: () => readonly ["salesteer-query", "states"];
        readonly lists: () => readonly ["salesteer-query", "states", "list"];
        readonly list: (params: unknown) => readonly ["salesteer-query", "states", "list", unknown];
    };
    useList: (params?: Ref<PaginateQueryParams>) => import("@tanstack/vue-query").UseQueryReturnType<{
        path: string;
        data: {
            id: number;
            name: string;
            country_id: number;
            country?: {
                code: string;
                id: number;
                name: string;
            } | undefined;
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

import type { Ref } from 'vue';
import type { PaginateQueryParams } from '@salesteer/core';
import { BaseResourceQueries } from '../../resource-queries';
export declare class ProductQueries extends BaseResourceQueries {
    static keys: {
        readonly all: () => readonly ["salesteer-query", "products"];
        readonly lists: () => readonly ["salesteer-query", "products", "list"];
        readonly list: (params: unknown) => readonly ["salesteer-query", "products", "list", unknown];
    };
    useList: (params?: Ref<PaginateQueryParams>) => import("@tanstack/vue-query").UseQueryReturnType<{
        path: string;
        data: {
            id: number;
            name: string;
            description: string | null;
            price: number;
            obsolete: boolean;
            vat_type_id: number;
            vat_type: {
                value: number;
                id: number;
                name: string;
                default: boolean;
            };
            unit_measure_id: number;
            metadata: Record<string, string> | null;
            supplier?: string | null | undefined;
            product_code?: string | undefined;
            producer?: string | null | undefined;
            total_quantity?: number | undefined;
            image?: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null | undefined;
            product_category_id?: number | null | undefined;
            product_category?: {
                id: number;
                name: string;
                parent_id: number | null;
                parent?: unknown;
                nested_parent?: unknown;
            } | null | undefined;
            unit_measure?: {
                symbol: string;
                id: number;
                name: string;
                default: boolean;
                precision: number;
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

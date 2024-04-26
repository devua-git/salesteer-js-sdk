import type { Ref } from 'vue';
import type { PaginateQueryParams } from '@salesteer/core';
import { BaseResourceQueries } from '../../resource-queries';
export declare class ProductListQueries extends BaseResourceQueries {
    static keys: {
        readonly all: () => readonly ["salesteer-query", "product-lists"];
        readonly lists: () => readonly ["salesteer-query", "product-lists", "list"];
        readonly list: (params: unknown) => readonly ["salesteer-query", "product-lists", "list", unknown];
        readonly products: () => readonly ["salesteer-query", "product-lists", "product"];
        readonly product: (params: unknown) => readonly ["salesteer-query", "product-lists", "product", unknown];
    };
    useList: (params?: Ref<PaginateQueryParams>) => import("@tanstack/vue-query").UseQueryReturnType<{
        path: string;
        data: ({
            id: number;
            title: string;
            hashed_id: string;
            is_active: boolean;
            is_public: boolean;
            can_make_offer: boolean | null;
            products?: {
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
            }[] | undefined;
            customers?: ({
                type: 2 | 1 | 4;
                id: number;
                pec: string | null;
                description: string | null;
                company_name: string | null;
                vat_number: string | null;
                tax_code: string | null;
                sdi_code: string | null;
                rank: number | null;
                average_satisfaction?: number | null | undefined;
                can_be_dropped?: boolean | undefined;
                has_duplicates?: boolean | undefined;
            } & {
                created_at: Date;
                updated_at: Date | null;
            } & {
                deleted_at?: Date | null | undefined;
            } & {
                id: number;
                places?: {
                    created_at: Date;
                    updated_at: Date | null;
                    id: number;
                    country_id: number | null;
                    state_id: number | null;
                    province_id: number | null;
                    line1: string | null;
                    postal_code: string | null;
                    city_id: number | null;
                    is_valid_address: boolean;
                    placeable_id: number;
                    placeable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote";
                    legal_office: boolean;
                    description: string;
                    contacts: {
                        type: 2 | 3 | 1 | 4 | 5;
                        value: string;
                        created_at: Date;
                        updated_at: Date | null;
                        contact_id: number;
                        contactables_id: number;
                        contactable_type: string;
                        contactable_id: number;
                    }[];
                    state?: {
                        id: number;
                        name: string;
                        country_id: number;
                        country?: {
                            code: string;
                            id: number;
                            name: string;
                        } | undefined;
                    } | null | undefined;
                    province?: {
                        id: number;
                        name: string;
                        state_id: number;
                        state?: {
                            id: number;
                            name: string;
                            country_id: number;
                            country?: {
                                code: string;
                                id: number;
                                name: string;
                            } | undefined;
                        } | undefined;
                    } | null | undefined;
                    city?: {
                        id: number;
                        name: string;
                        province_id: number;
                        province?: {
                            id: number;
                            name: string;
                            state_id: number;
                            state?: {
                                id: number;
                                name: string;
                                country_id: number;
                                country?: {
                                    code: string;
                                    id: number;
                                    name: string;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                    } | null | undefined;
                    country?: {
                        code: string;
                        id: number;
                        name: string;
                    } | null | undefined;
                    line2?: string | null | undefined;
                }[] | undefined;
                legal_office?: {
                    created_at: Date;
                    updated_at: Date | null;
                    id: number;
                    country_id: number | null;
                    state_id: number | null;
                    province_id: number | null;
                    line1: string | null;
                    postal_code: string | null;
                    city_id: number | null;
                    is_valid_address: boolean;
                    placeable_id: number;
                    placeable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote";
                    legal_office: boolean;
                    description: string;
                    contacts: {
                        type: 2 | 3 | 1 | 4 | 5;
                        value: string;
                        created_at: Date;
                        updated_at: Date | null;
                        contact_id: number;
                        contactables_id: number;
                        contactable_type: string;
                        contactable_id: number;
                    }[];
                    state?: {
                        id: number;
                        name: string;
                        country_id: number;
                        country?: {
                            code: string;
                            id: number;
                            name: string;
                        } | undefined;
                    } | null | undefined;
                    province?: {
                        id: number;
                        name: string;
                        state_id: number;
                        state?: {
                            id: number;
                            name: string;
                            country_id: number;
                            country?: {
                                code: string;
                                id: number;
                                name: string;
                            } | undefined;
                        } | undefined;
                    } | null | undefined;
                    city?: {
                        id: number;
                        name: string;
                        province_id: number;
                        province?: {
                            id: number;
                            name: string;
                            state_id: number;
                            state?: {
                                id: number;
                                name: string;
                                country_id: number;
                                country?: {
                                    code: string;
                                    id: number;
                                    name: string;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                    } | null | undefined;
                    country?: {
                        code: string;
                        id: number;
                        name: string;
                    } | null | undefined;
                    line2?: string | null | undefined;
                } | null | undefined;
            })[] | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        })[];
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
    useProducts: (productListId: Ref<number>) => (params?: Ref<PaginateQueryParams>) => import("@tanstack/vue-query").UseQueryReturnType<{
        path: string;
        data: ({
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
        } & {
            discount: number | null;
            product_id: number;
            product_list_id: number;
        })[];
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

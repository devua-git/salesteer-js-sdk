import { type Ref } from 'vue';
import type { PaginateQueryParams } from '@salesteer/core';
import { BaseResourceQueries } from '../../resource-queries';
export declare class CustomerQueries extends BaseResourceQueries {
    static keys: {
        readonly all: () => readonly ["salesteer-query", "customers"];
        readonly lists: () => readonly ["salesteer-query", "customers", "list"];
        readonly list: (params: unknown) => readonly ["salesteer-query", "customers", "list", unknown];
        readonly details: () => readonly ["salesteer-query", "customers", "detail"];
        readonly detail: (id: number) => readonly ["salesteer-query", "customers", "detail", number];
    };
    useList: (params?: Ref<PaginateQueryParams>) => import("@tanstack/vue-query").UseQueryReturnType<{
        path: string;
        data: ({
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
    useCreate: () => {
        readonly data: undefined;
        readonly error: null;
        readonly isError: false;
        readonly isPending: false;
        readonly isSuccess: false;
        readonly status: "idle";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: undefined;
        readonly isIdle: true;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("@salesteer/core").CustomerCreateRequest, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, import("@salesteer/core").CustomerCreateRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, import("@salesteer/core").CustomerCreateRequest, unknown>;
        reset: () => void;
    } | {
        readonly data: undefined;
        readonly error: null;
        readonly isError: false;
        readonly isPending: true;
        readonly isSuccess: false;
        readonly status: "pending";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: import("@salesteer/core").CustomerCreateRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("@salesteer/core").CustomerCreateRequest, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, import("@salesteer/core").CustomerCreateRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, import("@salesteer/core").CustomerCreateRequest, unknown>;
        reset: () => void;
    } | {
        readonly data: undefined;
        readonly error: Error;
        readonly isError: true;
        readonly isPending: false;
        readonly isSuccess: false;
        readonly status: "error";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: import("@salesteer/core").CustomerCreateRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("@salesteer/core").CustomerCreateRequest, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, import("@salesteer/core").CustomerCreateRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, import("@salesteer/core").CustomerCreateRequest, unknown>;
        reset: () => void;
    } | {
        readonly data: {
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
        };
        readonly error: null;
        readonly isError: false;
        readonly isPending: false;
        readonly isSuccess: true;
        readonly status: "success";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: import("@salesteer/core").CustomerCreateRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("@salesteer/core").CustomerCreateRequest, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, import("@salesteer/core").CustomerCreateRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, import("@salesteer/core").CustomerCreateRequest, unknown>;
        reset: () => void;
    };
    useUpdate: () => {
        readonly data: undefined;
        readonly error: null;
        readonly isError: false;
        readonly isPending: false;
        readonly isSuccess: false;
        readonly status: "idle";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: undefined;
        readonly isIdle: true;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, unknown>;
        reset: () => void;
    } | {
        readonly data: undefined;
        readonly error: null;
        readonly isError: false;
        readonly isPending: true;
        readonly isSuccess: false;
        readonly status: "pending";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        };
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, unknown>;
        reset: () => void;
    } | {
        readonly data: undefined;
        readonly error: Error;
        readonly isError: true;
        readonly isPending: false;
        readonly isSuccess: false;
        readonly status: "error";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        };
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, unknown>;
        reset: () => void;
    } | {
        readonly data: {
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
        };
        readonly error: null;
        readonly isError: false;
        readonly isPending: false;
        readonly isSuccess: true;
        readonly status: "success";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        };
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, {
            customerId: number;
            data: import("@salesteer/core").CustomerCreateRequest;
        }, unknown>;
        reset: () => void;
    };
}

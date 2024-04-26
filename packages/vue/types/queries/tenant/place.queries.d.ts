import { type Ref } from 'vue';
import type { PaginateQueryParams } from '@salesteer/core';
import { BaseResourceQueries } from '../../resource-queries';
export declare class PlaceQueries extends BaseResourceQueries {
    static keys: {
        readonly all: () => readonly ["salesteer-query", "places"];
        readonly lists: () => readonly ["salesteer-query", "places", "list"];
        readonly list: (params: unknown) => readonly ["salesteer-query", "places", "list", unknown];
    };
    useList: (params?: Ref<PaginateQueryParams>) => import("@tanstack/vue-query").UseQueryReturnType<{
        path: string;
        data: {
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
        mutate: (variables: import("@salesteer/core").PlaceCreateRequest, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, import("@salesteer/core").PlaceCreateRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, import("@salesteer/core").PlaceCreateRequest, unknown>;
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
        readonly variables: import("@salesteer/core").PlaceCreateRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("@salesteer/core").PlaceCreateRequest, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, import("@salesteer/core").PlaceCreateRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, import("@salesteer/core").PlaceCreateRequest, unknown>;
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
        readonly variables: import("@salesteer/core").PlaceCreateRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("@salesteer/core").PlaceCreateRequest, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, import("@salesteer/core").PlaceCreateRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, import("@salesteer/core").PlaceCreateRequest, unknown>;
        reset: () => void;
    } | {
        readonly data: {
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
        };
        readonly error: null;
        readonly isError: false;
        readonly isPending: false;
        readonly isSuccess: true;
        readonly status: "success";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: import("@salesteer/core").PlaceCreateRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("@salesteer/core").PlaceCreateRequest, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, import("@salesteer/core").PlaceCreateRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, import("@salesteer/core").PlaceCreateRequest, unknown>;
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
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
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
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        };
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
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
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        };
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, unknown>;
        reset: () => void;
    } | {
        readonly data: {
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
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        };
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, options?: import("@tanstack/vue-query").MutateOptions<{
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
        }, Error, {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
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
        }, Error, {
            placeId: number;
            data: import("@salesteer/core").PlaceCreateRequest;
        }, unknown>;
        reset: () => void;
    };
    useDrop: () => {
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
        mutate: (variables: number, options?: import("@tanstack/vue-query").MutateOptions<void, Error, number, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, number, unknown>;
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
        readonly variables: number;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: number, options?: import("@tanstack/vue-query").MutateOptions<void, Error, number, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, number, unknown>;
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
        readonly variables: number;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: number, options?: import("@tanstack/vue-query").MutateOptions<void, Error, number, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, number, unknown>;
        reset: () => void;
    } | {
        readonly data: void;
        readonly error: null;
        readonly isError: false;
        readonly isPending: false;
        readonly isSuccess: true;
        readonly status: "success";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: number;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: number, options?: import("@tanstack/vue-query").MutateOptions<void, Error, number, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, number, unknown>;
        reset: () => void;
    };
}

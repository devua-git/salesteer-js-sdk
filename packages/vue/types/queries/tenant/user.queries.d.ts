import { BaseResourceQueries } from '../../resource-queries';
export declare class UserQueries extends BaseResourceQueries {
    static keys: {
        readonly all: () => readonly ["salesteer-query", "users"];
        readonly me: () => readonly ["salesteer-query", "users", "me"];
        readonly managedCustomers: () => readonly ["salesteer-query", "users", "managedCustomers"];
    };
    useMe: () => import("@tanstack/vue-query").UseQueryReturnType<{
        id: number;
        name: string;
        email: string;
        admin: boolean;
        is_owner: boolean;
        is_external: boolean;
        has_central_invoiceable_address: boolean;
        timezone: string;
        company_id: number | null;
        profile_image: {
            path: string;
            url: string;
            type: string | null;
            id: number;
            imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
            imageable_id: number;
        } | null;
        company?: ({
            id: number;
            name: string;
            vat_number: string | null;
            domain: string | null;
            logo: string | null;
            logo_uri: string | null;
            dark_mode_logo: string | null;
            dark_mode_logo_uri: string | null;
        } & {
            created_at: Date;
            updated_at: Date | null;
        }) | null | undefined;
        abilities?: {
            id: number;
            name: string;
            title: string;
            entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
        }[] | null | undefined;
        email_verified_at?: Date | null | undefined;
        locale?: string | null | undefined;
        roles?: {
            id: number;
            name: string;
            title: string;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | undefined;
        }[] | null | undefined;
        all_abilities?: {
            id: number;
            name: string;
            title: string;
            entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
        }[] | null | undefined;
        config?: Record<string, any> | null | undefined;
    } & {
        created_at: Date;
        updated_at: Date | null;
    } & {
        deleted_at?: Date | null | undefined;
    }, Error>;
    useManagedCustomers: () => import("@tanstack/vue-query").UseQueryReturnType<({
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
    } & {
        pivot: {
            role: number;
        };
    })[], Error>;
    useRegister: () => {
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
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, options?: import("@tanstack/vue-query").MutateOptions<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, options?: import("@tanstack/vue-query").MutateOptions<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, options?: import("@tanstack/vue-query").MutateOptions<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, unknown>;
        reset: () => void;
    } | {
        readonly data: {
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        };
        readonly error: null;
        readonly isError: false;
        readonly isPending: false;
        readonly isSuccess: true;
        readonly status: "success";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, options?: import("@tanstack/vue-query").MutateOptions<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserRegisterRequest, unknown>;
        reset: () => void;
    };
    useSignIn: () => {
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
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, options?: import("@tanstack/vue-query").MutateOptions<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, options?: import("@tanstack/vue-query").MutateOptions<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, options?: import("@tanstack/vue-query").MutateOptions<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, unknown>;
        reset: () => void;
    } | {
        readonly data: {
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        };
        readonly error: null;
        readonly isError: false;
        readonly isPending: false;
        readonly isSuccess: true;
        readonly status: "success";
        readonly failureCount: number;
        readonly failureReason: Error | null;
        readonly isPaused: boolean;
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, options?: import("@tanstack/vue-query").MutateOptions<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<{
            id: number;
            name: string;
            email: string;
            admin: boolean;
            is_owner: boolean;
            is_external: boolean;
            has_central_invoiceable_address: boolean;
            timezone: string;
            company_id: number | null;
            profile_image: {
                path: string;
                url: string;
                type: string | null;
                id: number;
                imageable_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | null;
                imageable_id: number;
            } | null;
            company?: ({
                id: number;
                name: string;
                vat_number: string | null;
                domain: string | null;
                logo: string | null;
                logo_uri: string | null;
                dark_mode_logo: string | null;
                dark_mode_logo_uri: string | null;
            } & {
                created_at: Date;
                updated_at: Date | null;
            }) | null | undefined;
            abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            email_verified_at?: Date | null | undefined;
            locale?: string | null | undefined;
            roles?: {
                id: number;
                name: string;
                title: string;
                abilities?: {
                    id: number;
                    name: string;
                    title: string;
                    entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
                }[] | undefined;
            }[] | null | undefined;
            all_abilities?: {
                id: number;
                name: string;
                title: string;
                entity_type: "lead" | "company" | "customer" | "prospect" | "account" | "supplier" | "ticket" | "offer" | "project" | "webhook" | "task" | "invoice" | "opportunity" | "procedure" | "event" | "product-list" | "employee-contract" | "location" | "custom-object" | "custom-object-record" | "product" | "report" | "customer-group" | "integration-config" | "recurring-payment" | "role" | "user" | "place" | "state" | "province" | "city" | "person" | "contact" | "vat-type" | "survey" | "board-message" | "non-attendance" | "warehouse" | "badge-record" | "document" | "file" | "comment" | "transport-document" | "acquire-type" | "unit-measure" | "pipeline-entity-step" | "quote" | "*";
            }[] | null | undefined;
            config?: Record<string, any> | null | undefined;
        } & {
            created_at: Date;
            updated_at: Date | null;
        } & {
            deleted_at?: Date | null | undefined;
        }, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserSignInRequest, unknown>;
        reset: () => void;
    };
    useSignOut: () => {
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
        mutate: (variables: void, options?: import("@tanstack/vue-query").MutateOptions<void, Error, void, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, void, unknown>;
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
        readonly variables: void;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: void, options?: import("@tanstack/vue-query").MutateOptions<void, Error, void, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, void, unknown>;
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
        readonly variables: void;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: void, options?: import("@tanstack/vue-query").MutateOptions<void, Error, void, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, void, unknown>;
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
        readonly variables: void;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: void, options?: import("@tanstack/vue-query").MutateOptions<void, Error, void, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, void, unknown>;
        reset: () => void;
    };
    usePasswordReset: () => {
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
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, options?: import("@tanstack/vue-query").MutateOptions<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, options?: import("@tanstack/vue-query").MutateOptions<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, options?: import("@tanstack/vue-query").MutateOptions<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, options?: import("@tanstack/vue-query").MutateOptions<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordResetRequest, unknown>;
        reset: () => void;
    };
    usePasswordForgot: () => {
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
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, options?: import("@tanstack/vue-query").MutateOptions<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, options?: import("@tanstack/vue-query").MutateOptions<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, options?: import("@tanstack/vue-query").MutateOptions<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, unknown>;
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
        readonly variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest;
        readonly isIdle: false;
        readonly context: unknown;
        readonly submittedAt: number;
        mutate: (variables: import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, options?: import("@tanstack/vue-query").MutateOptions<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, unknown> | undefined) => void;
        mutateAsync: import("@tanstack/vue-query").MutateFunction<void, Error, import("node_modules/@salesteer/core/build/modern/resources/tenant/user/user.types").UserPasswordForgotRequest, unknown>;
        reset: () => void;
    };
}

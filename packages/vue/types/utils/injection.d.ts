import type { InjectionKey } from 'vue';
export declare function injectStrict<T>(key: InjectionKey<T>, fallback?: T): NonNullable<T>;

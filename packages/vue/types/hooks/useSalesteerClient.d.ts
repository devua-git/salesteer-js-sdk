import type { SalesteerClient } from '@salesteer/core';
import type { InjectionKey } from 'vue';
export declare const SALESTEER_CLIENT_KEY: InjectionKey<SalesteerClient>;
export declare const useSalesteerClient: () => SalesteerClient;

import { type SalesteerClientConfigs } from '@salesteer/core';
import { type App } from 'vue';
import type { SalesteerQueryClientConfigs } from './client';
export type VueSalesteerPluginOptions = {
    client?: SalesteerClientConfigs;
    queryClient?: Omit<SalesteerQueryClientConfigs, 'client'>;
};
export declare const VueSalesteerPlugin: {
    install: (app: App, options?: VueSalesteerPluginOptions) => void;
};

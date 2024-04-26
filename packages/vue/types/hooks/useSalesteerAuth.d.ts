import type { InjectionKey } from 'vue';
import type { User } from '@salesteer/core';
export type SignedInPayload = {
    user: User;
    isSignedIn: true;
};
export type SignedOutPayload = {
    user: null;
    isSignedIn: false;
};
export type AuthContextPayload = SignedInPayload | SignedOutPayload;
export declare const SALESTEER_AUTH_KEY: InjectionKey<AuthContextPayload>;
export declare const useSalesteerAuth: () => AuthContextPayload;

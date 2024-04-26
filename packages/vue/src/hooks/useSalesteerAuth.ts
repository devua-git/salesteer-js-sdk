import type { InjectionKey } from 'vue'
import type { User } from '@salesteer/core'
import { injectStrict } from '../utils/injection'

export type SignedInPayload = {
  user: User
  isSignedIn: true
}
export type SignedOutPayload = {
  user: null
  isSignedIn: false
}
export type AuthContextPayload = SignedInPayload | SignedOutPayload

export const SALESTEER_AUTH_KEY: InjectionKey<AuthContextPayload> =
  Symbol('SALESTEER_AUTH_KEY')

export const useSalesteerAuth = (): AuthContextPayload => {
  return injectStrict(SALESTEER_AUTH_KEY)
}

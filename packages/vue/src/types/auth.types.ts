import type { InjectionKey } from 'vue'
import type { User } from '@salesteer/core'

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

export const SALESTEER_AUTH_USER_KEY: InjectionKey<User> = Symbol(
  'SALESTEER_AUTH_USER_KEY'
)

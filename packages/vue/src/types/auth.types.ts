import type { User } from '@salesteer/core'
import type { InjectionKey, Ref } from 'vue'

export type SignedInPayload = {
  user: User
  isSignedIn: true
}
export type SignedOutPayload = {
  user: null
  isSignedIn: false
}
export type AuthContextPayload = SignedInPayload | SignedOutPayload

export const SALESTEER_AUTH_KEY: InjectionKey<Ref<AuthContextPayload>> = Symbol('SALESTEER_AUTH_KEY')

export const SALESTEER_AUTH_USER_KEY: InjectionKey<Ref<User>> = Symbol(
  'SALESTEER_AUTH_USER_KEY',
)

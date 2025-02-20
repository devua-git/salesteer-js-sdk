import type { User } from '@salesteer/core'
import { defineStore } from 'pinia'
import type { AuthContextPayload } from '../types/auth.types'

export const useSalesteerAuthStore = defineStore('salesteer-sdk-auth', {
  state: (): AuthContextPayload => ({
    isSignedIn: false,
    user: null,
  }),

  actions: {
    signIn(user: User) {
      this.$state = { isSignedIn: true, user }
    },

    signOut() {
      this.$state = {
        isSignedIn: false,
        user: null,
      }
    },
  },

  persist: true,
})

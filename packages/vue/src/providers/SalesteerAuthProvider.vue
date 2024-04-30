<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { computed, provide, reactive, ref, watch } from 'vue'
import type { User } from '@salesteer/core'
import { useSalesteerQueryClient } from '../hooks/useSalesteerQueryClient'
import {
  SALESTEER_AUTH_KEY,
  type AuthContextPayload,
} from '../types/auth.types'
import { useSalesteerAuthStore } from '..'

const client = useSalesteerQueryClient()
const store = useSalesteerAuthStore()
const meQuery = reactive(client.user.useMe())

const user = ref<User | null>(null)

watch(meQuery, (query) => {
  if (query.status == 'error') {
    user.value = null
  }
  if (query.status == 'success') {
    user.value = query.data
  }
})

const context = computed<AuthContextPayload>(() => {
  if (user.value != null) {
    store.signIn(user.value)
    return {
      user: user.value,
      isSignedIn: true,
    }
  }

  store.signOut()
  return {
    user: null,
    isSignedIn: false,
  }
})

provide(SALESTEER_AUTH_KEY, context)
</script>

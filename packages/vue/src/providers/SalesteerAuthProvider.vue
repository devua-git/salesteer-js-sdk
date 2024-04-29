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

const client = useSalesteerQueryClient()
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
  console.log('contextAuth')
  if (user.value != null) {
    return {
      user: user.value,
      isSignedIn: true,
    }
  }

  return {
    user: null,
    isSignedIn: false,
  }
})

provide(SALESTEER_AUTH_KEY, context.value)
</script>

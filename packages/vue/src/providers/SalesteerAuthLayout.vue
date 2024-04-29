<template>
  <template v-if="auth.isSignedIn">
    <SalesteerAuthenticatedUserProvider :user="auth.user">
      <slot></slot>
    </SalesteerAuthenticatedUserProvider>
  </template>
  <template v-else>
    <slot name="not-logged"></slot>
  </template>
</template>

<script setup lang="ts">
import { useSalesteerAuth } from '..'
import SalesteerAuthenticatedUserProvider from './SalesteerAuthenticatedUserProvider.vue'

console.log('sdqdaad')
const auth = useSalesteerAuth()
</script>

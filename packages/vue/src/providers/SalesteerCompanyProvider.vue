<template>
  <slot v-if="query.status === 'pending'" name="loading"></slot>
  <slot
    v-else-if="query.status === 'error'"
    name="error"
    :error="query.error"
  ></slot>
  <CurrentCompanyProvider v-else :current-company="query.data">
    <slot></slot>
  </CurrentCompanyProvider>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useSalesteerQueryClient } from '../hooks/useSalesteerQueryClient'
import CurrentCompanyProvider from './CurrentCompanyProvider.vue'

const client = useSalesteerQueryClient()
const query = reactive(client.company.useCurrent())
</script>

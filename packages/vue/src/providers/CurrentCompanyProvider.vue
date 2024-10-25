<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import type { CurrentCompanyData } from '@salesteer/core'
import { computed } from 'vue'
import { provide } from 'vue'
import { SALESTEER_CURRENT_COMPANY_KEY } from '../hooks/useSalesteerCurrentCompany'

const props = defineProps<{
  currentCompany: CurrentCompanyData
}>()

const currentCompany = computed(() => props.currentCompany)
provide(SALESTEER_CURRENT_COMPANY_KEY, currentCompany)
</script>

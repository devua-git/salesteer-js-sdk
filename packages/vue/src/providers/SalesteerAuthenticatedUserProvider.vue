<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import type { User } from '@salesteer/core'
import { computed, provide } from 'vue'
import { SALESTEER_AUTH_USER_KEY } from '../types/auth.types'

const props = defineProps<{ user: User }>()

const user = computed(() => props.user)
provide(SALESTEER_AUTH_USER_KEY, user)
</script>

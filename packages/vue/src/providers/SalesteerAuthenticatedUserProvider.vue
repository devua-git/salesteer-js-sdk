<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import type { User } from '@salesteer/core'
import { provide } from 'vue'
import { SALESTEER_AUTH_USER_KEY } from '../types/auth.types'

const props = defineProps<{ user: User }>()

provide(SALESTEER_AUTH_USER_KEY, props.user)
</script>

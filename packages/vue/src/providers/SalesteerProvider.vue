<template>
  <SalesteerCompanyProvider>
    <SalesteerAuthProvider>
      <slot></slot>
    </SalesteerAuthProvider>
  </SalesteerCompanyProvider>
</template>

<script
  setup
  lang="ts"
>
import SalesteerAuthProvider from './SalesteerAuthProvider.vue';
import SalesteerCompanyProvider from './SalesteerCompanyProvider.vue';
</script>

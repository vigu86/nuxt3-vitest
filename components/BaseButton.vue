<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    class="border rounded-sm hover:!bg-slate-300 px-3 py-2 [&.router-link-active]:bg-slate-200"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

defineProps({
  to: {
    type: String,
    default: ''
  }
})
</script>
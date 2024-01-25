<template>
  <section class="relative">
    <img
      src="~/assets/img/banner_1.jpg"
      alt=""
      class="aspect-[2/1] object-cover object-top w-full"
    >
    
    <header class="absolute top-4 left-8">
      <h2 class="text-5xl">{{ title }}</h2>
      <p
        v-if="body" 
        class="mt-2 text-xl">{{ body }}
      </p>
      <BaseButton
        v-if="button"
        :to="button.url"
        class="mt-2">{{ button?.text }}
      </BaseButton>
    </header>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  body:{
    type: String,
    default: ''
  },
  button: {
    type: Object as PropType<{
      text: string,
      url: string
    }>
  }
})
</script>
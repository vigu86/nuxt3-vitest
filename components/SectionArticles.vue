<template>
  <section class="container flex gap-3 py-6">
    <article v-for="article in articles">
      <header class="text-xl">{{ article.title }}</header>
      <p>{{ article.body  }}</p>
    </article>
  </section>
  </template>

<script setup lang="ts">
defineProps({
  articles: Array as PropType<Array<{
    title: string;
    body: string
  }>>
})
</script> 
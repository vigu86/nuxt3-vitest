<template>
  <header class="border-b">
    <nav class="flex justify-between items-center container py-4">
      <h1 class="mr-3">
        <NuxtLink to="/">App</NuxtLink>
      </h1>
      <div class="flex gap-2">
        <BaseButton to="faq">FAQ</BaseButton>
        <BaseButton to="about">About</BaseButton>
      </div>
    </nav>
  </header>
</template>
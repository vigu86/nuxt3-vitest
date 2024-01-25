<template>
  <main>
    <section class="relative">
      <img
        src="~/assets/img/banner_1.jpg"
        alt=""
        class="aspect-[2/1] object-cover object-top w-full"
      >
      
      <header class="absolute top-4 left-8">
        <h2 class="text-5xl">Section Text</h2>
        <p class="mt-2 text-3xl">Section body</p>
        <BaseButton class="mt-2">Button</BaseButton>
      </header>
    </section>

    <section class="container flex gap-3 py-6">
      <article>
        <header class="text-xl">Item 1</header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, distinctio?</p>
      </article>
      <article>
        <header class="text-xl">Item 1</header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, distinctio?</p>
      </article>
      <article>
        <header class="text-xl">Item 1</header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, distinctio?</p>
      </article>
    </section>

    <SectionImages :filters="['people', 'animals', 'city']" />
  </main>
</template>


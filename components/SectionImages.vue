<template>
   <section class="container bg-slate-100 pt-8">
      <h1>Browse By Category</h1>

      <div class="mt-4 flex gap-4">
        <BaseButton
          v-for="(filter, index) in filters"
          data-test="section-images-filter"
          @click="() => selectedIndex = index">{{ filter  }}
        </BaseButton>
      </div>

        <div class="mt-4 grid gap-4 grid-cols-3" v-if="photos">
          <p v-if="pending" data-test="section-images-loading-info">Loading Photos....</p>
          <p v-else-if="testError">Error fetching photos!</p>
          <img
            v-else
            v-for="photo in photos.photos.slice(0,12)"
            :src="photo.src.small"
            :alt="photo.alt || ''"
            class="aspect-square object-cover"
            data-test="section-images-image"
          >
        </div>
    </section>
</template>

<script setup lang="ts">
import { createClient, type PhotosWithTotalResults, type ErrorResponse, type Photo  } from 'pexels';
// const BaseButton = resolveComponent('BaseButton')
import BaseButton from './BaseButton.vue';

const props = defineProps({
  filters: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const client = createClient(useRuntimeConfig().public.pexelsApiKey as string);

const selectedIndex = ref(0)

const {data: photos, pending, refresh, error: testError} = await useAsyncData<PhotosWithTotalResults, ErrorResponse>('photos', async () => {
  return client.photos.search({ orientation: 'landscape', query: props.filters[selectedIndex.value] }) as Promise<PhotosWithTotalResults>
}, {
  watch: [selectedIndex]
})
</script>
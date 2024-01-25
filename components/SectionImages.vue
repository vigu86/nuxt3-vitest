<template>
   <section class="container bg-slate-100 pt-8">
      <h1>Browse By Category</h1>

      <div class="mt-4 flex gap-4">
        <BaseButton
          v-for="(filter, index) in filters"
          @click="() => selectedIndex = index">{{ filter  }}
        </BaseButton>
      </div>

        <div class="mt-4 grid gap-4 grid-cols-3" v-if="photos">
          <p v-if="pending">Loading Photos....</p>
          <p v-else-if="error">Error fetching photos!</p>
          <img
            v-else
            v-for="photo in photos.photos"
            :src="photo.src.small"
            :alt="photo.alt || ''"
            class="aspect-square object-cover"
          >
        </div>
    </section>
</template>

<script setup lang="ts">
import { createClient, type PhotosWithTotalResults, type ErrorResponse, type Photo  } from 'pexels';
const BaseButton = resolveComponent('BaseButton')

const props = defineProps({
  filters: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const client = createClient(useRuntimeConfig().public.pexelsApiKey as string);

const selectedIndex = ref(0)

const {data: photos, pending, refresh, error} = useAsyncData<PhotosWithTotalResults, ErrorResponse>('photos', () => {
  return client.photos.search({ orientation: 'landscape', query: props.filters[selectedIndex.value] }) as Promise<PhotosWithTotalResults>
})

watch(selectedIndex, () => refresh())

</script>
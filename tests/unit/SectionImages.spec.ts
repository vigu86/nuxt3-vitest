import { test, expect, describe, expectTypeOf, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { SectionImages } from '#components'

const FILTERS = ['people', 'animals']
const wrapper = await mountSuspended(SectionImages, {
  props: {
    filters: FILTERS
  }
})

test('Renders filters', async () => {
  await wrapper.vm.$nextTick();
  const filters = wrapper.findAll('[data-test="section-images-filter"]')

  filters.forEach((filter, index) => {
    expect(filter.element.tagName).toBe('BUTTON')
    expect(filter.text()).toBe(FILTERS[index])
  })
})

test('Renders images', async () => {
  await wrapper.vm.$nextTick();
  const images = wrapper.findAll('[data-test="section-images-image"]')
  console.log('images', images.map(image => image.attributes().src))
  expect(images.length).toBe(15)
  images.forEach(image => {
    const { src, alt } = image.attributes()

    expect(src).toBeTruthy()
    expect(src).toBeTypeOf('string')
    expect(alt).toBeTruthy()
    expect(alt).toBeTypeOf('string')
  });
})

test('Changes images when inactive filter is clicked', async () => {
  const filters = wrapper.findAll('[data-test="section-images-filter"]');
  const notActiveFilter = filters[filters.length - 1]
  await notActiveFilter.trigger('click')
  const images = wrapper.findAll('[data-test="section-images-image"]')
  expect(images.length).toBe(0)
  const info = wrapper.find('[data-test="section-images-loading-info"]')
  expect(info.exists()).toBe(true)

  setTimeout(() => {
    const element = wrapper.findAll('[data-test="section-images-image"]')
    expect(element.length).toBe(15)
  }, 1000)



})


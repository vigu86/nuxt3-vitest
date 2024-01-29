import { test, expect, describe, expectTypeOf, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
// import { SectionImages } from '#components'
import SectionImages from '~/components/SectionImages.vue'

const FILTERS = ['people', 'animals']
const wrapper = await mountSuspended(SectionImages, {
  props: {
    filters: FILTERS
  },
})

// Mock the Pexels library createClient function
vi.mock('pexels', () => {
  return {
    createClient: vi.fn(() => ({
      photos: {
        search: vi.fn(() => Promise.resolve({
          photos: [
            { src: {  small: 'test src #1' }, alt: 'test alt #1'},
            { src: {  small: 'test src #2' }, alt: 'test alt #2'},
            { src: {  small: 'test src #3' }, alt: 'test alt #3'},
            { src: {  small: 'test src #4' }, alt: 'test alt #4'},
            { src: {  small: 'test src #5' }, alt: 'test alt #5'},
            { src: {  small: 'test src #6' }, alt: 'test alt #6'},
            { src: {  small: 'test src #7' }, alt: 'test alt #7'},
            { src: {  small: 'test src #8' }, alt: 'test alt #8'},
            { src: {  small: 'test src #9' }, alt: 'test alt #9'},
            { src: {  small: 'test src #10' }, alt: 'test alt #10'},
            { src: {  small: 'test src #11' }, alt: 'test alt #11'},
            { src: {  small: 'test src #12' }, alt: 'test alt #12'},
            { src: {  small: 'test src #13' }, alt: 'test alt #13'},
            { src: {  small: 'test src #14' }, alt: 'test alt #14'},
            { src: {  small: 'test src #15' }, alt: 'test alt #15'},
          ]
        })),
      },
    })),
  };
});

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
  expect(images.length).toBe(12)
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


import { test, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BaseButton from '~/components/BaseButton.vue'

const TEXT = 'Learn more'
const PAGE = 'faq'

const SLOTS_DEFAULT =  {
  default: () => TEXT
}

const wrapperButton = await mountSuspended(BaseButton, {
  slots: SLOTS_DEFAULT
})

const wrapperAnchor = await mountSuspended(BaseButton, {
  slots: SLOTS_DEFAULT,
  props: {
    to: PAGE
  }
})

test('Renders text', async () => {
  expect(wrapperButton.text()).toBe(TEXT)
})

test('Renders as button when "to" prop not provided', async () => {
  expect(wrapperButton.element.tagName).toBe('BUTTON')
})

test('Renders as valid link when "to" prop is provided', async () => {
  expect(wrapperAnchor.element.tagName).toBe('A')
  expect(wrapperAnchor.attributes()['href']).toBe(`/${PAGE}`)
})



import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { BaseButton } from '#components'

test('BaseButton', () => {
  const TEXT = 'Learn more'
  const wrapper = mount(BaseButton, {
    slots: {
      default: TEXT
    }
  })
  const button = wrapper.get('[data-test="base-button"]')
  expect(button.text()).toBe(TEXT)
})
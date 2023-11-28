import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CardBlock from '@/components/layout/CardBlock.vue'

describe('CardBlock', () => {
  it('renders properly', () => {
    const title = 'Card Title'
    const subtitle = 'Lorem ipsum'
    const wrapper = mount(CardBlock, { props: { title, subtitle } })
    const header = wrapper.find('header')
    const h1 = header.find('h1')
    const p = header.find('p')

    expect(h1.text()).toBe(title)
    expect(p.text()).toBe(subtitle)
  })
})

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(AboutView)
  })

  it('renders proper title and subtitle', () => {
    const header = wrapper.find('header')
    const h1 = header.find('h1')
    const p = header.find('p')

    expect(h1.text()).toBe('Sobre')
    expect(p.text()).toBe('Dados técnicos')
  })

  it('renders proper content', () => {
    const ul = wrapper.find('ul')

    expect(ul.exists()).toBe(true)
  })

  it('renders a back button', () => {
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Voltar')
  })

  describe('back', () => {
    it('calls history.back', () => {
      const spy = vi.spyOn(window.history, 'back')

      wrapper.vm.back()

      expect(spy).toHaveBeenCalled()
    })
  })
})

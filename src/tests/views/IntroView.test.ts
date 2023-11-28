import { describe, it, expect, beforeEach, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import IntroView from '@/views/IntroView.vue'
import { AppStore } from '@/modules/store/app'
import router from '@/router'

describe('IntroView', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(IntroView, {
      global: {
        plugins: [router]
      }
    })
  })

  it('renders proper title and subtitle', () => {
    const header = wrapper.find('header')
    const h1 = header.find('h1')
    const p = header.find('p')

    expect(h1.text()).toBe('Admin')
    expect(p.text()).toBe('Demonstração para testes')
  })

  it('renders proper links', () => {
    const links = wrapper.findAll('a')

    expect(links.length).toBe(2)

    expect(links[0].text()).toBe('Login')
    expect(links[0].attributes('href')).toBe('/login')

    expect(links[1].text()).toBe('Sobre')
    expect(links[1].attributes('href')).toBe('/sobre')
  })

  describe('checkAuthRedirect', () => {
    it('does not redirect if user is not logged in', () => {
      const push = vi.spyOn(router, 'push')
      wrapper.vm.checkAuthRedirect()
      expect(push).not.toHaveBeenCalled()
    })

    it('redirects to /sistema if user is logged in', () => {
      const push = vi.spyOn(router, 'push')

      AppStore.set('auth', true)
      wrapper.vm.checkAuthRedirect()

      expect(push).toHaveBeenCalledWith('/sistema')
    })
  })
})

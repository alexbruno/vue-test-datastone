import { describe, it, expect, beforeEach, suite, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import LoginView from '@/views/LoginView.vue'
import router from '@/router'

describe('LoginView', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(LoginView, {
      global: {
        plugins: [router]
      }
    })
  })

  it('renders proper title and subtitle', () => {
    const header = wrapper.find('header')
    const h1 = header.find('h1')
    const p = header.find('p')

    expect(h1.text()).toBe('Login')
    expect(p.text()).toBe('Digite nos campos o que aparece no placeholder')
  })

  it('renders proper form', () => {
    const form = wrapper.find('form')

    expect(form.exists()).toBe(true)
  })

  it('renders proper labels', () => {
    const labels = wrapper.findAll('label > p')

    expect(labels.length).toBe(2)
    expect(labels[0].text()).toBe('Usuário')
    expect(labels[1].text()).toBe('Senha')
  })

  it('renders proper inputs', () => {
    const inputs = wrapper.findAll('label > input')

    expect(inputs.length).toBe(2)

    expect(inputs[0].attributes('type')).toBe('text')
    expect(inputs[0].attributes('name')).toBe('user')

    expect(inputs[1].attributes('type')).toBe('password')
    expect(inputs[1].attributes('name')).toBe('password')
  })

  it('renders proper buttons', () => {
    const button = wrapper.findAll('button')

    expect(button.length).toBe(2)

    expect(button[0].attributes('type')).toBe('submit')
    expect(button[0].text()).toBe('Entrar')

    expect(button[1].attributes('type')).toBe('reset')
    expect(button[1].text()).toBe('Ajuda')
  })

  describe('when user submits the form', () => {
    suite('and the credentials are invalid', () => {
      it('emits error', async () => {
        const form = wrapper.find('form')
        const inputs = wrapper.findAll('label > input')

        await inputs[0].setValue('user')
        await inputs[1].setValue('user')

        await form.trigger('submit.prevent')

        expect(wrapper.emitted()).toHaveProperty('error')
      })
    })

    suite('and the credentials are valid', () => {
      it('emits success', async () => {
        const form = wrapper.find('form')
        const inputs = wrapper.findAll('label > input')

        await inputs[0].setValue('admin')
        await inputs[1].setValue('admin')

        await form.trigger('submit.prevent')

        expect(wrapper.emitted()).toHaveProperty('success')
      })

      it('redirects to /sistema', async () => {
        const form = wrapper.find('form')
        const inputs = wrapper.findAll('label > input')
        const push = vi.spyOn(router, 'push')

        await inputs[0].setValue('admin')
        await inputs[1].setValue('admin')

        await form.trigger('submit.prevent')

        expect(push).toHaveBeenCalledWith('/sistema')
      })
    })
  })

  describe('when user clicks on help button', () => {
    it('calls help method', async () => {
      const form = wrapper.find('form')

      await form.trigger('reset')

      expect(wrapper.emitted()).toHaveProperty('help')
    })
  })
})

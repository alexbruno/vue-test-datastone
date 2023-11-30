import { describe, it, expect, beforeEach, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import CustomerCreateView from '@/views/system/customers/CustomerCreateView.vue'
import { CustomersStore } from '@/modules/store/customers'
import router from '@/router'

describe('CustomerCreateView', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(CustomerCreateView, {
      global: {
        plugins: [router]
      }
    })
  })

  it('renders proper title and subtitle', () => {
    const header = wrapper.find('header')
    const h1 = header.find('h1')
    const p = header.find('p')

    expect(h1.text()).toBe('Clientes')
    expect(p.text()).toBe('Criar novo cliente')
  })

  it('renders proper form', () => {
    const form = wrapper.find('form')
    const name = form.find('input[name="name"]')
    const submit = form.find('button[type="submit"]')

    expect(form.exists()).toBe(true)
    expect(name.exists()).toBe(true)
    expect(submit.exists()).toBe(true)
  })

  it('renders a link to go back to customers list', () => {
    const link = wrapper.find('a')

    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('Voltar')
    expect(link.attributes('href')).toBe('/sistema/clientes')
  })

  describe('when form is submitted', () => {
    it('adds a new customer to the list', async () => {
      const form = wrapper.find('form')
      const create = vi.spyOn(CustomersStore, 'createCustomer')

      await form.trigger('submit.prevent')

      expect(create).toHaveBeenCalled()
    })

    it('redirects to customer products setup', async () => {
      const form = wrapper.find('form')
      const push = vi.spyOn(router, 'push')

      await form.trigger('submit.prevent')

      expect(push).toHaveBeenCalled()
    })
  })
})

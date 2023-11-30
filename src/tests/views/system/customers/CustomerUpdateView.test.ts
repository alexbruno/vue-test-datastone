import { describe, it, expect, beforeEach, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import CustomerUpdateView from '@/views/system/customers/CustomerUpdateView.vue'
import { CustomersStore } from '@/modules/store/customers'
import router from '@/router'

describe('CustomerUpdateView', () => {
  let wrapper: VueWrapper<any>
  const getCustomerById = vi.spyOn(CustomersStore, 'getCustomerById')

  beforeEach(() => {
    wrapper = mount(CustomerUpdateView, {
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
    expect(p.text()).toBe('Editar cliente')
  })

  it('renders proper form', () => {
    const form = wrapper.find('form')
    const name = form.find('input[name="name"]')
    const submit = form.find('button[type="submit"]')

    expect(form.exists()).toBe(true)
    expect(name.exists()).toBe(true)
    expect(submit.exists()).toBe(true)
  })

  it('renders an UpdateItemStatus component', () => {
    const UpdateItemStatus = wrapper.findComponent({ name: 'UpdateItemStatus' })

    expect(UpdateItemStatus.exists()).toBe(true)
  })

  it('renders a link to go back to customers list', () => {
    const link = wrapper.find('a')

    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('Voltar')
    expect(link.attributes('href')).toBe('/sistema/clientes')
  })

  it('calls CustomersStore.getCustomerById with the id from route params', async () => {
    const id = router.currentRoute.value.params.id

    expect(getCustomerById).toHaveBeenCalledWith(id)
  })

  describe('when form is submitted', () => {
    it('updates the customer to the list', async () => {
      const form = wrapper.find('form')
      const name = form.find('input[name="name"]')
      const update = vi.spyOn(CustomersStore, 'updateCustomer')

      await name.setValue('Customer Star')
      await form.trigger('submit.prevent')

      expect(update).toHaveBeenCalled()
    })

    it('redirects to customers list', async () => {
      const form = wrapper.find('form')
      const name = form.find('input[name="name"]')
      const push = vi.spyOn(router, 'push')

      await name.setValue('Customer Star')
      await form.trigger('submit.prevent')

      expect(push).toHaveBeenCalledWith('/sistema/clientes')
    })
  })
})

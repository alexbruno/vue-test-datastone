import { describe, it, expect, beforeEach, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import CustomerProductsView from '@/views/system/customers/CustomerProductsView.vue'
import { CustomersStore } from '@/modules/store/customers'
import router from '@/router'

describe('CustomerProductsView', () => {
  let wrapper: VueWrapper<any>
  const getCustomerById = vi.spyOn(CustomersStore, 'getCustomerById')

  beforeEach(() => {
    wrapper = mount(CustomerProductsView, {
      global: {
        plugins: [router]
      }
    })
  })

  it('renders proper title and subtitle', () => {
    const header = wrapper.find('header')
    const h1 = header.find('h1')
    const p = header.find('p')

    expect(h1.text()).toBe('Cliente + Produtos')
    expect(p.text()).toBe('Associar produtos ao cliente')
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

  it('renders 2 product lists (selected and available)', () => {
    const lists = wrapper.findAll('ul')

    expect(lists.length).toBe(2)
  })

  describe('save', () => {
    it('renders a button to save changes', () => {
      const button = wrapper.find('button')

      expect(button.exists()).toBe(true)
      expect(button.text()).toBe('Salvar')
    })

    it('calls CustomersStore.updateCustomerProducts with the customer id and the selected products', async () => {
      const update = vi.spyOn(CustomersStore, 'updateCustomer')
      const button = wrapper.find('button')

      await button.trigger('click')

      expect(update).toHaveBeenCalled()
    })
  })
})

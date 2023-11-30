import { describe, it, expect, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import CustomersListView from '@/views/system/customers/CustomersListView.vue'
import { CustomersStore } from '@/modules/store/customers'
import router from '@/router'

describe('CustomersListView', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(CustomersListView, {
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
    expect(p.text()).toBe('Gerenciar lista de clientes')
  })

  it('renders proper content', () => {
    const ul = wrapper.find('ul')

    expect(ul.exists()).toBe(true)
  })

  it('renders a link to create a new customer', () => {
    const link = wrapper.find('a')

    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('+ Novo Cliente')
    expect(link.attributes('href')).toBe('/sistema/clientes/novo')
  })

  it('renders a list of customers', () => {
    const li = wrapper.findAll('li')

    expect(li.length).toBe(CustomersStore.state.list.length)
  })
})

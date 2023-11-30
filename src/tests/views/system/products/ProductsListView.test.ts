import { describe, it, expect, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import ProductsListView from '@/views/system/products/ProductsListView.vue'
import { ProductsStore } from '@/modules/store/products'
import router from '@/router'

describe('ProductsListView', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(ProductsListView, {
      global: {
        plugins: [router]
      }
    })
  })

  it('renders proper title and subtitle', () => {
    const header = wrapper.find('header')
    const h1 = header.find('h1')
    const p = header.find('p')

    expect(h1.text()).toBe('Produtos')
    expect(p.text()).toBe('Gerenciar lista de produtos')
  })

  it('renders proper content', () => {
    const ul = wrapper.find('ul')

    expect(ul.exists()).toBe(true)
  })

  it('renders a link to create a new product', () => {
    const link = wrapper.find('a')

    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('+ Novo Produto')
    expect(link.attributes('href')).toBe('/sistema/produtos/novo')
  })

  it('renders a list of products', () => {
    const li = wrapper.findAll('li')

    expect(li.length).toBe(ProductsStore.state.list.length)
  })
})

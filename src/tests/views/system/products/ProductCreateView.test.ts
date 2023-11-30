import { describe, it, expect, beforeEach, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import ProductCreateView from '@/views/system/products/ProductCreateView.vue'
import { ProductsStore } from '@/modules/store/products'
import router from '@/router'

describe('ProductCreateView', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(ProductCreateView, {
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
    expect(p.text()).toBe('Criar novo produto')
  })

  it('renders proper form', () => {
    const form = wrapper.find('form')
    const name = form.find('input[name="name"]')
    const submit = form.find('button[type="submit"]')

    expect(form.exists()).toBe(true)
    expect(name.exists()).toBe(true)
    expect(submit.exists()).toBe(true)
  })

  it('renders a link to go back to products list', () => {
    const link = wrapper.find('a')

    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('Voltar')
    expect(link.attributes('href')).toBe('/sistema/produtos')
  })

  describe('when form is submitted', () => {
    it('adds a new product to the list', async () => {
      const form = wrapper.find('form')
      const name = form.find('input[name="name"]')
      const create = vi.spyOn(ProductsStore, 'createProduct')

      await name.setValue('Product 1')
      await form.trigger('submit.prevent')

      expect(create).toHaveBeenCalledWith('Product 1')
    })

    it('redirects to products list', async () => {
      const form = wrapper.find('form')
      const name = form.find('input[name="name"]')
      const push = vi.spyOn(router, 'push')

      await name.setValue('Product 1')
      await form.trigger('submit.prevent')

      expect(push).toHaveBeenCalledWith('/sistema/produtos')
    })
  })
})

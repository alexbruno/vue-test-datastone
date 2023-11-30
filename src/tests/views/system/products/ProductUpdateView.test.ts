import { describe, it, expect, beforeEach, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import ProductUpdateView from '@/views/system/products/ProductUpdateView.vue'
import { ProductsStore } from '@/modules/store/products'
import router from '@/router'

describe('ProductUpdateView', () => {
  let wrapper: VueWrapper<any>
  const getProductById = vi.spyOn(ProductsStore, 'getProductById')

  beforeEach(() => {
    wrapper = mount(ProductUpdateView, {
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
    expect(p.text()).toBe('Editar produto')
  })

  it('renders proper form', () => {
    const form = wrapper.find('form')
    const name = form.find('input[name="name"]')
    const submit = form.find('button[type="submit"]')

    expect(form.exists()).toBe(true)
    expect(name.exists()).toBe(true)
    expect(submit.exists()).toBe(true)
  })

  it('renders a UpdateItemStatus component', () => {
    const UpdateItemStatus = wrapper.findComponent({ name: 'UpdateItemStatus' })

    expect(UpdateItemStatus.exists()).toBe(true)
  })

  it('renders a link to go back to products list', () => {
    const link = wrapper.find('a')

    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('Voltar')
    expect(link.attributes('href')).toBe('/sistema/produtos')
  })

  it('calls ProductsStore.getProductById with the id from route params', async () => {
    const id = router.currentRoute.value.params.id

    expect(getProductById).toHaveBeenCalledWith(id)
  })

  describe('when form is submitted', () => {
    it('updates the product to the list', async () => {
      const form = wrapper.find('form')
      const name = form.find('input[name="name"]')
      const updateProduct = vi.spyOn(ProductsStore, 'updateProduct')

      await name.setValue('Product 1')
      await form.trigger('submit.prevent')

      expect(updateProduct).toHaveBeenCalledWith({
        id: '',
        active: true,
        name: 'Product 1'
      })
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

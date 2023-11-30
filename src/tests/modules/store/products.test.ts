import { describe, expect, it } from 'vitest'
import { ProductsStore, type ProductsStoreState } from '@/modules/store/products'
import { StoreService } from '@/modules/services/store'

describe('AppStore', () => {
  const init: ProductsStoreState = {
    list: []
  }

  it('should be an instance of StoreService', () => {
    expect(ProductsStore).toBeInstanceOf(StoreService)
  })

  it('should have a proper state', () => {
    expect(ProductsStore.state).toEqual(init)
  })

  describe('createProduct', () => {
    it('should create a product', () => {
      expect(ProductsStore.state.list.length).toBe(0)

      ProductsStore.createProduct('Product')

      expect(ProductsStore.state.list.length).toBe(1)
    })
  })

  describe('updateProduct', () => {
    it('should update a product', () => {
      const product = ProductsStore.state.list[0]
      product.name = 'Product TOP'

      ProductsStore.updateProduct(product)

      expect(ProductsStore.state.list[0].name).toBe('Product TOP')
    })
  })

  describe('changeProductStatus', () => {
    it('should change product status', () => {
      const product = ProductsStore.state.list[0]

      expect(product.active).toBe(true)

      ProductsStore.changeProductStatus(product.id)

      expect(ProductsStore.state.list[0].active).toBe(false)
    })
  })

  describe('getProductById', () => {
    it('should get a product by id', () => {
      const product = ProductsStore.state.list[0]
      const result = ProductsStore.getProductById(product.id)

      expect(result).toEqual(product)
    })
  })
})

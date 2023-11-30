import { wuid } from '@jsweb/randkey'
import { StoreService } from '../services/store'

interface Product {
  id: string
  name: string
  active: boolean
}

interface ProductsStoreState {
  list: Product[]
}

class ProductsStoreService extends StoreService<ProductsStoreState> {
  createProduct(name: string): void {
    const product: Product = {
      name,
      id: wuid(),
      active: true
    }
    const result = this.state.list.concat(product)
    this.set('list', result)
  }

  updateProduct(product: Product): void {
    const result = this.state.list.map((item) => {
      return item.id === product.id ? product : item
    })
    this.set('list', result)
  }

  changeProductStatus(id: string): void {
    const product = this.getProductById(id)
    if (product?.id) {
      product.active = !product.active
      this.updateProduct(product)
    }
  }

  getProductById(id: string): Product | undefined {
    const item = this.state.list.find((product) => product.id === id)
    return Object.assign({}, item)
  }
}

const ProductsStore = new ProductsStoreService('products', {
  list: []
})

export { ProductsStore, type Product, type ProductsStoreState }

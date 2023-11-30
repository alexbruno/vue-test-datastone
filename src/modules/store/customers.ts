import { wuid } from '@jsweb/randkey'
import { StoreService } from '../services/store'
import type { Product } from './products'

interface Customer extends Product {
  phone: string
  email: string
  document: string
  products: Product['id'][]
}

interface CustomersStoreState {
  list: Customer[]
}

class CustomersStoreService extends StoreService<CustomersStoreState> {
  createCustomer(customer: Customer) {
    customer.id = wuid()
    customer.active = true
    customer.products = []

    const result = this.state.list.concat(customer)
    this.set('list', result)

    return customer
  }

  updateCustomer(customer: Customer): void {
    const result = this.state.list.map((item) => {
      return item.id === customer.id ? customer : item
    })
    this.set('list', result)
  }

  changeCustomerStatus(id: string): void {
    const customer = this.getCustomerById(id)
    if (customer?.id) {
      customer.active = !customer.active
      this.updateCustomer(customer)
    }
  }

  getCustomerById(id: string): Customer | undefined {
    const item = this.state.list.find((customer) => customer.id === id)
    return Object.assign({}, item)
  }
}

const CustomersStore = new CustomersStoreService('customers', {
  list: []
})

export { CustomersStore, type Customer, type CustomersStoreState }

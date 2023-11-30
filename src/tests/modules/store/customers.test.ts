import { describe, expect, it } from 'vitest'
import { CustomersStore, type Customer, type CustomersStoreState } from '@/modules/store/customers'
import { StoreService } from '@/modules/services/store'

describe('AppStore', () => {
  const init: CustomersStoreState = {
    list: []
  }
  const placeholder: Customer = {
    name: 'Customer',
    phone: '123',
    email: 'e@mail',
    document: '123'
  } as any

  it('should be an instance of StoreService', () => {
    expect(CustomersStore).toBeInstanceOf(StoreService)
  })

  it('should have a proper state', () => {
    expect(CustomersStore.state).toEqual(init)
  })

  describe('createCustomer', () => {
    it('should create a product', () => {
      expect(CustomersStore.state.list.length).toBe(0)

      CustomersStore.createCustomer(placeholder)

      expect(CustomersStore.state.list.length).toBe(1)
    })
  })

  describe('updateCustomer', () => {
    it('should update a product', () => {
      const customer = CustomersStore.state.list[0]
      customer.name = 'Customer TOP'

      CustomersStore.updateCustomer(customer)

      expect(CustomersStore.state.list[0].name).toBe('Customer TOP')
    })
  })

  describe('changeCustomerStatus', () => {
    it('should change product status', () => {
      const customer = CustomersStore.state.list[0]

      expect(customer.active).toBe(true)

      CustomersStore.changeCustomerStatus(customer.id)

      expect(CustomersStore.state.list[0].active).toBe(false)
    })
  })

  describe('getProductById', () => {
    it('should get a product by id', () => {
      const customer = CustomersStore.state.list[0]
      const result = CustomersStore.getCustomerById(customer.id)

      expect(result).toEqual(customer)
    })
  })
})

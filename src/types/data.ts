export interface Product {
  id: number
  name: string
  active: boolean
}

export interface Customer extends Product {
  document: string
  phone: string
  email: string
  products: Product['id'][]
}

import { type RemovableRef, useStorage } from '@vueuse/core'

class StoreService<T extends Object> {
  private store: RemovableRef<T>

  constructor(name: string, state: T) {
    this.store = useStorage<T>(name, state)
  }

  get state() {
    return this.store.value
  }

  get(key: keyof T) {
    return this.state[key]
  }

  set(key: keyof T, value: T[keyof T]) {
    if (key in this.state) this.store.value = Object.assign({}, this.state, { [key]: value })
  }
}

export { StoreService }

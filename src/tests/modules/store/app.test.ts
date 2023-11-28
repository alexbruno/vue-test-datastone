import { describe, expect, it } from 'vitest'
import { AppStore, type AppStoreState } from '@/modules/store/app'
import { StoreService } from '@/modules/services/store'

describe('AppStore', () => {
  const init: AppStoreState = { auth: false }

  it('should be an instance of StoreService', () => {
    expect(AppStore).toBeInstanceOf(StoreService)
  })

  it('should have a proper state', () => {
    expect(AppStore.state).toEqual(init)
  })
})

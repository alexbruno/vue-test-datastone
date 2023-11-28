import { beforeEach, describe, expect, it, suite } from 'vitest'
import { StoreService } from '@/modules/services/store'

describe('StoreService', () => {
  let test: StoreService<{ foo: string }>
  const init = { foo: 'bar' }

  beforeEach(() => {
    test = new StoreService('test', init)
  })

  it('should be a class', () => {
    expect(StoreService).toBeInstanceOf(Function)
  })

  it('should have a state property', () => {
    expect(test.state).toEqual(init)
  })

  suite('get', () => {
    it('should be a method', () => {
      expect(test.get).toBeInstanceOf(Function)
    })

    it('should return the value of the key inside state', () => {
      expect(test.get('foo')).toBe(test.state.foo)
    })

    it('should return undefined if the key does not exist', () => {
      expect(test.get('bar')).toBeUndefined()
    })
  })

  suite('set', () => {
    it('should be a method', () => {
      expect(test.set).toBeInstanceOf(Function)
    })

    it('should set the value of the key inside state', () => {
      test.set('foo', 'baz')
      expect(test.state.foo).toBe('baz')
    })

    it('should not set the value of the key if it does not exist', () => {
      test.set('bar', 'baz')
      expect(test.state.bar).toBeUndefined()
    })
  })
})

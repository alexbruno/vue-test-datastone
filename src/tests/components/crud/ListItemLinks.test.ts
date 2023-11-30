import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

import ListItemLinks from '@/components/crud/ListItemLinks.vue'
import router from '@/router'

describe('ListItemLinks', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(ListItemLinks, {
      props: {
        active: true,
        edit: 'edit'
      },
      global: {
        plugins: [router]
      }
    })
  })

  it('should render properly', () => {
    expect(wrapper.element.localName).toBe('nav')

    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
  })

  it('should render the edit link', () => {
    const editLink = wrapper.find('a[href="/edit"]')
    expect(editLink.text()).toBe('Editar')
  })

  describe('when active', () => {
    it('should render the active link', () => {
      const icon = wrapper.findComponent({ name: 'CheckIcon' })
      expect(icon.exists()).toBe(true)

      const activeLink = wrapper.find('a[href="#"]')
      expect(activeLink.text()).toBe('Ativo')
    })
  })

  describe('when inactive', () => {
    it('should render the inactive link', async () => {
      await wrapper.setProps({ active: false })

      const icon = wrapper.findComponent({ name: 'ClosedIcon' })
      expect(icon.exists()).toBe(true)

      const inactiveLink = wrapper.find('a[href="#"]')
      expect(inactiveLink.text()).toBe('Inativo')
    })
  })
})

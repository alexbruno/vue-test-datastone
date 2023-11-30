import { beforeEach, describe, expect, it } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'

import UpdateItemStatus from '@/components/crud/UpdateItemStatus.vue'

describe('UpdateItemStatus', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(UpdateItemStatus, {
      props: {
        modelValue: false
      }
    })
  })

  it('should render properly', () => {
    expect(wrapper.element.localName).toBe('fieldset')

    const p = wrapper.find('p')
    expect(p.text()).toBe('Status')

    const options = wrapper.find('.options')
    expect(options.element.localName).toBe('div')

    const trueLabel = wrapper.find('.true')
    const trueOption = trueLabel.find('input')
    const trueText = trueLabel.find('span')

    expect(trueOption.element.localName).toBe('input')
    expect(trueOption.attributes('type')).toBe('radio')
    expect(trueOption.attributes('name')).toBe('active')
    expect(trueOption.attributes('value')).toBe('true')
    expect(trueText.text()).toBe('Ativo')

    const falseLabel = wrapper.find('.false')
    const falseOption = falseLabel.find('input')
    const falseText = falseLabel.find('span')

    expect(falseOption.element.localName).toBe('input')
    expect(falseOption.attributes('type')).toBe('radio')
    expect(falseOption.attributes('name')).toBe('active')
    expect(falseOption.attributes('value')).toBe('false')
    expect(falseText.text()).toBe('Inativo')
  })

  it('should emit an event when the true option is selected', async () => {
    const trueOption = wrapper.find('.true > input')

    await trueOption.trigger('click')
    await trueOption.trigger('change')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')).toEqual([[true]])
  })

  it('should emit an event when the false option is selected', async () => {
    const falseOption = wrapper.find('.false > input')

    await falseOption.trigger('click')
    await falseOption.trigger('change')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')).toEqual([[false]])
  })
})

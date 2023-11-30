import inputmask from 'inputmask'
import type { Directive } from 'vue'

// Vue directive for input mask
// Usage: <input v-input-mask="['99.99.9999', ...]" />
const inputMaskDirective: Directive<any, any> = {
  mounted(el, binding) {
    inputmask({
      mask: binding.value,
      showMaskOnHover: false,
      showMaskOnFocus: false
    }).mask(el)
  },
  updated(el, binding) {
    inputmask({
      mask: binding.value,
      showMaskOnHover: false,
      showMaskOnFocus: false
    }).mask(el)
  }
}

export default inputMaskDirective

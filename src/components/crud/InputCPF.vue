<script lang="ts" setup>
import { validCPF, regexCPF } from '@/modules/utils/valid.cpf'
import { computed } from 'vue'

interface Props {
  modelValue?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

function onDocumentInput(e: Event) {
  const input = e.target as HTMLInputElement
  input.setCustomValidity('')
}

function onDocumentBlur(e: Event) {
  const input = e.target as HTMLInputElement

  if (!input.value) return undefined

  const valid = validCPF(input.value)

  if (!valid) input.setCustomValidity('CPF inválido')
  else input.setCustomValidity('')
}
</script>

<template>
  <input
    required
    type="tel"
    name="document"
    placeholder="CPF válido"
    :pattern="regexCPF.source"
    v-input-mask="['999.999.999-99']"
    v-model="value"
    @input="onDocumentInput"
    @blur="onDocumentBlur"
  />
</template>

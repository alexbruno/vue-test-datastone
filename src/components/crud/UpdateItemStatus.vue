<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  modelValue: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const active = computed<boolean>({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <fieldset>
    <p>Status</p>
    <div class="options">
      <label class="true">
        <input type="radio" name="active" :value="true" v-model="active" />
        <span>Ativo</span>
      </label>
      <label class="false">
        <input type="radio" name="active" :value="false" v-model="active" />
        <span>Inativo</span>
      </label>
    </div>
  </fieldset>
</template>

<style lang="pcss" scoped>
.options {
  @apply flex gap-4;

  label {
    @apply cursor-pointer flex items-center gap-1;
    @apply px-2 py-1 rounded-full;

    &.true {
      @apply text-green-700 bg-green-700/25;
    }

    &.false {
      @apply text-red-700 bg-red-700/10;
    }

    input {
      @apply text-inherit cursor-pointer ring-0;

      &:checked + span {
        @apply font-semibold;
      }
    }
  }
}
</style>

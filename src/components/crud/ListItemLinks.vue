<script lang="ts" setup>
import { Confirm } from 'notiflix'
import CheckIcon from '../icons/CheckIcon.vue'
import ClosedIcon from '../icons/ClosedIcon.vue'
import EditIcon from '../icons/EditIcon.vue'

interface Props {
  active: boolean
  edit: string
}
defineProps<Props>()

const emit = defineEmits(['status'])

function changeStatus() {
  Confirm.show('Atenção', 'Deseja realmente alterar o status deste registro?', 'Sim', 'Não', () =>
    emit('status')
  )
}
</script>

<template>
  <nav>
    <a href="#" @click.prevent="changeStatus" :class="{ active }">
      <CheckIcon v-if="active" />
      <ClosedIcon v-else />
      <span>{{ active ? 'Ativo' : 'Inativo' }}</span>
    </a>

    <RouterLink :to="edit" class="edit">
      <EditIcon />
      <span>Editar</span>
    </RouterLink>
  </nav>
</template>

<style lang="pcss" scoped>
nav {
  @apply mt-2 flex justify-between;

  a {
    @apply flex items-center gap-1 text-red-700;

    &.active {
      @apply text-green-700;
    }

    &.edit {
      @apply text-blue-700;
    }
  }
}
</style>

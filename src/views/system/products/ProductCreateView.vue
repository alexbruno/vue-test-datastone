<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ProductsStore } from '@/modules/store/products'
import CardBlock from '@/components/layout/CardBlock.vue'

const index = '/sistema/produtos'

const router = useRouter()

function submit(event: Event) {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const name = formData.get('name') as string

  ProductsStore.createProduct(name)
  router.push(index)
}
</script>

<template>
  <CardBlock title="Produtos" subtitle="Criar novo produto" class="card">
    <form autocomplete="off" @submit.prevent="submit">
      <label>
        <p>Nome do produto *</p>
        <input type="text" name="name" placeholder="Nome do produto" required />
      </label>

      <div class="actions">
        <button type="submit" class="btn primary">Salvar</button>
        <RouterLink :to="index" class="btn secondary">Voltar</RouterLink>
      </div>
    </form>
  </CardBlock>
</template>

<style lang="pcss" scoped>
.card {
  @apply w-full max-w-sm;
}

.actions {
  @apply flex justify-around mt-4;
}
</style>

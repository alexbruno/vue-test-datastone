<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Report } from 'notiflix'
import { ProductsStore, type Product } from '@/modules/store/products'
import CardBlock from '@/components/layout/CardBlock.vue'
import UpdateItemStatus from '@/components/crud/UpdateItemStatus.vue'

const index = '/sistema/produtos'

const router = useRouter()

const product = ref<Product>({
  id: '',
  name: '',
  active: true
})

function load() {
  const id = router.currentRoute.value.params.id as string
  const prod = ProductsStore.getProductById(id)

  if (prod?.id) product.value = prod
  else
    Report.failure('Produto não encontrado', 'Não foi possível encontrar o produto!', 'Ok', () =>
      router.push(index)
    )
}

function submit() {
  ProductsStore.updateProduct(product.value)
  router.push(index)
}

onMounted(load)
</script>

<template>
  <CardBlock title="Produtos" subtitle="Editar produto" class="card">
    <form @submit.prevent="submit">
      <label>
        <p>Nome do produto *</p>
        <input
          required
          type="text"
          name="name"
          placeholder="Nome do produto"
          v-model="product.name"
        />
      </label>

      <UpdateItemStatus v-model="product.active" />

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
  @apply flex justify-around mt-8;
}
</style>

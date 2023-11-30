<script lang="ts" setup>
import { ProductsStore } from '@/modules/store/products'
import CardBlock from '@/components/layout/CardBlock.vue'
import ListItemLinks from '@/components/crud/ListItemLinks.vue'

function changeStatus(id: string) {
  ProductsStore.changeProductStatus(id)
}
</script>

<template>
  <CardBlock title="Produtos" subtitle="Gerenciar lista de produtos" class="card">
    <ul>
      <li v-for="product in ProductsStore.state.list" :key="product.id">
        <strong>{{ product.name }}</strong>
        <ListItemLinks
          :active="product.active"
          :edit="`/sistema/produtos/editar/${product.id}`"
          @status="() => changeStatus(product.id)"
        />
      </li>
    </ul>

    <template v-slot:footer>
      <RouterLink to="/sistema/produtos/novo" class="btn secondary">+ Novo Produto</RouterLink>
    </template>
  </CardBlock>
</template>

<style lang="pcss" scoped>
.card {
  @apply w-full;
}

ul {
  @apply grid gap-4 md:grid-cols-3;

  li {
    @apply my-0 grid border border-blue-500 rounded-lg px-2 py-1;
  }
}
</style>

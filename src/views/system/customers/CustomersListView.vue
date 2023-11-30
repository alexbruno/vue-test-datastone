<script lang="ts" setup>
import { CustomersStore } from '@/modules/store/customers'
import CardBlock from '@/components/layout/CardBlock.vue'
import ListItemLinks from '@/components/crud/ListItemLinks.vue'
import ProductIcon from '@/components/icons/ProductIcon.vue'
</script>

<template>
  <CardBlock title="Clientes" subtitle="Gerenciar lista de clientes" class="card">
    <ul>
      <li v-for="customer in CustomersStore.state.list" :key="customer.id">
        <strong>{{ customer.name }}</strong>
        <p>Produtos associados: {{ customer.products.length }}</p>

        <ListItemLinks
          :active="customer.active"
          :edit="`/sistema/clientes/${customer.id}/editar`"
          @status="() => CustomersStore.changeCustomerStatus(customer.id)"
        >
          <RouterLink :to="`/sistema/clientes/${customer.id}/produtos`" class="products">
            <ProductIcon />
            <span>Produtos</span>
          </RouterLink>
        </ListItemLinks>
      </li>
    </ul>

    <template v-slot:footer>
      <RouterLink to="/sistema/clientes/novo" class="btn secondary">+ Novo Cliente</RouterLink>
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

.products {
  @apply flex items-center gap-1 text-orange-700;
}
</style>

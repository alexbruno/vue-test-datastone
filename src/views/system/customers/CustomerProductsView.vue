<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Report } from 'notiflix'
import { ProductsStore } from '@/modules/store/products'
import { CustomersStore, type Customer } from '@/modules/store/customers'
import CardBlock from '@/components/layout/CardBlock.vue'

const index = '/sistema/clientes'

const router = useRouter()

const customer = ref<Customer>({
  id: '',
  name: '',
  document: '',
  phone: '',
  email: '',
  active: true,
  products: []
})

const products = {
  selected: computed(() => customer.value.products.map((id) => ProductsStore.getProductById(id))),
  available: computed(() =>
    ProductsStore.state.list.filter(
      (product) => product.active && !customer.value.products.includes(product.id)
    )
  )
}

function save() {
  CustomersStore.updateCustomer(customer.value)
  router.push(index)
}

function load() {
  const id = router.currentRoute.value.params.id as string
  const data = CustomersStore.getCustomerById(id)

  if (!ProductsStore.state.list.length)
    Report.failure(
      'Nenhum produto cadastrado',
      'Cadastre um produto antes de associar ao cliente',
      'Ok',
      () => router.push('/sistema/produtos')
    )
  else if (data?.id) customer.value = data
  else
    Report.failure('Cliente não encontrado', 'Não foi possível encontrar o cliente!', 'Ok', () =>
      router.push(index)
    )
}

onMounted(load)
</script>

<template>
  <CardBlock title="Cliente + Produtos" subtitle="Associar produtos ao cliente" class="card">
    <div class="customer">
      <strong>{{ customer.name }}</strong>
      <p>CPF: {{ customer.document }}</p>
      <p>Celular: {{ customer.phone }}</p>
      <p>E-mail: {{ customer.email }}</p>
      <p>Status: {{ customer.active ? 'Ativo' : 'Inativo' }}</p>
    </div>

    <hr class="divider" />

    <p>Podutos do Cliente: {{ customer.products.length }}</p>
    <ul class="products">
      <TransitionGroup name="fade-slide">
        <li
          v-for="product in products.selected.value"
          :key="product?.id"
          :class="['text-primary', { inactive: !product?.active }]"
        >
          <label>
            <input
              type="checkbox"
              name="products"
              :value="product?.id"
              v-model="customer.products"
            />
            <strong>{{ product?.name }}</strong>
            <small>({{ product?.active ? 'Ativo' : 'Inativo' }})</small>
          </label>
        </li>
      </TransitionGroup>
    </ul>

    <hr class="divider" />

    <p>Produtos Disponíveis (ativos): {{ products.available.value.length }}</p>
    <ul class="products">
      <TransitionGroup name="fade-slide-reverse">
        <li v-for="product in products.available.value" :key="product.id">
          <label class="text-primary">
            <input
              type="checkbox"
              name="products"
              :value="product.id"
              v-model="customer.products"
            />
            <strong>{{ product.name }}</strong>
          </label>
        </li>
      </TransitionGroup>
    </ul>

    <div class="actions">
      <button type="button" class="btn primary" @click="save">Salvar</button>
      <RouterLink :to="index" class="btn secondary">Voltar</RouterLink>
    </div>
  </CardBlock>
</template>

<style lang="pcss" scoped>
.card {
  @apply w-full;
}

.divider {
  @apply my-4;
}

.products {
  @apply grid gap-2 md:gap-4 md:grid-cols-3;

  li {
    @apply my-0 border border-blue-500 rounded-lg px-2 py-1 hover:bg-blue-100;

    &.inactive {
      @apply opacity-50;
    }

    label {
      @apply cursor-pointer flex items-center gap-2;

      input {
        @apply cursor-pointer;
      }
    }
  }
}

.actions {
  @apply flex justify-around mt-8;
}
</style>

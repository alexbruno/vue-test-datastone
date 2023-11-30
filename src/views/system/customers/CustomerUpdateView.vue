<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Report } from 'notiflix'
import { CustomersStore, type Customer } from '@/modules/store/customers'
import CardBlock from '@/components/layout/CardBlock.vue'
import InputCPF from '@/components/crud/InputCPF.vue'
import UpdateItemStatus from '@/components/crud/UpdateItemStatus.vue'

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

function load() {
  const id = router.currentRoute.value.params.id as string
  const data = CustomersStore.getCustomerById(id)

  if (data?.id) customer.value = data
  else
    Report.failure('Cliente não encontrado', 'Não foi possível encontrar o cliente!', 'Ok', () =>
      router.push(index)
    )
}

function submit() {
  CustomersStore.updateCustomer(customer.value)
  router.push(index)
}

onMounted(load)
</script>

<template>
  <CardBlock title="Clientes" subtitle="Editar cliente" class="card">
    <form @submit.prevent="submit">
      <label>
        <p>Nome do cliente *</p>
        <input
          required
          type="text"
          name="name"
          placeholder="Nome do cliente"
          v-model="customer.name"
        />
      </label>

      <label>
        <p>CPF</p>
        <InputCPF v-model="customer.document" />
      </label>

      <label>
        <p>Celular</p>
        <input
          required
          type="tel"
          name="phone"
          placeholder="Celular de contato"
          v-input-mask="['(99) 99999-9999']"
          v-model="customer.phone"
        />
      </label>

      <label>
        <p>E-mail</p>
        <input
          required
          type="email"
          name="email"
          placeholder="E-mail de contato"
          v-model="customer.email"
        />
      </label>

      <UpdateItemStatus v-model="customer.active" />

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

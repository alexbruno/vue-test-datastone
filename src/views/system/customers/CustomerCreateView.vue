<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { CustomersStore } from '@/modules/store/customers'
import CardBlock from '@/components/layout/CardBlock.vue'
import InputCPF from '@/components/crud/InputCPF.vue'

const router = useRouter()

function submit(event: Event) {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries()) as any
  const customer = CustomersStore.createCustomer(data)
  const redirect = `/sistema/clientes/${customer.id}/produtos`

  router.push(redirect)
}
</script>

<template>
  <CardBlock title="Clientes" subtitle="Criar novo cliente" class="card">
    <form @submit.prevent="submit">
      <label>
        <p>Nome do cliente *</p>
        <input type="text" name="name" placeholder="Nome do cliente" required />
      </label>

      <label>
        <p>CPF</p>
        <InputCPF />
      </label>

      <label>
        <p>Celular</p>
        <input
          required
          type="tel"
          name="phone"
          placeholder="Celular de contato"
          v-input-mask="['(99) 99999-9999']"
        />
      </label>

      <label>
        <p>E-mail</p>
        <input type="email" name="email" placeholder="E-mail de contato" required />
      </label>

      <div class="actions">
        <button type="submit" class="btn primary">Salvar</button>
        <RouterLink to="/sistema/clientes" class="btn secondary">Voltar</RouterLink>
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

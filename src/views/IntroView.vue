<script lang="ts" setup>
import CardBlock from '@/components/layout/CardBlock.vue'
</script>

<template>
  <CardBlock title="Admin" subtitle="Demonstração para testes" class="intro">
    <p>
      Esta é uma demonstração criada para teste técnico de desenvolvimento web e visa simular um
      painel simples de cadastro para clientes e produtos digitais.
    </p>

    <template v-slot:footer>
      <nav class="links">
        <RouterLink to="/login" class="btn primary">Login</RouterLink>
        <RouterLink to="/sobre" class="btn secondary">Sobre</RouterLink>
      </nav>
    </template>
  </CardBlock>
</template>

<style lang="pcss" scoped>
.intro {
  @apply max-w-md;
}

.links {
  @apply flex justify-around;
}
</style>

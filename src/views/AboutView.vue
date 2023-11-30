<script lang="ts" setup>
import CardBlock from '@/components/layout/CardBlock.vue'

function back() {
  history.back()
}
</script>

<template>
  <CardBlock title="Sobre" subtitle="Dados técnicos" class="about">
    <ul>
      <li>⚙️ Vite + Vue 3 + TypeScript</li>
      <li>📚 PostCSS + TailwindCSS</li>
      <li>🔀 Vue Router</li>
      <li>💾 Local Storage</li>
      <li>✅ Vitest + Vue Test Utils</li>
      <li>🛠️ VueUse, ESLint, Prettier, ...</li>
      <li>📦 <a href="https://github.com/alexbruno/vue-test-simple-admin">alexbruno/vue-test-simple-admin</a></li>
      <li>👨🏻‍💻 <a href="https://alexbruno.dev">https://alexbruno.dev</a></li>
    </ul>

    <template v-slot:footer>
      <nav>
        <button type="button" class="btn primary" @click="back">Voltar</button>
      </nav>
    </template>
  </CardBlock>
</template>

<style lang="pcss" scoped>
nav {
  @apply text-center;
}
</style>

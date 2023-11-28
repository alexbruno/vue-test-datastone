<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { AppStore } from './modules/store/app'

const router = useRouter()

function logout() {
  AppStore.set('auth', false)
  router.push('/')
}
</script>

<template>
  <main class="content">
    <RouterView v-slot="{ Component }">
      <Transition name="fade-slide" mode="out-in" appear>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <Transition name="fade-slide" mode="out-in" appear>
    <nav v-if="AppStore.get('auth')">
      <RouterLink to="/sistema" class="btn secondary">Home</RouterLink>
      <RouterLink to="/sobre" class="btn secondary">Sobre</RouterLink>
      <button type="button" class="btn secondary" @click="logout">Sair</button>
    </nav>
  </Transition>
</template>

<style lang="pcss" scoped>
main {
  @apply flex flex-col items-center justify-center;
}

nav {
  @apply fixed bottom-8 left-1/2 transform -translate-x-1/2;
  @apply flex justify-center gap-4;
}
</style>

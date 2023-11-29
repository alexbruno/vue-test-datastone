<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { AppStore } from './modules/store/app'
import HomeIcon from './components/icons/HomeIcon.vue'
import ProductIcon from './components/icons/ProductIcon.vue'
import UsersIcon from './components/icons/UsersIcon.vue'
import InfoIcon from './components/icons/InfoIcon.vue'
import LogoutIcon from './components/icons/LogoutIcon.vue'

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
      <RouterLink to="/sistema" title="Início">
        <HomeIcon />
      </RouterLink>

      <RouterLink to="/produtos" title="Produtos">
        <ProductIcon />
      </RouterLink>

      <RouterLink to="/clientes" title="Clientes">
        <UsersIcon />
      </RouterLink>

      <RouterLink to="/sobre" title="Sobre">
        <InfoIcon />
      </RouterLink>

      <button type="button" @click="logout">
        <LogoutIcon />
      </button>
    </nav>
  </Transition>
</template>

<style lang="pcss" scoped>
main {
  @apply flex flex-col items-center justify-center;
}

nav {
  @apply fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10;
  @apply bg-white rounded-full shadow-lg px-5 py-4;
  @apply flex justify-center gap-8 text-3xl;

  a {
    @apply text-slate-500 hover:text-blue-900;

    &.router-link-active {
      @apply text-blue-700;
    }
  }

  button {
    @apply text-red-700;
  }
}
</style>

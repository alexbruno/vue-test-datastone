<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="content">
    <RouterView v-slot="{ Component }">
      <Transition name="fade-slide" mode="out-in" appear>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style lang="pcss" scoped>
main {
  @apply flex flex-col items-center justify-center;
}
</style>

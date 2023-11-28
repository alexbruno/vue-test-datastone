<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade-slide" mode="out-in" appear>
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

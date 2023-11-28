<script lang="ts" setup>
interface Props {
  title: string
  subtitle: string
}
defineProps<Props>()
</script>

<template>
  <section>
    <header>
      <h1 class="text-primary">{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </header>

    <div class="body">
      <slot />
    </div>

    <footer v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<style lang="pcss" scoped>
section {
  @apply bg-white rounded-3xl shadow-xl px-6 py-5;

  header {
    h1 {
      @apply text-5xl font-thin;
    }

    p {
      @apply text-xl font-thin my-1;
    }
  }

  .body {
    @apply text-lg mt-4;
  }

  footer {
    @apply mt-8;
  }
}
</style>

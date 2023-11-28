<script lang="ts" setup>
import CardBlock from '@/components/layout/CardBlock.vue'

const emit = defineEmits(['login', 'help'])

function help() {
  emit('help')
  alert(`Usuário: admin\nSenha: admin`)
}

function submit(event: Event) {
  const form = event.target as HTMLFormElement
  const data = new FormData(form)
  const user = data.get('user') as string
  const password = data.get('password') as string
  const message = `Você digitou:\nUsuário: ${user}\nSenha: ${password}`

  emit('login')
  alert(message)
}
</script>

<template>
  <CardBlock title="Login" subtitle="Digite nos campos o que aparece no placeholder" class="login">
    <form @submit.prevent="submit" @reset="help">
      <label>
        <p>Usuário</p>
        <input type="text" name="user" placeholder="admin" required />
      </label>

      <label>
        <p>Senha</p>
        <input type="password" name="password" placeholder="admin" required />
      </label>

      <div class="actions">
        <button type="submit" class="btn primary">Entrar</button>
        <button type="reset" class="btn secondary">Ajuda</button>
      </div>
    </form>
  </CardBlock>
</template>

<style lang="pcss" scoped>
.login {
  @apply max-w-sm;
}

form {
  @apply grid gap-4;

  .actions {
    @apply mt-4 flex justify-around;
  }
}
</style>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { Report } from 'notiflix'
import { AppStore } from '@/modules/store/app'
import CardBlock from '@/components/layout/CardBlock.vue'

const router = useRouter()
const emit = defineEmits(['success', 'error', 'help'])

function help() {
  emit('help')
  Report.info('Ajuda', 'Usuário: admin - Senha: admin', 'Ok')
}

function submit(event: Event) {
  const form = event.target as HTMLFormElement
  const data = new FormData(form)
  const user = data.get('user') as string
  const password = data.get('password') as string
  const ok = user === 'admin' && password === 'admin'

  if (ok) {
    emit('success')
    router.push('/sistema')
    AppStore.set('auth', true)
  } else {
    emit('error')
    Report.failure('Acesso negado', 'Usuário ou senha incorretos, tente novamente!', 'Ok')
  }
}
</script>

<template>
  <CardBlock title="Login" subtitle="Digite nos campos o que aparece no placeholder" class="login">
    <form autocomplete="off" @submit.prevent="submit" @reset="help">
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

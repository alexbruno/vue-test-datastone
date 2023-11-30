import './assets/main.pcss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import InputMask from './plugins/input-mask-directive'

const app = createApp(App)

app.use(router)

app.directive('input-mask', InputMask)

app.mount('#app')

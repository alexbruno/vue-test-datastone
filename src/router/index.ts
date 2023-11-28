import { createRouter, createWebHistory } from 'vue-router'
import IntroViewVue from '@/views/IntroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroViewVue
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/sistema',
      component: () => import('@/views/system/SystemView.vue'),
      children: [
        {
          path: '',
          name: 'sistema',
          component: () => import('@/views/system/HomeView.vue')
        }
      ]
    }
  ]
})

export default router

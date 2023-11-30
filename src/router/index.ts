import { createRouter, createWebHistory } from 'vue-router'
import IntroViewVue from '@/views/IntroView.vue'
import { AppStore } from '@/modules/store/app'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroViewVue,
      beforeEnter(to, from, next) {
        const auth = AppStore.get('auth')
        return auth ? next('/sistema') : next()
      }
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      beforeEnter(to, from, next) {
        const auth = AppStore.get('auth')
        return auth ? next('/sistema') : next()
      }
    },
    {
      path: '/sistema',
      component: () => import('@/views/system/SystemView.vue'),
      beforeEnter(to, from, next) {
        const auth = AppStore.get('auth')
        return auth ? next() : next('/')
      },
      children: [
        {
          path: '',
          name: 'sistema',
          component: () => import('@/views/system/HomeView.vue')
        },
        {
          path: 'produtos',
          name: 'produtos',
          component: () => import('@/views/system/products/ProductsListView.vue')
        },
        {
          path: 'produtos/novo',
          name: 'novo-produto',
          component: () => import('@/views/system/products/ProductCreateView.vue')
        },
        {
          path: 'produtos/editar/:id',
          name: 'editar-produto',
          component: () => import('@/views/system/products/ProductUpdateView.vue')
        }
      ]
    }
  ]
})

export default router

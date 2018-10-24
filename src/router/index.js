import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Layout from '@/view/layout/Layout.vue'
import User from '@/view/test'
import Manager from '@/view/Manager'
import { getToken } from '../utils/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/ui',
          component: User
        },
        {
          path: '/table',
          component: Manager
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else if (getToken()) {
    next()
  } else {
    next({ path: '/login' })
  }
})
export default router

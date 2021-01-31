import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { isSecure: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//adding route guard with a state prop
router.beforeEach((to, from, next) => {
  if (to.meta.isSecure && !store.getters.isAuthenticated) {
    next({
      path: '/'
    })
  }
  else {
    next()
  }  
})

export default router

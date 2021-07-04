import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Bar',
    name: 'Staff1',
    component: () => import('../views/Staff-bar.vue')
  },
  {
    path: '/Reception',
    name: 'Staff2',
    component: () => import('../views/Staff-reception.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/Userpanel.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

  {
    path: '/register',
    component: () => import('../views/Register.vue')
},
{
    path: '/login',
    component: () => import('../views/Login.vue')
},
{
    path: '/feed',
    component: () => import('../views/Feed.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

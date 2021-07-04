import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/staff1',
    name: 'Staff1',
    component: () => import('../views/Staff1.vue')
  },
  {
    path: '/staff2',
    name: 'Staff2',
    component: () => import('../views/Staff2.vue')
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

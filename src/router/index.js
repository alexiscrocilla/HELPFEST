import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/bar',
    name: 'Staff1',
    component: () => import('../views/Staff-bar.vue')
  },
  {
    path: '/Add-beer',
    name: 'BeerAdd',
    component: () => import('../views/AjoutBieres.vue')
  },
  {
    path: '/Add-Order',
    name: 'OrderAdd',
    component: () => import('../views/AjoutCommande.vue')
  },
  {
    path: '/Add-soft',
    name: 'SoftAdd',
    component: () => import('../views/AjoutSofts.vue')
  },
  {
    path: '/reception',
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

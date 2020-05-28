import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:userId-:title-:body',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/ejemplo/:nombre',
    name: 'Ejemplo',
    props: true,
    component: () => import('../views/Ejemplo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

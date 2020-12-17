import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes= [
  {
    path: '/inicio',
    name: 'Home',
    component: Home
  },
  {
    path:'/crearProducto',
    name:'crearproducto',
    component: () => import(/* webpackChunkName: "create" */ '../views/Createproducto.vue')

  },
  {
    path:'/consultarProducto',
    name:'consultarproducto',
    component: () => import(/* webpackChunkName: "get" */ '../views/GetProducto.vue')

  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

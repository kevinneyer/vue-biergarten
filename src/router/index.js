import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')

  },
  {
    path:'/beers/:id',
    name: 'ShowPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShowPage.vue')
  },
  {
    path:'/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsersPage.vue')
  },
  {
    path:'/users/:id',
    name: 'UserShow',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserShow.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

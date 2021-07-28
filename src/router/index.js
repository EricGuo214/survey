import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Survey1 from '@/components/Survey1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/survey1',
    name: 'Survey1',
    component: Survey1,
  },
  {
    path: '/Teyon',
    name: 'Teyon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Teyon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

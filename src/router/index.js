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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

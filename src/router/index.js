import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/element',
    name: 'element',
    component: () => import('@/views/Element.vue'),
    meta: { isLogin: true }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('@/views/Manage.vue'),
    // meta: { isLogin: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/header',
    name: 'Header',
    component: () => import('@/components/Header.vue')
  },
  {
    path: '/crops',
    name: 'Crops',
    component: () => import('@/views/Crops.vue')
  },
  {
    path: '/pests',
    name: 'Pests',
    component: () => import('@/views/Pests.vue')
  },
  {
    path: '/liangshizuowu',
    name: 'Liangshizuowu',
    component: () => import('@/views/liangshizuowu.vue')
  },
  {
    path: '/shucaizuowu',
    name: 'Shucaizuowu',
    component: () => import('@/views/shucaizuowu.vue')
  },
  {
    path: '/huluobu',
    name: 'Huluobu',
    component: () => import('@/views/allcrops/huluobu.vue')
  },





  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/indexPage.vue'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import FetchView from '../views/FetchView.vue'
// import Fetch from './components/fetch.vue'
// import Fetch from '../components/fetch.vue'




const routes = [
  {
    path: '/',
    name: 'In',
    component: Index
  },
  {
    path: '/goHome',
    name: 'goHome',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: FetchView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

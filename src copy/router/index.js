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
    path: '/todo',
    name: 'todo',
    component: () => import('../views/TodoListView.vue')
  },
  {
    path: '/todoLocal',
    name: 'todoLocal',
    component: () => import('../views/TodoListView(LocalStorage).vue')
  },
  {
    path: '/PubSub',
    name: 'PubSub',
    component: () => import('../views/PubSub.vue')
  },
  {
    path: '/Count',
    name: 'CountView',
    component: () => import('../views/CountView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router

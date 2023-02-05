import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
import MyAbout from '../pages/MyAbout'
import MyNews from '../pages/MyNews'
import MyMessage from '../pages/MyMessage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'MyHome',
    component: MyHome,
    children:[
      {
        path: 'news',
        name: 'MyNews',
        component: MyNews,
      },
      {
        path: 'message',
        name: 'MyMessage',
        component: MyMessage,
      }
    ]
  },
  {
    path: '/about',
    name: 'MyAbout',
    component: MyAbout
  },
]

const router = new VueRouter({
  routes
})

export default router

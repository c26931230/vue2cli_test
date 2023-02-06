import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
import MyAbout from '../pages/MyAbout'
import MyNews from '../pages/MyNews'
import MyMessage from '../pages/MyMessage'
import MyDetail from '../pages/MyDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: MyHome,
    children: [
      {
        path: 'news',
        component: MyNews,
      },
      {
        path: 'message',
        component: MyMessage,
        children: [
          {
            name:'detail',
            path: 'detail/:id/:title',
            component: MyDetail,
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name:'about',
    component: MyAbout
  },
]

const router = new VueRouter({
  routes
})

export default router

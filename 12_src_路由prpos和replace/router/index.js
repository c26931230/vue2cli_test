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
            // props第一種寫法，值為對象，該對象中所有的key-value都會以props的形式傳給detail組件。
            // props:{a:1,b:'hello'}

            // props第二種寫法，值為布林值，如果是true，就會把該路由收到的params參數，以props的形式傳給detail組件。
            // props:true,

            //props第三種寫法，值為函數 
            // props($route){
            //   return {id:$route.params.id,title:$route.params.title}
            // }
            // 連續解構附值寫法(不易閱讀)
            props({params:{id,title}}){
              return {id:id,title:title}
            }
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

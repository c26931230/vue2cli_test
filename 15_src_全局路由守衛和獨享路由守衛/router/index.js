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
    name: '/home',
    meta: { title: 'home' },
    component: MyHome,
    children: [
      {
        path: 'news',
        name: 'news',
        meta: { title: 'mews', isAuth: true },
        component: MyNews,
        // 獨享路由守衛
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem("school") === 'NKUHT1') {
            next()
          } else {
            alert('錯誤名稱')
          }
        }
      },
      {
        path: 'message',
        name: 'message',
        meta: { title: 'message', isAuth: true },
        component: MyMessage,
        children: [
          {
            name: 'detail',
            path: 'detail/:id/:title',
            meta: { title: 'detail' },
            component: MyDetail,
            props({ params: { id, title } }) {
              return { id: id, title: title }
            }
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'about' },
    component: MyAbout
  },
]

const router = new VueRouter({
  routes
})
// 全局前置路由守衛-初始化被調用和每次路由切換前被調用
// router.beforeEach((to,from,next)=>{
//   if(to.meta.isAuth){//判斷是否需要驗證權限
//     if(localStorage.getItem("school") === 'NKUHT'){ 
//       next()
//     }else{
//       alert('錯誤名稱')
//     }
//   }else{
//     next()
//   }
// })

// 全局後置路由守衛-初始化被調用和每次路由切換後被調用
router.afterEach((to) => {
  document.title = to.meta.title || '練習vue'

})

export default router

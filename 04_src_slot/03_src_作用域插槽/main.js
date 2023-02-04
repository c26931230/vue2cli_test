import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// 引入 Vue resource
import VueResource from 'vue-resource'
// 關閉Vue生產提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')

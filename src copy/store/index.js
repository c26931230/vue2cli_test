import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 儲存數據 =>像data
  state: {
    sum:0
  },
  // state中的數據加工 =>像computed
  getters: {
    bigSum(state){
      return state.sum * 10
    }
  },
  mutations: {
    JIA(state,value){
      // console.log('mutations JIA 被調用',state,value);
      state.sum += value
    },
    JIAN(state,value){
      // console.log('mutations JIAN 被調用',state,value);
      state.sum -= value
    },
    
  },
  actions: {
    // jia(context,value){
    //   // console.log('action中的jia被調用了',context,value);
    //   context.commit('JIA',value)
    // },
    // jian(context,value){
    //   // console.log('action中的jian被調用了',context,value);
    //   context.commit('JIAN',value)
    // },
    jiaOdd(context,value){
      if(context.state.sum % 2){
        context.commit('JIA',value)
      }
    }

  },
  modules: {
  }
})

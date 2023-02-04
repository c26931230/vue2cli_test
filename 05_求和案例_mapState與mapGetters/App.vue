<template>
  <div class="count">
        <h1>目前Sum{{ sum }}</h1>
        <h3>目前Sum的10倍: {{ bigSum }}</h3>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="decrementOdd">奇數再加</button>
        <hr>
        <h3>{{ school }}</h3>
        <h3>{{ subject }}</h3>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: 'App',
  data(){
    return{
        n:1
    }
  },
  computed:{
    // 親自寫計算屬性
    // sum(){
    //   return this.$store.state.sum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },
    // bigSum(){
    //   return this.$store.getters.bigSum
    // },
    // 借助mapState/mapGetters生成計算屬性，從state/getters中讀取數據。(對象寫法)
    // 開發者工具出現在vuex bindings
    // ...mapState({sum:'sum',school:'school',subject:'subject'})
    // ...mapGetters({bigSum:'bigSum',}),
    // =================================================================
    // 借助mapState/mapGetters生成計算屬性，從state/getters中讀取數據。(數組寫法) 
    ...mapState(['sum','school','subject']),
    ...mapGetters(['bigSum'])
  } ,   
  methods:{
    increment(){
        this.$store.commit('JIA',this.n)
    },
    decrement(){
      this.$store.commit('JIAN',this.n)
    },
    decrementOdd(){
      this.$store.dispatch('jiaOdd',this.n)
    },
  },
  mounted() {
    
  },  
}
</script>


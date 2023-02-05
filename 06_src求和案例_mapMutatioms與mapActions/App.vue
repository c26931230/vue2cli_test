<template>
  <div class="count">
        <h1>目前Sum{{ sum }}</h1>
        <h3>目前Sum的10倍: {{ bigSum }}</h3>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">奇數再加</button>
        <hr>
        <h3>{{ school }}</h3>
        <h3>{{ subject }}</h3>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: 'App',
  data(){
    return{
        n:1
    }
  },
  computed:{
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
    // ===親自寫===
    // increment(){
    //     this.$store.commit('JIA',this.n)
    // },
    // decrement(){
    //   this.$store.commit('JIAN',this.n)
    // },

    // ===借助mapMutations生成對應的方法，方法中會調用commit去聯繫mutations(對象寫法)===
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    // ===借助mapMutations生成對應的方法，方法中會調用commit去聯繫mutations(數組寫法)===
    // ...mapMutations(['JIA','JIAN']),

    // ==========================
    // ===親自寫===
    // incrementOdd(){
    //   this.$store.dispatch('jiaOdd',this.n)
    // },

    // ===借助mapActions生成對應的方法，方法中會調用dispatch去聯繫actions(對象寫法)===
    ...mapActions({incrementOdd:'jiaOdd'}),

     // ===借助mapActions生成對應的方法，方法中會調用dispatch去聯繫actions(對象寫法)===
    // ...mapActions(['jiaOdd']),
  },
}
</script>


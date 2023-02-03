<template>
  <div class="count">
        <h1>目前Sum{{ $store.state.sum }}</h1>
        <h3>目前Sum的10倍: {{ $store.getters.bigSum }}</h3>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="decrementOdd">奇數再加</button>
  </div>
</template>

<script>

export default {
  name: 'CountView',
  data(){
    return{
        n:1
    }
  },    
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

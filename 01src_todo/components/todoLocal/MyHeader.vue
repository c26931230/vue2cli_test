<template>
  <div class="header">
    <input type="text" placeholder="請輸入項目"  @keyup.enter="add" v-model="item">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: 'MyHeader',
  props:['addTodo'],
  data() {
    return {
      item:""
    }
  },
  methods:{
    add(e){
      const todoObj = {id:nanoid(),title:e.target.value,isDone:false}
       this.addTodo(todoObj);
       this.item = ""
    }
  },
  mounted() {
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.header{
  width: 100%;
  input{
    width: 100%;
    border: 3px solid $main5;
    outline: none;
    border-radius: 5px;
    padding: 10px;
    &:focus{
      border: 3px solid $main8;
    }
  }
}
</style>

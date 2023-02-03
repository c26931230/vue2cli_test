<template>
  <div class="footer" v-show="total">
    <div class="item">
      <input type="checkbox" v-model="isAll">
      <span>已完成{{doneTotal}}</span>/全部{{total}}
    </div>
    <button @click="clearAll">清除已完成</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props:['todos','checkAllTodo','clearAllTodo'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      return this.todos.reduce((pre,current)=>pre + (current.isDone ? 1 : 0),0)
    },
    isAll:{
      get(){
        return this.total === this.doneTotal && this.total > 0
      },
      set(checked){
        this.checkAllTodo(checked)
      }
    }
  },
  methods:{
    clearAll(){
      this.clearAllTodo();
    }
  }
  
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
.footer{
    margin: 30px 0;
    border: 3px solid $main5;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
}
.item{
  width: 50%;
  display: block;
}
button {
  background-color: $main2;
  width: fit-content;
  flex-grow: 2;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: $main3;
  }
  }
</style>

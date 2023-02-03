<template>
  <div class="wrapper">
      <div class="todo">
        <h2>LocalStorage</h2>
      <MyHeader :addTodo="addTodo"/>   
      <MyList :todos="todos"/>
      <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
    </div>
  </div>
</template>
<script>
import MyHeader from '@/components/todoLocal/MyHeader.vue'
import MyList from '@/components/todoLocal/MyList.vue'
import MyFooter from '@/components/todoLocal/MyFooter.vue'
export default{
  name: 'TodoListView',
  components: { MyHeader,MyList,MyFooter},
  data() {
    return {
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    addTodo(data){
      this.todos.unshift(data)
    },
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.isDone = !todo.isDone
      })
    },
    // updateTodo(id,val){ 
    //   console.log('@',val);
    //   this.todos.forEach((todo)=>{
    //     if(todo.id === id) todo.title = val
    //   })
    // },
    removeTodo(id){
      this.todos = this.todos.filter(todo=>todo.id !== id)
    },
    checkAllTodo(done){
        this.todos.forEach((todo)=>{
          todo.isDone = done
        })
    },
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.isDone
      })
    }
  },
  watch:{
    todos(value){
      console.log('watch',value);
        localStorage.setItem('todos',JSON.stringify(value))
    }
  },
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('removeTodo',this.removeTodo)
    // this.$bus.$on('updateTodo',this.updateTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    this.$bus.$off('removeTodo')
    // this.$bus.$off('updateTodo')
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}
h2{
    text-align: center;
    margin-bottom: 20px;
}
    .todo{
      padding: 30px;
      border: 3px solid $main5;
      border-radius: 5px;
      width: 400px;
      min-height: 400px;
      background-color: $main4;
      position: relative;
    }
</style>
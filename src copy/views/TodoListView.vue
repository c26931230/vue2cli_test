<template>
  <div class="wrapper">
    <div class="todo">
      <MyHeader :addTodo="addTodo"/>
      <MyList :todos="todos"/>
      <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
    </div>
  </div>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue'
import MyList from '@/components/MyList.vue'
import MyFooter from '@/components/MyFooter.vue'
export default{
  name: 'TodoListView',
  components: { MyHeader,MyList,MyFooter},
  data() {
    return {
      todos:[
            {id:'001',title:'eat',isDone:true},
            {id:'002',title:'sleep',isDone:false},
            {id:'003',title:'coffee',isDone:true},
        ]
    }
  },
  methods: {
    addTodo(data){
      this.todos.push(data)
    },
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.isDone = !todo.isDone
      })
    },
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
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('removeTodo',this.removeTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    this.$bus.$off('removeTodo')
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
<template>
  <div class="itemBox">
    <div class="item">
      <input type="checkbox" :checked="todo.isDone" @change="handelCheck(todo.id)" :id="todo.id">
      <label :for="todo.id">{{ todo.title }}</label>
    </div>
    <button @click="deleteItem(todo.id)">刪除</button>
  </div>
</template>

<script>

export default {
  name: 'ListItem',
  props: ['todo'],
  methods: {
    handelCheck(id) {
      // this.checkTodo(id);
      this.$bus.$emit('checkTodo',id)
    },
    deleteItem(id) {
      // this.removeTodo(id)
      this.$bus.$emit('removeTodo',id)
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.itemBox {
  margin-bottom: 30px;
  color: $main3;
  font-size: 20px;
  width: 100%;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .item{
    width: 70%;
  }
  button {
  background-color: $main2;
  width: 20%;
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
}


</style>

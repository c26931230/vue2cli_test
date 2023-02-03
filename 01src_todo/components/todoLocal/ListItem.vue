<template>
  <div class="itemBox">
    <div class="item">
      <input type="checkbox" :checked="todo.isDone" @change="handelCheck(todo.id)" :id="todo.id">
      <input type="text" :value="todo.title" v-show="todo.isEdit" class="name" @blur="handelBlur(todo,$event)" ref=inputTitle>
      <label :for="todo.id" v-show="!todo.isEdit" class="name">{{ todo.title }}</label>
    </div>
    <button class="editBtn" @click="handelEdit(todo)" v-show="!todo.isEdit">編輯</button>
    <button class="delBtn" @click="deleteItem(todo.id)">刪除</button>
  </div>
</template>

<script>

export default {
  name: 'ListItem',
  props: ['todo'],
  methods: {
    handelCheck(id) {
      this.$bus.$emit('checkTodo', id)
    },
    deleteItem(id) {
      this.$bus.$emit('removeTodo', id)
    },
    handelEdit(todo) {
      if(todo.isEdit != 'undefine'){
        this.$set(todo,'isEdit',true)
      }else{
        todo.isEdit = true
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    handelBlur(todo,e) {
      todo.isEdit = false
      console.log(e);
      // console.log('updateTodo', todo.id,e.target.value);
      // this.$bus.$emit('updateTodo', todo.id,e.target.value)
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.itemBox {
  padding: 20px 10px;
  color: $main3;
  font-size: 20px;
  width: 100%;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .item {
    width: 60%;

    .name {
      width: 80%;
      margin-left: 10px;
      padding: 10px;
    }
  }

  button {
    background-color: $main2;
    width: 18%;
    border: none;
    color: white;
    padding: 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    display: none;
    cursor: pointer;

    &:hover {
      background-color: $main3;
    }
  }

  .editBtn {
    background-color: $main7;

    &:hover {
      background-color: $main8;
      color: $main5;
    }
  }
}

.itemBox:hover {
  background-color: $main1;

  button {
    display: block;
  }
}
</style>

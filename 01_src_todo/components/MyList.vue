<template>
  <div class="list">
    <ListItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import ListItem from '@/components/todo/ListItem.vue'
export default {
  name: 'MyList',
  components:{ListItem},
  props:['todos'],
  data() {
    return {
        
    }
  },
  mounted() {
    
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
    .list{
        width: 100%;
        margin: 30px 0;
        border: 3px solid $main5;
        border-radius: 5px;
        padding: 30px;
    }
</style>

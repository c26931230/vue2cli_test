<template>
  <div class="container">
    <searchBox/>
    <userList/>
  </div>
</template>
<script>
// import axios from 'axios'
import searchBox from './components/searchBox.vue';
import userList from './components/userList.vue';
export default{
  name:'App',
  components:{searchBox,userList}
} 
</script>
<style lang="scss">
@import "assets/scss/main.scss";
@import '~bootstrap/scss/bootstrap';  
</style>

<template>
  <div class="box">
    <CountItem/>
    <hr>
    <PersonList/>
  </div>
</template>

<script>
import CountItem from './components/CountItem.vue'
import PersonList from './components/PersonList.vue'
export default {
  name: 'App',
  components:{CountItem,PersonList}
}
</script>


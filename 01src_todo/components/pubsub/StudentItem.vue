<template>
  <div>
    <h2>學生名稱:{{name}}</h2>
    <h2>學生地址:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'StudentItem',
  data() {
    return {
      name: 'Mandy',
      address:'新北'
    }
  },
  mounted(){
    pubsub.publish('hello','你好')
  },
  beforeDestroy(){
    pubsub.unpublish()
  }
}
</script>
<style scoped lang="scss">
  div{
    border: 1px solid darkcyan;
    padding: 30px;
    margin-bottom: 30px;
    width: 300px;
    h2{
      font-size: 20px;
      color: darkblue;
    }
  }
</style>

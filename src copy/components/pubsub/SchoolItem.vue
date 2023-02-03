<template>
  <div @click="showName">
    <h2>學校名稱:{{name}}</h2>
    <h2>學校地址:{{address}}</h2>
  </div>
</template>

<script>
// import {showName} from '@/assets/js/mixin'
import pubsub from 'pubsub-js'
export default {
  name: 'SchoolItem',
  data() {
    return {
      name: 'NKUHT',
      address:'高雄'
    }
  },
  mounted() {
    this.pubId = pubsub.subscribe('hello',function(msgName,data){
      console.log('有人發布消息',data)
    })
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubId)
  }
}
</script>
<style scoped>
  div{
    border: 1px solid darkcyan;
    padding: 30px;
    margin-bottom: 30px;
    width: 300px;
  }
  h2{
    font-size: 20px;
  }
</style>

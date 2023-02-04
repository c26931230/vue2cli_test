<template>
  <div class="container">
    <div class="row">
      <MyCategory title="美食" :listData="foods">
        <img src="https://picsum.photos/300/200/?random=10" slot="center">
        <p slot="footer">bottom</p>
      </MyCategory>
      <MyCategory title="遊戲" :listData="games"/>
      <MyCategory title="電影" :listData="films"/>
    </div>
  </div>
</template>
<script>
import MyCategory from './components/MyCategory.vue';
export default{
  name:'App',
  components:{MyCategory},
  data() {
    return {
      foods:['咖啡','燒烤','火鍋','馬鈴薯'],
      games:['game1','game2','game3','game4'],
      films:['<film1>','<film2>','<film3>','<film4>'],
    }
  },
} 
</script>
<style lang="scss">
@import '~bootstrap/scss/bootstrap';  
img{
  width: 100%;
}
</style>

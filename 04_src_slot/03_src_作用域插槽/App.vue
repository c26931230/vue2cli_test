<template>
  <div class="container">
    <div class="row">
      <MyCategory title="遊戲">
        <!-- 寫法1(最佳) -->
        <template scope="{games}">
          <ul>
            <li v-for="(item, index) in games" :key="index">{{ item }}</li>
          </ul>
        </template>
      </MyCategory>
      <MyCategory title="遊戲">
        <!-- 寫法2 -->
        <template scope="a">
          <ol>
            <li v-for="(item, index) in a.games" :key="index">{{ item }}</li>
          </ol>
        </template>
      </MyCategory>
      <MyCategory title="遊戲">
        <!-- 寫法3 -->
        <template slot-scope="{games}">
          <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
        </template>
      </MyCategory>
    </div>
  </div>
</template>
<script>
import MyCategory from './components/MyCategory.vue';
export default {
  name: 'App',
  components: { MyCategory },
} 
</script>
<style lang="scss">
@import '~bootstrap/scss/bootstrap';

img {
  width: 100%;
}
</style>

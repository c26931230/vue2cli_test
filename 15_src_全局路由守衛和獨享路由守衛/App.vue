<template>
  <div class="container">
    <MyBanner/>
    <div class="row">
      <div class="col-xs-offset-2 col-2">
        <div class="list-group">
          <router-link  :to="{ name: 'about' }" class="list-group-item" active-class="active">About</router-link>
          <router-link  to="/home" class="list-group-item" active-class="active">Home</router-link>
        </div>
      </div>
      <div class="col-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyBanner from './components/MyBanner.vue'
export default {
  name: 'App',
  components:{MyBanner},
}
</script>
<style lang="scss">
@import '~bootstrap/scss/bootstrap';

.banner {
  padding: 30px;
  border-bottom: 1px solid blue;
  margin: 20px;
}
.btn-group{
  margin-bottom: 20px;
}
</style>

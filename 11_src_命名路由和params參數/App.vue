<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-2">
        <div class="list-group">
          <router-link :to="{name:'about'}" class="list-group-item" active-class="active">About</router-link>
          <router-link to="/home" class="list-group-item" active-class="active">Home</router-link>
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
export default {
  name: 'App',
}
</script>
<style lang="scss">
@import '~bootstrap/scss/bootstrap';  
</style>

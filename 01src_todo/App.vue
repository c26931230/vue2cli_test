<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/todo">TodoList</router-link>
    <router-link to="/todoLocal">todoLocal</router-link>
    <router-link to="/PubSub">PubSub</router-link>
    <router-link to="/Count">Count</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
// @import "assets/scss/main.scss";
// #app{
//     background-color: $main6;
//     height: 100vh;
// }
</style>

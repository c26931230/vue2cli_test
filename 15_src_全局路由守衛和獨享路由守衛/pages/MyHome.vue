<template>
    <div class="home">
        <h1>home</h1>
        <ul class="nav">
            <li class="nav-item">
                <router-link to="/home/news" class="nav-link" active-class="active">News</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/home/message" class="nav-link" active-class="active">Message</router-link>
            </li>
        </ul>
        <!-- include是組件名 -->
        <!-- 緩存多個 -->
        <keep-alive :include="['MyNews','MyMessage']">
        <!-- 緩存1個 -->
        <!-- <keep-alive include="MyNews"> -->
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
export default {
    name: 'MyHome',
    mounted() {
        console.log(this.$route);
    },
}

</script>
<style lang="scss">

</style>
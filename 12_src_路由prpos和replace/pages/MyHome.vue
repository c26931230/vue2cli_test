<template>
    <div class="home">
        <h1>home</h1>
        <ul class="nav nav-tabs list-group">
            <li>
                <router-link to="/home/news" class="list-group-item" active-class="active">News</router-link>
            </li>
            <li>
                <router-link to="/home/message" class="list-group-item" active-class="active">Message</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'MyHome',
}

</script>
<style lang="scss">

</style>
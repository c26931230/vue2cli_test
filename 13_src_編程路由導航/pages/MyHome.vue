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
<template>
    <div class="msgs">
        <ul class="nav nav-tabs">
            <li v-for="i in msgList" :key="i.id">
                <!-- 跳轉路由並帶參數 to字串寫法 -->
                <!-- <router-link :to="`/home/message/detail?id=${i.id}&title=${i.title}`">{{ i.title }}</router-link> -->
                <!-- 跳轉路由並帶參數 to對象寫法 -->
                <router-link :to="{
                    path:'/home/message/detail',
                    query:{
                        id:i.id,
                        title:i.title
                    }
                }">
                    {{ i.title }}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    name: 'MyMessage',
    data() {
        return {
            msgList:[
                {id:'001',title:'title01'},
                {id:'002',title:'title02'},
                {id:'003',title:'title03'},
            ]
        }
    },

}

</script>
<style lang="scss">

</style>
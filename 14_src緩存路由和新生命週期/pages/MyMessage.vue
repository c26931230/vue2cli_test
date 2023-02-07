<template>
    <div class="msgs">
        <ul>
            <li v-for="i in msgList" :key="i.id">
                <router-link :to="{
                    name: 'detail',
                    params: {
                        id: i.id,
                        title: i.title
                    }
                }">
                    {{ i.title }}
                </router-link>
                <button @click="pushShow(i)" class="btn btn-warning">push</button>
                <button @click="replaceShow(i)" class="btn btn-info">replace</button>
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
            msgList: [
                { id: '001', title: 'title01' },
                { id: '002', title: 'title02' },
                { id: '003', title: 'title03' },
            ]
        }
    },
    methods: {
        pushShow(i) {
            this.$router.push({
                name: 'detail',
                params: {
                    id: i.id,
                    title: i.title
                }
            })
        },
        replaceShow(i) {
            this.$router.replace({
                name: 'detail',
                params: {
                    id: i.id,
                    title: i.title
                }
            })
        },
    },

}

</script>
<style lang="scss">
li{
    padding: 10px;
    button{
        margin-right: 5px;
    }
}
</style>
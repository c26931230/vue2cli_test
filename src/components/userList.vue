<template>
    <div class="row">
        <!-- 展示用戶列表 -->
        <div v-show="info.users.length" class="card col-4" v-for=" i in info.users" :key="i.login"> 
            <a :href="i.html_url" target="_blank">
                <img :src="i.avatar_url">
                <p class="card-text">{{i.login}}</p>
            </a>
        </div>
        <!-- welcome -->
        <div v-show="info.isFirst">歡迎使用</div>
        <!-- 加載中 -->
        <div v-show="info.isLoading">加載中...</div>
        <!-- 展示錯誤訊息 -->
        <div v-show="info.errMsg">{{ info.errMsg }}</div>
    </div>
</template>
<script>
export default{
    name:'userList',
    data() {
        return {
            info:{
                isFirst:true,
                isLoading:false,
                errMsg:'',
                users:[]
            }
        }
    },
    mounted(){
        this.$bus.$on('updateListData',(dataObj)=>{
            this.info = {...this.info,...dataObj}
        })
    }
}
</script>
<style>
.card{
    padding: 10px;
    /* margin: 10px; */
}
img{
    width: 100%;
}
</style>
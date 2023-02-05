<template>
    <div class="personList">
        <h1>人員列表</h1>
        <input type="text" placeholder="請輸入名子" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <h3 style="color:green">Count 組件求和為:{{sum}}</h3>
    </div>
</template>
<script>
import { nanoid } from 'nanoid';

import { mapState } from 'vuex'
export default{
    name:'PersonList',
    data(){
        return{
            name:''
        }
    },
    computed:{
        personList(){
            return this. $store.state.personList
        },
        ...mapState(['sum']),
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.name=""
            this.$store.commit('ADD_PERSON',personObj)
            // console.log(personObj);
        }
    }
}
</script>
<style lang="scss">

</style>
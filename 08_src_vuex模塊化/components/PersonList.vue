<template>
    <div class="personList">
        <h1>人員列表</h1>
        <input type="text" placeholder="請輸入名子" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加姓王的人</button>
        <button @click="addServerPerson">添加隨機</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <h3 style="color:green">Count 組件求和為:{{sum}}</h3>
        <h3>列表中第一個人的名字:{{firstPersonName}}</h3>
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
            return this. $store.state.personAbout.personList
        },
        ...mapState('countAbout',['sum']),
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.name=""
            this.$store.commit('personAbout/ADD_PERSON',personObj)
        },
        addWang(){
            const personObj = {id:nanoid(),name:this.name}
            this.name=""
            this.$store.dispatch('personAbout/addPersonWang',personObj)
        },
        addServerPerson(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    }
}
</script>
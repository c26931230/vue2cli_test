<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github</h3>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="enter the name you search"
                aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="keyword">
            <button class="btn btn-primary" type="button" id="button-addon1" @click="searchUsers">Search</button>
        </div>
    </section>
</template>
<script>
export default {
    name: 'SearchBox',
    data() {
        return {
            keyword:''
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:"",users:[]})
            this.$http.get(`http://api.github.com/search/users?q=${this.keyword}`).then(
                res =>{
                    this.$bus.$emit('updateListData',{isLoading:false,errMsg:"",users:res.data.items})
                },
                error=>{
                    this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
                }
            )
        }
    }
}
</script>
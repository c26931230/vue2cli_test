<template>
    <div>
        <h1>detail</h1>
        <p>{{ $route.params.id }}</p>
        <p>{{ $route.params.title }}</p>
        <!-- <p>a:{{a}}</p>
        <p>b:{{b}}</p> -->
        <p>id:{{ id }}</p>
        <p>title:{{ title }}</p>
    </div>
</template>
<script>
export default{
    name:'MyDetail',
    // props:['a','b'],
    props:['id','title'],
    mounted() {
        console.log(this.$route);
    },
}
</script>
<style lang="scss">

</style>
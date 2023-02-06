<template>
    <div>
        <h1>detail</h1>
        <p>{{ $route.params.id }}</p>
        <p>{{ $route.params.title }}</p>
    </div>
</template>
<script>
export default{
    name:'MyDetail',
    mounted() {
        console.log(this.$route);
    },
}
</script>
<style lang="scss">

</style>
<template>
    <div>
        <h1>detail</h1>
        <p>{{ $route.query.id }}</p>
        <p>{{ $route.query.title }}</p>
    </div>
</template>
<script>
export default {
    name: 'MyMessage1',
    data() {
        return {
            
        }
    },
    mounted() {
        console.log('@',this);
    },

}

</script>
<style lang="scss">

</style>
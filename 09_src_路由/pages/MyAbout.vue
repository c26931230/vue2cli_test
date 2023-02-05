<template>
<div class="about">
<h1>About</h1>
</div>
</template>
<script>
export default{
    name:'MyAbout',
    beforeDestroy(){
        console.log('About 即將銷毀');
    },
    mounted(){
        console.log('About掛載完畢');
    }
}
</script>
<style lang="scss">

</style>
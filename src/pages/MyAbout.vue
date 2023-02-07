<template>
<div class="about">
<h1>About</h1>
</div>
</template>
<script>
export default{
    name:'MyAbout',
    mounted(){},
    // 通過路由規則進入組件被調用
    beforeRouteEnter(to,from,next){
        console.log(to,from,'beforeRouteEnter ==about');
        if (localStorage.getItem("school") === 'NKUHT') {
            next()
          } else {
            alert('錯誤名稱')
          }
    },
    // 通過路由規則離開組件被調用
    beforeRouteLeave(to,from,next){
        next()
    },
}
</script>
<style lang="scss">

</style>
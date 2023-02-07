<template>
    <div class="news">
        <p :style="{opacity}">歡迎光臨</p>
        <ul>
            <li>new001 <input type="text"></li>
            <li>new002 <input type="text"></li>
            <li>new003 <input type="text"></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'MyNews',
    data() {
        return {
            opacity:1,
        }
    },
    mounted(){
        // this.timer = setInterval(()=>{
        //     console.log('aa');
        //     this.opacity -= 0.01
        //     if(this.opacity<=0) this.opacity = 1
        // },16)
        console.log('mounted');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
        // clearInterval(this.timer)
    },
    activated(){
        console.log('activated');
        this.timer = setInterval(()=>{
            console.log('aa');
            this.opacity -= 0.01
            if(this.opacity<=0) this.opacity = 1
        },16)
    },
    deactivated(){
        console.log('deactivated');
        clearInterval(this.timer)
    }
}

</script>
<style lang="scss">

</style>
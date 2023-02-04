<template>
    <div class="category col-4">
        <div class="item">
            <h3>{{ title }}</h3>
            <!-- 插槽 -->
            <slot name="center">默認值</slot>
            <ul>
                <li v-for="(item,index) in listData" :key="index">{{ item }}</li>
            </ul>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default{
    name:'MyCategory',
    props:['title','listData'],
}
</script>
<style lang="scss">
.category{
    padding: 30px;
    text-align: center;
}
h3{
    background-color: #fa0;
}
.item{
    background-color: skyblue;  
    padding: 10px;
}
</style>

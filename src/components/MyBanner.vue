<template>
    <div class="row">
        <div class="col banner">
            <div class="page-header">
                <h2>Vue Router Demo</h2>
            </div>
        </div>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger" @click="back">back</button>
            <button type="button" class="btn btn-warning" @click="forward">forward</button>
            <button type="button" class="btn btn-success" @click="go">go</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyBanner',
    methods: {
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        },
        go() {
            this.$router.go(3)
        }

    }
}
</script>
<style lang="scss">

</style>
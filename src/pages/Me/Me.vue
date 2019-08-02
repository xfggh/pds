<template>
    <div class="me">
        <select-login />
    </div>
</template>

<script>
import SelectLogin from './../Login/SelectLogin';


export default {
    name: "Me",
    components: {
        SelectLogin
    }
}
</script>

<style lang="stylus" scoped>
.me
    background-color #fff
    height 100%
    width 100%
</style>
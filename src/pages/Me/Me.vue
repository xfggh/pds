<template>
    <div class="me">
        <div v-if="userInfo.id">
            我的主面板
        </div>
        <select-login v-else />
    </div>
</template>

<script>
import SelectLogin from './../Login/SelectLogin'
import { mapState } from 'vuex'

export default {
    name: "Me",
    components: {
        SelectLogin
    },
    computed: {
        ...mapState(['userInfo'])
    }
}
</script>

<style lang="stylus" scoped>
.me
    background-color #fff
    height 100%
    width 100%
</style>
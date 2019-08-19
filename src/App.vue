<template>
    <div id="app">
        <router-view></router-view>
        <TabBar v-show="$route.meta.showTabbar===false?false:true" />
    </div>
</template>


<script>
    import TabBar from './components/TabBar/TabBar'
    export default {
        name: "App",
        components: {
            TabBar,
        },
        mounted(){
            this.$store.dispatch('getUserInfo');
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
    #app
        width 100%
        height 100%
        background-color #f5f5f5
</style>



<template>
    <div class="search-nav">
        <a href="" class="search-nav-icon" @click.prevent="isShowSearchPanel(true)">
            <img src="../images/search.png" alt="" width="20">
            <span>这是一个搜索框</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "SearchNav",
    props: {
        isShowSearchPanel: Function
    }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
@import '~@/common/stylus/mixins.styl';
.search-nav
    width 100%
    height 60px
    background-color #fff
    border-bottom-1px(#ccc)
    position fixed
    top 0
    left 0
    z-index 998
    display flex
    justify-content center
    align-items center
    .search-nav-icon
        width 90%
        height 70%
        background-color #e8e8e8
        border-radius 10px
        display flex
        justify-content center
        align-items center
        span 
            color #aaa
            font-size 15px
            margin-left 5px
</style>
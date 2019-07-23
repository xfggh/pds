<template>
    <div class="search-panel">
        <div class="search-nav">
            <div class="search-input">
                <img src="../images/search.png" alt="" width="20">
                <input ref="mySearch" type="text" placeholder="iPhoneX">
            </div>
            <button @click="isShowSearchPanel(false)">取消</button>
        </div>
        <div class="search-content">
            <div class="title">
                <img src="../images/hot.png" alt="" width="20">
                <span>热门搜索</span>
            </div>
            <ul class="search-list">
                <li>儿童书</li>
                <li>灭蝇神器</li>
                <li>裙子两件套</li>
                <li>花甲粉</li>
                <li>增高鞋女</li>
                <li>贴纸装饰</li>
                <li>寿司海苔</li>
                <li>蕾丝雪纺衫短袖</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchPanel",
    props: {
        isShowSearchPanel: Function
    },
    mounted(){
        this.$refs.mySearch.focus();
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/mixins.styl';
    .search-panel
        width 100%
        height 100%
        background-color #fff
        position fixed
        left 0
        top 0
        z-index 999
        .search-nav
            display flex
            justify-content space-between
            align-items center
            background-color #fff
            padding 5px 10px
            .search-input
                display flex
                align-items center
                width 85%
                height 35px
                background-color #ededed
                border-radius 10px
                padding 0 10px
                input 
                    margin-left 5px
                    width 80%
                    height 85%
                    background-color transparent
                    outline none
            button
                background-color transparent
                color #ccc
        .search-content
            padding 20px 10px
            .title
                display flex
                align-items center
                span
                    color #9c9c9c
                    font-size 12px
                    margin-left 5px
            .search-list
                display flex
                flex-wrap wrap
                li
                    background-color #ededed
                    color #aaa
                    font-size 12px
                    margin 5px 10px
                    padding 5px 5px
                    border-radius 5px
</style>
<template>
    <div class="bottom-tab">
        <span class="tab-item" @click="switchTo('/home')">
            <img :src="$route.path.includes('/home') ? imgArr[0].selected : imgArr[0].normal" alt="">
            <span :class="{'active': $route.path.includes('/home')}">首页</span>
        </span>
        <span class="tab-item" @click="switchTo('/recommend')">
            <img :src="$route.path.includes('/recommend') ? imgArr[1].selected : imgArr[1].normal" alt="">
            <span :class="{'active': $route.path.includes('/recommend')}">推荐</span>
        </span>
        <span class="tab-item" @click="switchTo('/search')">
            <img :src="$route.path.includes('/search') ? imgArr[2].selected : imgArr[2].normal" alt="">
            <span :class="{'active': $route.path.includes('/search')}">搜索</span>
        </span>
        <span class="tab-item" @click="switchTo('/chat')">
            <img :src="$route.path.includes('/chat') ? imgArr[3].selected : imgArr[3].normal" alt="">
            <span :class="{'active': $route.path.includes('/chat')}">聊天</span>
        </span>
        <span class="tab-item" @click="switchTo('/me')">
            <img :src="$route.path.includes('/me') ? imgArr[4].selected : imgArr[4].normal" alt="">
            <span :class="{'active': $route.path.includes('/me')}">我的</span>
        </span>
    </div>
</template>

<script>
export default {
    name: "TabBar",
    data(){
        return{
            imgArr: [
                {normal: require("./../../../public/img/icon_home.png"), selected: require("./../../../public/img/icon_home_selected.png")},
                {normal: require("./../../../public/img/icon_rec.png"), selected: require("./../../../public/img/icon_rec_selected.png")},
                {normal: require("./../../../public/img/icon_search.png"), selected: require("./../../../public/img/icon_search_selected.png")},
                {normal: require("./../../../public/img/icon_chat.png"), selected: require("./../../../public/img/icon_chat_selected.png")},
                {normal: require("./../../../public/img/icon_me.png"), selected: require("./../../../public/img/icon_me_selected.png")}
            ]
        }
    },
    methods: {
        switchTo(path){
            console.log(this.$router);
            this.$router.replace(path);  // 跳转
        }
    }
}
</script>

<style lang="stylus" scoped>
    .bottom-tab
        width 100%
        height 50px
        background-color #fff
        position fixed
        left 0
        bottom 0
        z-index 999 
        display flex
        .tab-item
            display flex
            flex 1
            flex-direction column
            align-items center
            justify-content center
            font-size 14px
            color #666
            img
                width 35%
                margin-bottom 2px
            .active
                color red
</style>




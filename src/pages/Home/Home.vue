<template>
    <div class="home">
        <ly-tab class="fix"
            v-model="selectedId"
            :items="items"
            :options="options"
            @change="handleChange">
        </ly-tab>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Home",
    data(){
        return {
            selectedId: 0,
            items: [
                {label: '热门'},
                {label: '服饰'},
                {label: '鞋包'},
                {label: '母婴'},
                {label: '百货'},
                {label: '食品'},
                {label: '内衣'},
                {label: '男装'},
                {label: '电器'}
            ],
            options: {
                activeColor: '#e9232c'
                // 可在这里指定labelKey为你数据里文字对应的字段
            },
            subRouterUrl: [
                '/home/hot', '/home/dress', '/home/box', '/home/mbaby', '/home/general', '/home/food', '/home/shirt', '/home/man', '/home/ele'
            ]
        }
    },
    methods: {
        // 获取当前点击的 item index
        handleChange(item, index){
            console.log(item, index);
            this.$router.replace(this.subRouterUrl[index]);
        }
    }
    
}
</script>

<style lang="stylus" scoped>
.home
    background-color #f5f5f5
    height 100%
    width 100%
    .fix{
        position fixed
        left 0
        top 0
        z-index 998
    }
</style>



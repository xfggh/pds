<template>
    <div class="hot-list">
        <ul class="shop-list" v-if="homeshoplist.length > 0">
            <li class="shop-list-item" v-for="(item, index) in homeshoplist" :key="index">
                <div class="item-right">
                    <img :src="item.image_url" alt="">
                </div>
                <div class="item-left">
                    <span class="item-title">{{ item.goods_name }}</span>
                    <div class="item-left-bottom">
                        <span class="item-price">￥{{ item.normal_price/100 }}</span>
                        <span class="item-count">{{ item.sales_tip }}</span>
                        <span class="item-user">
                            <img :src="user.avatar" alt="" v-for="(user, index) in item.bubble" :key="index">
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "HotList",

    computed:{
        ...mapState(['homeshoplist'])
    }
}
</script>

<style lang="stylus" scoped>
.hot-list
    background-color #f5f5f5
    margin-bottom 50px
    padding 0 5px
    .shop-list
        .shop-list-item
            background-color #fff
            padding 5px
            margin-bottom 5px
            border-radius 5px
            display flex
            justify-content space-between
            .item-right
                display flex
                align-items center
                img
                    width 100%
                flex 1
                margin-right  5px
            .item-left
                display flex
                flex-direction column
                justify-content space-between
                flex 1.5
                .item-title
                    line-height 22px
                    height 44px
                    overflow hidden
                .item-left-bottom
                    margin-top 30px
                    display flex
                    justify-content space-between
                    align-items center
                    .item-price
                        font-size 18px
                        font-weight bolder
                        color red
                    .item-count
                        font-size 12px
                        color #ccc
                    .item-user
                        display flex
                        img
                            width 20px
                            height 20px
                            border-radius 50%
                        img:nth-child(2)
                            margin-left -5px


</style>
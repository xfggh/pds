<template>
    <li class="recommend-item">
        <img :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
        <h4 class="item-title">{{ item.short_name }}</h4>
        <div class="item-bottom">
            <span class="item-price">￥{{item.price / 100}}</span>
            <span class="item-salestip">{{item.sales_tip}}</span>
            <button class="item-btn">发现 ></button>
        </div>
    </li>
</template>

<script>
export default {
    name: "ShopList",
    props:{
        item: Object
    }
}
</script>

<style lang="stylus" scoped>
.recommend-item:nth-child(2n-1)
    margin-right 1%
.recommend-item
    width 49.5%
    background-color #fff
    margin-bottom 10px
    padding-bottom 10px
    .item-title
        font-size 14px
        height 20px
        line-height 20px
        overflow hidden
        margin 5px
    .item-bottom
        display flex
        align-items center
        margin 0 0 0 3px
        .item-price
            flex 1
            font-size 14px
            font-weight bold
            color red
        .item-salestip
            flex 2
            font-size 12px
            color #666
        .item-btn
            flex 1
            border 1px solid #F1F1F1
            border-right none
            border-radius 10px 0 0 10px
            background-color transparent
            color #666
            font-size 12px
            padding 1px 3px
</style>
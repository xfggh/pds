<template>
    <div class="hot-list">
        <ul class="shop-list">
            <li class="shop-list-item">
                <div class="item-right">
                    <img src="./../../imgs/shop_list/shop_item.png" alt="">
                </div>
                <div class="item-left">
                    <span class="item-title">【19.95元抢1000件，抢完恢复28.9元】牛仔裤女韩版学生高腰破洞百搭哈伦裤2019新款宽松显瘦九分裤</span>
                    <div class="item-left-bottom">
                        <span class="item-price">￥19.95</span>
                        <span class="item-count">已拼619件</span>
                        <span class="item-user">
                            <img src="./../../imgs/shop_list/user1.jpg" alt="">
                            <img src="./../../imgs/shop_list/user2.jpg" alt="">
                        </span>
                    </div>
                </div>
            </li>
            <li class="shop-list-item">
                <div class="item-right">
                    <img src="./../../imgs/shop_list/shop_item.png" alt="">
                </div>
                <div class="item-left">
                    <span class="item-title">【19.95元抢1000件，抢完恢复28.9元】牛仔裤女韩版学生高腰破洞百搭哈伦裤2019新款宽松显瘦九分裤</span>
                    <div class="item-left-bottom">
                        <span class="item-price">￥19.95</span>
                        <span class="item-count">已拼619件</span>
                        <span class="item-user">
                            <img src="./../../imgs/shop_list/user1.jpg" alt="">
                            <img src="./../../imgs/shop_list/user2.jpg" alt="">
                        </span>
                    </div>
                </div>
            </li>
            <li class="shop-list-item">
                <div class="item-right">
                    <img src="./../../imgs/shop_list/shop_item.png" alt="">
                </div>
                <div class="item-left">
                    <span class="item-title">【19.95元抢1000件，抢完恢复28.9元】牛仔裤女韩版学生高腰破洞百搭哈伦裤2019新款宽松显瘦九分裤</span>
                    <div class="item-left-bottom">
                        <span class="item-price">￥19.95</span>
                        <span class="item-count">已拼619件</span>
                        <span class="item-user">
                            <img src="./../../imgs/shop_list/user1.jpg" alt="">
                            <img src="./../../imgs/shop_list/user2.jpg" alt="">
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HotList"
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
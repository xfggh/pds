<template>
    <div class="hot">
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../imgs/rowing/s1.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s2.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s3.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s4.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s5.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s6.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s7.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s8.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s9.png" alt="" width="100%"></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>

        <!-- 导航 -->
        <HotNav/>

        <!-- 广告位 -->
        <div class="hot-ad">
            <img src="./../../imgs/hot_ad/home_ad.gif" alt="" width="100%">
        </div>

        <HotList/>

    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import HotList from './HotList'

import HotNav from './HotNav';
export default {
    name: "Hot",
    components: {
        HotNav,
        HotList
    },
    mounted() {
        
        this.$store.dispatch('reqHomeCarousel');

        new Swiper ('.swiper-container', {

            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        }) 
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .hot
        width 100%
        height 100%
        padding-top 42px
        background #f5f5f5
        .hot-ad
            background-color #fff
            margin 5px 0px
            padding 0 5px

</style>

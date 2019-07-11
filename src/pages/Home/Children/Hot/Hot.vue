<template>
    <div class="hot">
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper" v-if="homecarousel.length > 0">
                <div class="swiper-slide" v-for="(carousel, index) in homecarousel" :key="index">
                    <img :src="carousel.imgurl" alt="" width="100%">
                </div>
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

import { mapState } from 'vuex';
export default {
    name: "Hot",
    components: {
        HotNav,
        HotList
    },
    computed:{
        ...mapState(['homecarousel'])
    },
    mounted() {
        // 调用 获取首页轮播图的方法
        this.$store.dispatch('reqHomeCarousel');

        // 调用 获取首页导航图片的 方法
        this.$store.dispatch("reqHomeNav");

        // 调用 获取首页商品列表 方法
        this.$store.dispatch("reqHomeShopList");

    },
    watch:{
        homecarousel(){
            this.$nextTick(()=>{
                new Swiper ('.swiper-container', {
                    autoplay: {
                        delay: 2000,
                        // 解决手动滑动后自动滑动失效的问题
                        disableOnInteraction: false
                    },
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                }) 
            })
        }
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

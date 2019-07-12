import {
    getHomeCarousel,
    getHomeNav,
    getHomeShopList,
    getRecommendShopList
} from './../api/index'

import {
    HOME_CAROUSEL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST
} from './mutation-types'

export default{
    // 异步请求

    // 获取首页的轮播图
    async reqHomeCarousel({commit}){
        const result = await getHomeCarousel();

        commit(HOME_CAROUSEL, {homecarousel: result.message.data})
    },

    // 获取首页的导航
    async reqHomeNav({commit}){
        const result = await getHomeNav();

        commit(HOME_NAV, {homenav: result.message.data})
    },

    // 获取首页商品列表 homeshoplist
    async reqHomeShopList({commit}){
        const result = await getHomeShopList();
        commit(HOME_SHOP_LIST, {homeshoplist: result.message.goods_list})
    },

    // 获取推荐页商品列表
    async reqRecommendShopList({commit}){
        const result = await getRecommendShopList();
        commit(RECOMMEND_SHOP_LIST, {recommendshoplist: result.message.data})
    }

}
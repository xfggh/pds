import {
    getHomeCarousel,
    getHomeNav,
    getHomeShopList,
    getRecommendShopList,
    getSearchGoods
} from './../api/index'

import {
    HOME_CAROUSEL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST,
    SEARCH_GOODS,
    USER_INFO
} from './mutation-types'

export default{
    // 异步请求

    // 获取 首页 的轮播图
    async reqHomeCarousel({commit}){
        const result = await getHomeCarousel();

        commit(HOME_CAROUSEL, {homecarousel: result.message})
    },

    // 获取 首页 的导航
    async reqHomeNav({commit}){
        const result = await getHomeNav();

        commit(HOME_NAV, {homenav: result.message.data})
    },

    // 获取 首页 商品列表 homeshoplist
    async reqHomeShopList({commit}){
        const result = await getHomeShopList();
        commit(HOME_SHOP_LIST, {homeshoplist: result.message.goods_list})
    },

    // 获取 推荐 页商品列表
    async reqRecommendShopList({commit}, params){
        const result = await getRecommendShopList(params);
        commit(RECOMMEND_SHOP_LIST, {recommendshoplist: result.message});

        params.callback && params.callback();
    },

    // 获取 搜索 页商品列表
    async reqSearchGoods({commit}, callback){
        const result = await getSearchGoods();
        commit(SEARCH_GOODS, {searchgoods: result.message.data});

        callback && callback();
    },

    // 保存用户信息到 vuex
    saveUserInfo({commit}, userInfo){
        commit(USER_INFO, {userInfo});
    }


}
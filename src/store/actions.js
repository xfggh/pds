import { getHomeCarousel } from './../api/index'

import { HOME_CAROUSEL } from './mutation-types'

export default{
    // 获取首页的轮播图
    // 异步请求
    async reqHomeCarousel({commit}){
        const result = await getHomeCarousel();

        commit(HOME_CAROUSEL, {homecarousel: result.message.data})
    }
}
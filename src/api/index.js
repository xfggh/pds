import _ajax from './_ajax'

// 基础路径
// const BASE_URL = 'http://127.0.0.1:3000';

// 请求 首页 轮播图
export const getHomeCarousel = ()=>_ajax('/api/homecarousel');

// 请求 首页 导航
export const getHomeNav = ()=>_ajax('/api/homenav');

// 请求 首页 商品列表
export const getHomeShopList = ()=>_ajax('/api/homeshoplist');

// 请求 推荐 页商品列表
export const getRecommendShopList = ()=>_ajax('/api/recommendshoplist');

// 请求 搜索 页数据
export const getSearchGoods = ()=>_ajax('/api/searchgoods');


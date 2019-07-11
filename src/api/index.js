import _ajax from './_ajax'

// 基础路径
// const BASE_URL = 'http://127.0.0.1:3000';

// 获取首页轮播图
export const getHomeCarousel = ()=>_ajax('/api/homecarousel');

// 获取首页导航
export const getHomeNav = ()=>_ajax('/api/homenav');

// 获取首页商品列表
export const getHomeShopList = ()=>_ajax('/api/homeshoplist');


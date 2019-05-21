import _ajax from './_ajax'

// 基础路径
// const BASE_URL = 'http://127.0.0.1:3000';

export const getHomeCarousel = ()=>_ajax('/api/homecarousel');


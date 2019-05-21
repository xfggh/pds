import Vue from 'vue';
import App from './App';
import store from './store/index'

// 引入路由
import router from './router/index';

// 引入 滑动路由
import lyTab from 'ly-tab';
Vue.use(lyTab);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
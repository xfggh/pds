import Vue from 'vue';
import App from './App';

// 引入路由
import router from './router/index';

// 引入 滑动路由
import lyTab from 'ly-tab';
Vue.use(lyTab);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
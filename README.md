# pds 拼多少 项目

1. 项目结构

2. 项目启动

# 安装

```node
git clone

npm install

npm run serve
```

# 备注

## 用到的库

- stylus | css 编译器
```node
npm install stylus stylus-loader --save-dev
```
- ly-lab | 滑动
```node
npm i ly-tab -S
```

- Swiper | 轮播图

- better-scroll | 滚动
    npm install better-scroll --save


## 记录 bug
1. 轮播图 bug  
    可以 自动轮播，但是我一手动滑动就不会自动轮播了

2. Search.vue 23行
    WebSocket connection to 'ws://localhost:8081/sockjs-node/466/tcrkbaoa/websocket' failed: WebSocket is closed before the connection is established
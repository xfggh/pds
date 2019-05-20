<template>
    <div class="hot-nav">
        <div class="hot-nav-content">
            <div class="content-inner">
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>

            </div>
        </div>
        <div class="hot-nav-bottom">
            <div class="bottom-inner" :style="bottomInnerStyle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HotNav",
    data(){
        return{
            // 获取屏幕的宽度
            screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            // 滚动内容的宽度
            scrollContentW: 720,
            // 滚动条背景的宽度
            bgBarW: 100,
            // 滚动条的长度
            barXWidth: 0,
            // 起点
            startX: 0,
            // 结束点
            endX: 0,
            // 移动的距离
            barMoveX: 0,

        }
    },
    mounted(){
        this.getBarXWidth();

        // 移动端事件监听
        this.bindEvent();
    },
    computed: {
        bottomInnerStyle(){
            return {
                width: `${this.barXWidth}px`,
                left: `${this.barMoveX}px`
            }
        }
    },
    methods: {
        getBarXWidth(){
            return this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW);
        },
        // 移动端事件监听
        bindEvent(){
            this.$el.addEventListener("touchstart", this.handleTouchStart, false);
            this.$el.addEventListener("touchmove", this.handleTouchMove, false);
            this.$el.addEventListener("touchend", this.handleTouchEnd, false);
        },
        // 触摸开始
        handleTouchStart(event){
            console.log("触摸开始");
            console.log("触点列表->", event.touches);
            // 获取触点
            let touch = event.touches[0];
            // 获取起点
            this.startX = Number(touch.pageX);
            console.log("起点->", this.startX);
        },
        // 开始移动
        handleTouchMove(){
            console.log("开始移动");
            
            let touch = event.touches[0];
            // 移动距离
            let moveLen = -(Number(touch.pageX) - this.startX);
            console.log("moveLen->", moveLen);
            // 求出滚动条走的距离
            this.barMoveX = (this.bgBarW/this.scrollContentW) * moveLen + this.endX;
            // 边界处理
            if(this.barMoveX < 0){
                this.barMoveX = 0
            }else if((this.bgBarW - this.barXWidth) < this.barMoveX){
                this.barMoveX = this.bgBarW - this.barXWidth;
            }
            console.log("滚动条走的距离->", this.barMoveX);
        },
        // 触摸结束
        handleTouchEnd(){
            console.log("触摸结束");
            this.endX = this.barMoveX;
            console.log("结束点->", this.endX);
        },



    }

}
</script>

<style lang="stylus" scoped>
.hot-nav
    width 100%
    height 180px
    position relative
    background-color #fff
    padding-bottom 10px
    .hot-nav-content
        width 100%
        overflow-x scroll
        .content-inner
            width 720px
            height 180px
            display flex
            flex-wrap wrap
            .inner-item
                width 90px
                height 90px
                display flex
                flex-direction column
                justify-content center
                align-items center
                font-size 14px
                color #666
                img
                     width 40%
                     margin-bottom 5px
    .hot-nav-content::-webkit-scrollbar //去掉滚动条
        display none
    .hot-nav-bottom
        width 100px
        height 2px
        background-color #ccc
        position absolute
        left 50%
        margin-left -50px;
        .bottom-inner
            height 100%
            background-color orange
            width 0px
            position absolute

        
</style>
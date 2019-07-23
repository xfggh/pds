<template>
    <div class="search">
        <!-- 搜索 -->
        <SearchNav :isShowSearchPanel="isShowSearchPanel" />
        <!-- 联动列表 -->
        <div class="shop">
            <!-- 左边 -->
            <div class="menu-wrapper">
                <ul>
                    <li class="menu-item" 
                        :class="{current: currentIndex === index}" 
                        v-for="(goods, index) in searchgoods" 
                        :key="index"
                        @click="leftItemClick(index)"
                        ref="menuList">
                        <span>{{ goods.name }}</span>
                    </li>
                </ul>
            </div>
            <!-- 右边 -->
            <div class="shop-wrapper">
                <ul ref="shopsParent">
                    <li class="shops-li" v-for="(goods, index1) in searchgoods" :key="index1">
                        <div class="shops-title">
                            <h4>{{ goods.name }}</h4>
                            <a href="">查看更多 ></a>
                        </div>
                        <ul class="phone-tag" v-if="goods.tag === 'phone'">
                            <li v-for="(phone, index) in goods.category" :key="index">
                                <img :src="phone.icon" alt="">
                            </li>
                        </ul>
                        <ul class="shops-items">
                            <li v-for="(item, index2) in goods.items" :key="index2">
                                <img :src="item.icon" alt="">
                                <span>{{ item.title }}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <SearchPanel v-if="isShow" :isShowSearchPanel="isShowSearchPanel" />
    
    </div>
</template>

<script>
import SearchNav from './Children/SearchNav'
import SearchPanel from './Children/SearchPanel'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
    name: "Search",
    data(){
        return {
            scorllY: 0,  // 动态滚动的位置
            rightLiY: [],  // 初始化以后固定的高度
            isShow: false
        }
    },
    components:{
        SearchNav,
        SearchPanel
    },
    computed:{
        ...mapState(['searchgoods']),
        currentIndex(){
            let {scorllY, rightLiY} = this;

            let res = rightLiY.findIndex((li, index)=>{
                this._leftScroll(index);
                return scorllY >= li && scorllY < rightLiY[index+1];
            })

            return res;
        }
    },
    mounted(){
        this.$store.dispatch('reqSearchGoods');

        // 使用 回调函数 解决数据异步的问题
        //this.$store.dispatch('reqSearchGoods', this.initBscroll);
    },
    watch:{
        searchgoods(){
            this.$nextTick(()=>{
                // 初始化数据
                this._initBscroll();

                // 初始化右边每一个大 li 的高度
                // 刷新页面 计算的高度不对
                this._initRightY();
            })
        }
    },
    methods:{
        // 初始化 滚动
        _initBscroll(){
            this.LeftScroll = new BScroll('.menu-wrapper',{
                click: true,
            })
            this.reightScroll = new BScroll('.shop-wrapper',{
                probeType: 3
            })

            // console.log('回调函数');

            // 获得滚动的位置
            this.reightScroll.on('scroll', (pos)=>{
                this.scorllY = Math.abs(pos.y);
                //console.log(this.scorllY);
            })
        },

        // 初始化 大 li 的高度
        _initRightY(){
            // 定义一个临时数组
            let tempArr = [];

            // 定义一个变量记录高度
            let top = 0;
            tempArr.push(top);

            // 查找出右边所有的
            let allLis = this.$refs.shopsParent.getElementsByClassName('shops-li');
            //console.log(allLis);

            Array.prototype.slice.call(allLis).forEach(li => {
                top += li.clientHeight;
                //console.log(top)
                tempArr.push(top);
            });

            //console.log(tempArr);

            this.rightLiY = tempArr;
        },

        // 左边点击
        leftItemClick(index){
            this.scorllY = this.rightLiY[index];
            this.reightScroll.scrollTo(0, -this.scorllY, 300);
        },

        // 左边联动
        _leftScroll(index){
            let menuList = this.$refs.menuList;
            this.LeftScroll.scrollToElement(menuList[index], 300, 0, -100)
        },

        // 搜索面板是否显示
        isShowSearchPanel(flag){
            this.isShow = flag;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/mixins.styl'
.search
    background-color #fff
    height 100%
    width 100%
    .shop
        display flex
        position absolute
        top 60px
        bottom 50px
        width 100%
        overflow hidden
        .menu-wrapper
            background-color #FAFAFA
            width 80px
            flex 0 0 80px
            .menu-item
                width 100%
                height 60px
                background-color #FAFAFA
                display flex
                justify-content center
                align-items center
                font-size 15px
                font-weight lighter
                color #666
                position relative
            .current
                color #e02e24
                background-color #fff
            .current::before
                content: ''
                background-color #e02e24
                width 4px
                height 30px
                position absolute
                left 0
        .shop-wrapper 
            flex 1
            .shops-title
                display flex
                justify-content space-between
                height 45px
                align-items center
                padding 0 10px
                font-size 15px
                a
                    text-decoration none 
                    color #999
                    font-size 15px
            .phone-tag
                display flex
                flex-wrap wrap
                border-bottom-1px(#fafafa)
                li
                    width 33.3%
                    display flex
                    justify-content center
                    align-items center
                    margin 5px 0
                    img
                        width 70%
            .shops-items
                display flex
                flex-wrap wrap
                li
                    display flex
                    flex-direction column
                    width 33.3%
                    justify-content center
                    align-items center
                    font-size 12px
                    color #666
                    font-weight lighter
                    img 
                        width 60%
                        height 60%
                        margin-bottom 5px
</style>



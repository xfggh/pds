<template>
    <div class="recommend-container" v-if="recommendshoplist.length > 0">
        <ul class="recommend">
            <ShopList v-for="(item, index) in recommendshoplist" :item=item :key="index" />
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ShopList from '../../components/ShopList/ShopList'

import BScroll from 'better-scroll'

import { Indicator } from 'mint-ui'

export default {
    name: 'Recommend',
    data(){
        return {
            params: {
                curPage: 1,
                count: 11,
                callback: ()=>{
                    Indicator.close();
                }
            }
        }
    },
    components:{
        ShopList
    },
    mounted(){
        console.log(111);
        Indicator.open('加载中...');
        this.$store.dispatch('reqRecommendShopList', this.params);
    },
    computed:{
        ...mapState(['recommendshoplist'])
    },
    watch:{
        recommendshoplist(){
            this.$nextTick(()=>{

                this.params.curPage += 1;

                this._initBScroll();
            })
        }
    },
    methods:{
        _initBScroll(){
            // 初始化 滚动
            let scroll = new BScroll('.recommend-container',{
                scrollY: true,
                click: true,
                probeType: 3
            });

            scroll.on('touchEnd', (pos)=>{
                console.log(pos.y);
                console.log(scroll.maxScrollY);
                if(pos.y > 50){
                    console.log('下拉刷新!');
                }

                if(scroll.maxScrollY - (pos.y + 50) > 0){
                    console.log('上拉加载!');
                    Indicator.open('加载中!');
                    this.$store.dispatch('reqRecommendShopList', this.params);
                }
            });

            // 刷新页面
            scroll.on('scrollEnd', ()=>{
                scroll.refresh();
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.recommend-container
    background-color #f5f5f5
    height 100%
    width 100%
    .recommend
        background-color #f5f5f5
        display flex
        flex-wrap wrap
        padding-bottom 50px
</style>

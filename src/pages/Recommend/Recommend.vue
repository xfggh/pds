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
export default {
    name: 'Recommend',
    components:{
        ShopList
    },
    mounted(){
        this.$store.dispatch('reqRecommendShopList');
    },
    computed:{
        ...mapState(['recommendshoplist'])
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
        margin-bottom 50px
</style>

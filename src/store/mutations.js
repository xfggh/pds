import { HOME_CAROUSEL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST,
    SEARCH_GOODS,
    USER_INFO
} from './mutation-types'

export default{
    [HOME_CAROUSEL](state, {homecarousel}){
        state.homecarousel = homecarousel;
    },

    [HOME_NAV](state, {homenav}){
        state.homenav = homenav;
    },

    [HOME_SHOP_LIST](state, {homeshoplist}){
        state.homeshoplist = homeshoplist;
    },

    [RECOMMEND_SHOP_LIST](state, {recommendshoplist}){
        state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist);
    },

    [SEARCH_GOODS](state, {searchgoods}){
        state.searchgoods = searchgoods;
    },

    [USER_INFO](state, {userInfo}){
        state.userInfo = userInfo;
    },

}
import { HOME_CAROUSEL, HOME_NAV, HOME_SHOP_LIST } from './mutation-types'

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

}
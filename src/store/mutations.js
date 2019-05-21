import { HOME_CAROUSEL } from './mutation-types'

export default{
    [HOME_CAROUSEL](state, {homecarousel}){
        state.homecarousel = homecarousel;
    }
}
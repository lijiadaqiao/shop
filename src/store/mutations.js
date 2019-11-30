//直接更新state的多个方法对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    // RECEIVE_CAPTCHA,
    RECEIVE_SEARCHSHOP,
    // RECEIVE_PWDLOGIN,
    // RECEIVE_SENDCODE,
    // RECEIVE_SMSLOGIN,
    RECEIVE_USERINFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RESET_RATINGS,
    RESET_INFO
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    // [RECEIVE_CAPTCHA](state, { captcha }) {
    //     state.captcha = captcha
    // },
    [RECEIVE_USERINFO](state, { userinfo }) {
        state.userinfo = userinfo
    },
    [RESET_USER_INFO](state, ) {
        state.userinfo = {}
    },
    [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    [RESET_RATINGS](state, { ratings }) {
        state.ratings = ratings
    },
    [RESET_INFO](state, { info }) {
        state.info = info
    },

}
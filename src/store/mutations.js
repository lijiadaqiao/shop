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
    RECEIVE_LOGOUT
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

}
//间接更新state的多个方法对象
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
import {
    reqAdderss,
    reqFoodTypes,
    reqShops,
    // reqCaptcha,
    reqSearchShop,
    // reqPwdLogin,
    // reqSendCode,
    // reqSmsLogin,
    reqUserinfo,
    reqLogout

} from './../api'
export default {
    // 异步获取地址
    async getAddress({ commit, state }) {
        //发生异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAdderss(geohash)
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, { address })
        }
    },

    //异步获取食品分类列表
    async getCategorys({ commit, state }) {
        //发生异步ajax请求

        const result = await reqFoodTypes()
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, { categorys })
        }
    },
    //异步获取商家列表
    async getShops({ commit, state }) {
        //发生异步ajax请求
        const { latitude, longitude } = state
        const result = await reqShops(latitude, longitude)
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }
    },
    //异步获取验证码
    // async getCaptcha({ commit, state }) {
    //     //发生异步ajax请求

    //     const result = await reqCaptcha()
    //     if (result.code === 0) {
    //         const captcha = result.data
    //         commit(RECEIVE_CAPTCHA, { captcha })
    //     }
    // },
    //同步记录用户信息
    recordUser({ commit, userinfo }) {
        //发生异步ajax请求

        commit(RECEIVE_SHOPS, { userinfo })

    },
    //异步获取用户信息
    async getUserinfo({ commit }) {
        //发生异步ajax请求

        const result = await reqUserinfo()
        if (result.code === 0) {
            const userinfo = result.data
            commit(RECEIVE_USERINFO, { userinfo })
        }
    },
}
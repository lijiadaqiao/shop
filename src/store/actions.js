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
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RESET_RATINGS,
    RESET_INFO
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
    reqLogout,
    reqShopInfo,
    reqShopRatings,
    reqShopGoods


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
    //异步获取食物列表
    async getGoods({ commit }, callback) {
        //发生异步ajax请求        
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, { goods })
            callback && callback()
        }
    },
    //异步获取评论列表
    async getRatings({ commit }) {
        //发生异步ajax请求  
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RESET_RATINGS, { ratings })
        }
    },
    //异步获取商家信息
    async getInfo({ commit }, callback) {
        //发生异步ajax请求      
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RESET_INFO, { info })
            callback && callback()
        }
    },

}
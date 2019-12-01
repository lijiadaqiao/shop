import Vue from "vue"
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
    RESET_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT
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
    [INCREMENT_FOOD_COUNT](state, { food }) {
        if (!food.count) {
            // food.count = 1 //新增数据（没有数据绑定）
            Vue.set(food, 'count', 1)
                //将food添加到cartFoods中去
            state.cartFoods.push(food)
        } else {
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT](state, { food }) {
        if (food.count) { //只有有值才减
            food.count--
                if (food.count === 0) {
                    //将food从cartfoods移除
                    state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
                }
        }

    },

}
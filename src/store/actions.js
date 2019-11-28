//间接更新state的多个方法对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'
import {
    reqAddress,
    reqFoodTypes,
    reqShops,
} from './../api'
export default {
    //异步获取地址
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
        const result = await reqFoodTypes(latitude, longitude)
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }
    }
}
//核心管理模块
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
// import mutationsType from './mutation-types'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
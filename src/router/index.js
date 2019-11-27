import Vue from "vue"
import VueRoouter from "vue-router"
import MSite from './../pages/msite/Msite.vue'
import Order from './../pages/Order/Order.vue'
import Profile from './../pages/Profile/Profile.vue'
import Search from './../pages/Search/Search.vue'
import Login from './../pages/Login/Login.vue'
// 僧明使用插件
Vue.use(VueRoouter)
export default new VueRoouter({
    routes: [{
            path: '/',
            component: MSite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/msite',
            component: MSite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
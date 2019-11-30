import Vue from "vue"
import VueRoouter from "vue-router"
import MSite from './../pages/msite/Msite.vue'
import Order from './../pages/Order/Order.vue'
import Profile from './../pages/Profile/Profile.vue'
import Search from './../pages/Search/Search.vue'
import Login from './../pages/Login/Login.vue'
import Shop from './../pages/Shop/Shop.vue'
import ShopGoods from './../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from './../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from './../pages/Shop/ShopRatings/ShopRatings.vue'


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
        {
            path: '/shop',
            component: Shop,
            children: [{
                    path: '/shop/ShopGoods',
                    component: ShopGoods
                },
                {
                    path: '/shop/ShopInfo',
                    component: ShopInfo
                },
                {
                    path: '/shop/ShopRatings',
                    component: ShopRatings
                },
                {
                    path: '',
                    redirect: '/shop/ShopGoods'
                },
            ]
        },
    ]
})
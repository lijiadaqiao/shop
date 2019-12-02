import Vue from "vue"
import VueRoouter from "vue-router"
// import MSite from './../pages/msite/Msite.vue'
// import Order from './../pages/Order/Order.vue'
// import Profile from './../pages/Profile/Profile.vue'
// import Search from './../pages/Search/Search.vue'

const MSite = () =>
    import ('./../pages/msite/Msite.vue')
const Order = () =>
    import ('./../pages/Order/Order.vue')
const Profile = () =>
    import ('./../pages/Profile/Profile.vue')
const Search = () =>
    import ('./../pages/Search/Search.vue')
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
            component: MSite, //返回路由组件函数，只有执行才会加载请路径。第一次执行
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
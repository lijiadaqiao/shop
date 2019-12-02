// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import "./mock/mockServer.js"
import loading from "./common/imgs/loading.gif"
import "./filters/index.js"
//祖册全局组件
Vue.component(Button.name, Button) //mt-button
    /* eslint-disable no-new */
Vue.use(VueLazyload, {
    loading
})
new Vue({
    el: '#app',
    render: c => c(App),
    router,
    store,
})
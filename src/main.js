import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router/"
import store from "./store/"
import "font-awesome/css/font-awesome.css"
import i18n from "./lang/lang"
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
const accessToken = localStorage.getItem('access_token')

if (accessToken) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}
// Vue.prototype.$t = vuetify.lang.t;
new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import axios from 'axios'
import api from './api/index.js'
import 'vant/lib/index.css'
Vue.prototype.$api = api
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data;'
Vue.prototype.$http = axios
Vue.use(Vant)
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style.css';
// 复制
Vue.use(ElementUI)
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
router.afterEach((to, from, next) => {

  window.scrollTo(0, 0)

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

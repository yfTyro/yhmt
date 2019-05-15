import Vue from 'vue'
import router from './router/router.js'
import Public from 'static/css/Public.less'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)
Vue.use(Public)
let app = new Vue({
  el: '#app',
  router: router,
  components: {App},
  template: '<App/>'
})
Vue.use(app)

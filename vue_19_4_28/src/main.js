import Vue from 'vue'
import Public from 'static/css/Public.less'
import Global from 'static/css/Global.less'
import App from './App.vue'
Vue.use(Public)
Vue.use(Global)
let app = new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
Vue.use(app)

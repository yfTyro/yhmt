import Vue from 'vue'
import VueRouter from 'vue-router'
import {index} from './index'
import {login} from './login'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [index, login]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'
import ajaxPlugin from './plugins/ajax'

require('es6-promise').polyfill()

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(ajaxPlugin)

// Vue.prototype.$http = axios

const FastClick = require('fastclick')
FastClick.attach(document.body)

const commit = store.commit
router.beforeEach((to, from, next) => {
  commit('updateLoadingStatus', {isLoading: true})
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    setTimeout(next, 100)
  }
})

router.afterEach((to) => {
  store.commit('updateLoadingStatus', {isLoading: false})
})

// console.log(store.getters.doneTodos)

sync(store, router) // done.

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

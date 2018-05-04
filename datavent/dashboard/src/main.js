import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import './mock' // simulation data

import * as filters from './filters' // global filters

import firebase from 'firebase'

store.dispatch('SetRoutes')

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBFuzfljFRD8GkO4GYd5qBz3aY9j_ByoXQ',
  authDomain: 'datavent-ba7dd.firebaseapp.com',
  databaseURL: 'https://datavent-ba7dd.firebaseio.com',
  projectId: 'datavent-ba7dd',
  storageBucket: 'datavent-ba7dd.appspot.com',
  messagingSenderId: '742579788953'
}

firebase.initializeApp(config)

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})

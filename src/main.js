import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/scss/font-awesome.scss'
import animated from 'animate.css'
import 'assets/css/jquery.mCustomScrollbar.css'
import 'assets/js/jquery.cycle2.min.js'
import 'assets/js/jquery.mCustomScrollbar.concat.min.js'
import Vuex from 'vuex'
import store from '@/store'
import 'assets/css/main.scss'

// import 'assert/css/colors/color.scss'
// import 'assets/css/colors/DarkBlue.css'
Vue.config.productionTip = false
Vue.use(animated)
Vue.use(Vuex)
new Vue({
  render: h => h(App),
  store:store
}).$mount('#app')

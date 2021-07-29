import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
/* eslint-disable-next-line */
// import $ from 'jquery'
import CScrollbar from 'c-scrollbar'
import 'bootstrap/dist/css/bootstrap.min.scss'
import 'bootstrap/dist/js/bootstrap.min'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faEnvelope, faCogs, faMapMarkerAlt, faUser, faTasks, faBriefcase, faPrint, faDownload, faChevronDown, faCalendarAlt, faGlobeAsia, faQuoteLeft, faTag, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faQq, faWeixin, faMicroblog } from '@fortawesome/free-brands-svg-icons'
library.add([faPhone, faEnvelope, faCogs, faMapMarkerAlt, faUser, faTasks, faQq, faWeixin, faBriefcase, faMicroblog, faPrint, faDownload, faChevronDown, faCalendarAlt, faGlobeAsia, faQuoteLeft, faTag, faExpandArrowsAlt])
// console.log(library)

// const baseUrl = 'http://www.mydatas.dovelin.cn/'
const baseUrl = 'http://127.0.0.1:8000/'

const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(CScrollbar)
  // .prototype(axios)
  .mount('#app')

// app.config.globalPrototypes.$axios = axios
// app.$axios.baseUrl = baseUrl

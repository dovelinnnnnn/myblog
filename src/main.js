import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
/* eslint-disable-next-line */
// import $ from 'jquery'
import CScrollbar from 'c-scrollbar'
import 'bootstrap/dist/css/bootstrap.min.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlusCircle, faPlusSquare, faTrophy, faPhone, faEnvelope, faCogs, faMapMarkerAlt, faUser, faTasks, faBriefcase, faPrint, faDownload, faChevronDown, faCalendarAlt, faGlobeAsia, faQuoteLeft, faTag, faExpandArrowsAlt, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faQq, faWeixin, faMicroblog, faSkype, faGoogleDrive, faWeibo } from '@fortawesome/free-brands-svg-icons'
library.add([faPlusCircle, faWeibo, faGoogleDrive, faSkype, faPlusSquare, faTrophy, faUniversity, faPhone, faEnvelope, faCogs, faMapMarkerAlt, faUser, faTasks, faQq, faWeixin, faBriefcase, faMicroblog, faPrint, faDownload, faChevronDown, faCalendarAlt, faGlobeAsia, faQuoteLeft, faTag, faExpandArrowsAlt])
// console.log(library)
// const baseUrl = 'http://mydatas.dovelin.cn/'
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(CScrollbar)
  .mount('#app')

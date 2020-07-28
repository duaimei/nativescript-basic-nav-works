import Vue from 'nativescript-vue'
import App from './components/App'
// import VueDevtools from 'nativescript-vue-devtools'
// import { AR } from 'nativescript-ar'

// if(TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
// }
import {store} from './store'
// Vue.registerElement("AR", () => require("nativescript-ar").AR)
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()

import Vue from 'vue'
import App from './App'
import sync from '../../dist'

Vue.config.productionTip = false
Vue.use(sync)

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount("#app")

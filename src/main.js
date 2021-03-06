import Vue from 'vue'
import iView from 'iview'
import App from './App'
import router from './router'

import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false;
Vue.use(iView);
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

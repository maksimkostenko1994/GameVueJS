import Vue         from 'vue'
import VueResource from 'vue-resource'
import router      from './routes'

Vue.use(VueResource)

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
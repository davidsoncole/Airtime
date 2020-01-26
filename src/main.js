import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { store } from './store/store'
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL= 'https://deltaairinternational.com/airtimeflip/';

new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import drizzleVuePlugin from '@drizzle/vue-plugin'
import drizzleOptions from '@/drizzleOptions'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(drizzleVuePlugin, { store, drizzleOptions });


export default new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

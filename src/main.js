import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' 

})

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


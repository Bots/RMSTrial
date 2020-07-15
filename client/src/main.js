import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import Home from './components/Home'
import Save from './components/Save'
import Fetch from './components/Fetch'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/save', component: Save },
    { path: '/fetch', component: Fetch }
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

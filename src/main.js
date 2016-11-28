import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
sync( store, router )

import NotaApp from './components/nota-app.vue'





// eslint-disable-next-line no-unused-vars
const nota = window.nota = new Vue({
  store,
  router,
  render: ( h ) => h( NotaApp ),
}).$mount( 'main' )

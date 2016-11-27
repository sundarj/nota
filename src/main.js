import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use( VueRouter )
// import Vuex from 'vuex'
// Vue.use( Vuex )

import NotaApp from './components/nota-app.vue'
import NotaList from './components/nota-list.vue'





const router = new VueRouter({
  mode: 'history',

  routes: [{
    name: 'item',
    path: '/:folderId?/:itemId?',
    component: NotaList,
  }],
})

// eslint-disable-next-line no-unused-vars
const nota = window.nota = new Vue({
  router,
  render: ( h ) => h( NotaApp ),
}).$mount( 'main' )

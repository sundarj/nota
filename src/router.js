import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use( VueRouter )
import NotaList from './components/nota-list.vue'





export default new VueRouter({
  mode: 'history',

  routes: [{
    path: '/',
    component: NotaList,
  }, {
    name: 'item',
    path: '/:folderPath*/:itemId',
    component: NotaList,
  }],
})

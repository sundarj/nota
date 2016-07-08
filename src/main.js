import Vue from 'vue'
import Router from './router'
Vue.use( Router )

import NotaApp from './components/nota-app.vue'


const nota = window.nota = Router({
  routes: [
    { name: 'root', path: '/:id' },
    { name: 'item', path: '/:path*/:id' },
  ],

  app: _ => new Vue({
    el: 'main',
    
    render: h => h( NotaApp )
  })
})

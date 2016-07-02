import Vue from 'vue'
import Router, { route } from './router'
Vue.use( Router )

import NotaApp from './components/nota-app.vue'

window.nota = route(
  new Vue({
    el: 'body',

    components: [ NotaApp ],
  })
)

window.nota.router = Router({
  routes: [
    { name: 'root', path: '/:id' },
    { name: 'item', path: '/:path*/:id' },
  ],
})

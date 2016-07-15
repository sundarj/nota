import Vue from 'vue'
import Router, { href } from './router'
Vue.use( Router )

import bus from './bus'

export default Router({
  routes: [
    { name: 'root', path: '/:id' },
    { name: 'item', path: '/:path*/:id' },
  ],

  bus,
})

export { href }


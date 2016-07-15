import 'setimmediate'

import history from './history'
import Vue from 'vue'

import NotaApp from './components/nota-app.vue'

const nota = window.nota = history

nota.app = new Vue({
  el: 'main',

  render: h => h( NotaApp ),
})

nota.start()

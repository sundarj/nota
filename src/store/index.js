import Vue from 'vue'
import Vuex from 'vuex'
Vue.use( Vuex )





export default new Vuex.Store({
  state: {
    app: {
      items: [{
        type: 'item',
        id: '1',
        title: 'The Silmarillion',
        content: 'duup\n\nlex',
      }, {
        type: 'item',
        id: '2',
        title: '不思議の国のアリス',
        content: 'hely',
      }, {
        type: 'item',
        id: '3',
        title: 'Warning!!',
        content: 'tropic',
      }, {
        type: 'folder',
        id: '4',
        title: 'other',
        children: [ 5, 6 ],
      }, {
        type: 'item',
        id: '5',
        parent: '4',
        title: 'Don\'t Panic',
        content: 'yuna',
      }, {
        type: 'folder',
        id: '6',
        parent: '4',
        title: 'else',
        children: [ 7, 8 ],
      }, {
        type: 'item',
        id: '7',
        parent: '6',
        title: 'Sometimes',
        content: 'didot',
      }, {
        type: 'folder',
        id: '8',
        parent: '6',
        title: 'another',
        children: [ 9 ],
      }, {
        type: 'item',
        id: '9',
        parent: '8',
        title: '1',
        content: 'heliotrope',
      }],
    },
  },
})

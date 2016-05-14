import app from '../app'

import NotaList from '../components/nota-list.vue'
import NotaEditor from '../components/nota-editor.vue'

import { ID } from '../util'

app.add('list', {
  parent: 'root',
  component: NotaList,

  enter(context) {
    context.data.initial = [
      { type: 'nota', $id: ID(), title: 'The Silmarillion', contents: [ 'duup', 'lex' ] },
      { type: 'nota', $id: ID(), title: '不思議の国のアリス', contents: [ 'hely' ] },
      { type: 'nota', $id: ID(), title: 'Warning!!', contents: [ 'tropic' ] },
      { type: 'folder', title: 'other', contents: [
        { type: 'nota', $id: ID(), title: 'Don\'t Panic', contents: [ 'yuna' ] },
        { type: 'folder', title: 'else', contents: [
            { type: 'nota', $id: ID(), title: 'Sometimes', contents: [ 'yuna' ] },
            { type: 'folder', title: 'another', contents: [
              { type: 'nota', $id: ID(), title: '1', contents: [ 'yuna' ] },
            ] },
        ] },
      ] },
    ]
  },
})

app.add('edit', {
  parent: 'list',
  component: NotaEditor,
})

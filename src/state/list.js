import app from '../app'

import NotaList from '../components/nota-list.vue'
import NotaEditor from '../components/nota-editor.vue'

import { ID } from '../util'

app.add('list', {
  parent: 'root',
  component: NotaList,

  enter(context) {
    context.data.items = [{
        folder: '*',
        contents: [
          { $id: ID(), title: 'The Silmarillion', content: [ 'duup' , 'lex' ] },
          { $id: ID(), title: '不思議の国のアリス', content: [ 'hely' ] },
          { $id: ID(), title: 'Warning!!', content: [ 'tropic' ] },
        ],
      }, {
        folder: 'other',
        contents: [
          { $id: ID(), title: 'Don\'t Panic', content: [ 'yuna' ] },
          {
            folder: 'else',
            contents: [
              { $id: ID(), title: 'Sometimes', content: [ 'yuna' ] },
              {
                folder: 'another',
                contents: [
                  { $id: ID(), title: '1', content: [ 'yuna' ] },
                ]
              },
            ]
          },
        ],
      }]
  },
})

app.add('edit', {
  parent: 'list',
  component: NotaEditor,
})

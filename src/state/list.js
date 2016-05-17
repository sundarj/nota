import app from '../app'

import NotaList from '../components/nota-list.vue'
import NotaEditor from '../components/nota-editor.vue'

app.add('list', {
  parent: 'root',
  component: NotaList,

  enter(context) {
    context.data.initial = [{
      $: {
        type: 'folder',
        id: '*',
      },
      contents: [{
        $: {
          type: 'nota',
          id: 1,
          parent: '*',
        },
        title: 'The Silmarillion',
        contents: [ 'duup', 'lex' ],
      }, {
        $: {
          type: 'nota',
          id: 2,
          parent: '*',
        },
        title: '不思議の国のアリス',
        contents: [ 'hely' ],
      }, {
        $: {
          type: 'nota',
          id: 3,
          parent: '*',
        },
        title: 'Warning!!',
        contents: [ 'tropic' ],
      }],
    }, {
      $: {
        type: 'folder',
        id: 4,
        parent: null,
      },
      title: 'other',
      contents: [{
        $: {
          type: 'nota',
          id: 5,
          parent: 4,
        },
        title: 'Don\'t Panic',
        contents: [ 'yuna' ],
      }, {
        $: {
          type: 'folder',
          id: 6,
          parent: 4,
        },
        title: 'else',
        contents: [{
          $: {
            type: 'nota',
            id: 7,
            parent: 6,
          },
          title: 'Sometimes',
          contents: [ 'yuna' ],
        }, {
          $: {
            type: 'folder',
            id: 8,
            parent: 6,
          },
          title: 'another',
          contents: [{
            $: {
              type: 'nota',
              id: 9,
              parent: 8,
            },
            title: '1',
            contents: [ 'yuna' ],
          }],
        }],
      }],
    }]
  },
  path: '/:folder',
})

app.add('edit', {
  parent: 'list',
  component: NotaEditor,
  path: '/:folder/:id',
})

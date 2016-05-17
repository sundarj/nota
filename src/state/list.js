import app from '../app'

import NotaList from '../components/nota-list.vue'
import NotaEditor from '../components/nota-editor.vue'

app.add('list', {
  parent: 'root',
  component: NotaList,

  path: '/:folder',
})

app.add('edit', {
  parent: 'list',
  component: NotaEditor,
  path: ':id',
})

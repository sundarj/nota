import app from '../app'
import NotaList from '../components/nota-list.vue'
import NotaEditor from '../components/nota-editor.vue'

app.add('list', {
  parent: 'root',
  component: NotaList,
})

app.add('edit', {
  parent: 'list',
  component: NotaEditor,
})

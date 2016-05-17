import app from '../app'
import Nota from '../components/nota.vue'

app.add('root', {
  component: Nota,
  redirect: {
    name: 'list',
    params: {
      folder: '*',
    },
  },
})

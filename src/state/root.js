import app from '../app'
import Nota from '../components/nota.vue'

app.add('root', {
  component: Nota,

  redirect: {
    name: 'aside',
    params: {
      folder: '*',
    },
  },
})

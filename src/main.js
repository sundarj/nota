import app from './app'
import Nota from './components/nota.vue'
import NotaList from './components/nota-list.vue'

app.map({
  '/': {
    component: NotaList,
    
    subRoutes: {
      '/:id': {
        name: 'root',
        component: NotaList,
      },
      
      '/*path': {
        name: 'folder',
        component: NotaList,
        
        subRoutes: {
          '/:id': {
            name: 'nota',
            component: NotaList,
          },
        },
      },
    },
  },
})

app.start(Nota, 'main')

window.nota = app

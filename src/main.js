import router from './router'
import Nota from './components/nota.vue'
import NotaList from './components/nota-list.vue'

router.map({
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

router.start(Nota, 'main')

window.nota = router

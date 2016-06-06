import router from './router'
import Nota from './components/nota.vue'
import NotaList from './components/nota-list.vue'
import NotaFolder from './components/nota-folder.vue'

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
        component: NotaFolder,

        subRoutes: {
          '/:id': {
            name: 'nota',
            component: NotaFolder,
          },
        },
      },
    },
  },
})

router.start(Nota, 'main')

window.nota = router

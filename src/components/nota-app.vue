<template>
  <main>
    <aside am-nota=aside>
      <nota-list :items=items></nota-list>

      <button type=button v-on:click='add( "nota" )'>
        <span class=material-icons>note_add</span> New note
      </button>

      <button type=button v-on:click='add( "folder" )'>
        <span class=material-icons>create_new_folder</span> New folder
      </button>
    </aside>

   <nota-editor v-show=editing :editing=editing transition=editor></nota-editor>
  </main>
</template>

<script>
  import bus from '../bus'
  import { ID } from '../util'

  import NotaEditor from './nota-editor.vue'
  import NotaList from './nota-list.vue'

  export default {
    name: 'nota-app',
    components: { NotaEditor, NotaList },

    data() {
      return {
        editing: false,

        items: [{
          type: 'nota',
          id: '1',
          title: 'The Silmarillion',
          contents: [ 'duup', 'lex' ],
        }, {
          type: 'nota',
          id: '2',
          title: '不思議の国のアリス',
          contents: [ 'hely' ],
        }, {
          type: 'nota',
          id: '3',
          title: 'Warning!!',
          contents: [ 'tropic' ],
        }, {
          type: 'folder',
          id: '4',
          title: 'other',
        }, {
          type: 'nota',
          id: '5',
          parent: '4',
          title: 'Don\'t Panic',
          contents: [ 'yuna' ],
        }, {
          type: 'folder',
          id: '6',
          parent: '4',
          title: 'else',
        }, {
          type: 'nota',
          id: '7',
          parent: '6',
          title: 'Sometimes',
          contents: [ 'yuna' ],
        }, {
          type: 'folder',
          id: '8',
          parent: '6',
          title: 'another',
        }, {
          type: 'nota',
          id: '9',
          parent: '8',
          title: '1',
          contents: [ 'yuna' ],
        }],
      }
    },

    created() {
      bus.$on( 'historychange', this.historychange )
    },

    methods: {
      historychange({ params }) {
        if ( ! params.id ) return

        const item = this.items.find( item => item.id === params.id )
        if ( item.type !== 'nota' ) return

        this.editing = item
      },

      add( type ) {
        const item = {
          type,
          title: '',
          id: ID(),
        }

        if ( type === 'nota' ) {
          item.contents = [ '' ]

          this.editing = item
        }

        this.items.push( item )
      },
    },
  }
</script>

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
  import history, { href } from '../history'
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
          content: '<p>duup</p><p>lex</p>',
        }, {
          type: 'nota',
          id: '2',
          title: '不思議の国のアリス',
          content: '<p>hely</p>',
        }, {
          type: 'nota',
          id: '3',
          title: 'Warning!!',
          content: '<p>tropic</p>',
        }, {
          type: 'folder',
          id: '4',
          title: 'other',
        }, {
          type: 'nota',
          id: '5',
          parent: '4',
          title: 'Don\'t Panic',
          content: '<p>yuna</p>',
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
          content: '<p>yuna</p>',
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
          content: '<p>yuna</p>',
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
        if ( !item || item.type !== 'nota' ) return

        this.editing = item
      },

      add( type ) {
        const item = {
          type,
          title: '',
          id: ID(),
        }

        this.items.push( item )

        if ( type === 'nota' ) {
          item.content = ''
          this.editing = item
        }

        history.push({
          pathname: href({ name: 'item', params: item }),
          state: {
            status: 'new',
          },
        })

        bus.$emit( 'newItem', { id: item.id } )
      },
    },
  }
</script>

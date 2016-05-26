<template>
  <main am-nota>
    <aside am-nota=aside>
      <router-view :items='items'></router-view>
    </aside>
    
    <nota-editor v-show='editing' :editing='editing'></nota-editor>
  </main>
</template>

<script>
  import NotaEditor from './nota-editor.vue'

  export default {
    name: 'nota',
    components: [ NotaEditor ],
    
    data() {
      return {
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
        }]
      }
    },
    
    computed: {
      editing() {
        const $id = this.$route.params.id
        const $current = this.items.find( item => item.id === $id )
        
        if ( $current.type === 'folder' ) return false
        
        return $current
      }
    },
  }
</script>

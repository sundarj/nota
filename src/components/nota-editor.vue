<template>
  <div am-nota=editor>
    <header am-nota=editor-title v-text='editing.title'></header>

    <medium-editor v-model='editing.content'></medium-editor>
  </div>
</template>

<script>
  import bus from '../bus'
  import MediumEditor from './medium-editor.vue'

  export default {
    name: 'nota-editor',
    props: [ 'editing' ],
    components: {
      MediumEditor( resolve ) {
        // wait until route is matched to resolve editor

        bus.$once( 'historychange', _ => {
          resolve( MediumEditor )
        })
      },
    },
  }
</script>

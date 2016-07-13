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
    components: { MediumEditor },
  }
</script>

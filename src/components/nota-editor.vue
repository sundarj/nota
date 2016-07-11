<template>
  <div am-nota=editor>
    <header am-nota=editor-title v-text='editing.title'></header>

    <medium-editor v-for='field of editing.contents' v-model='field'></medium-editor>
  </div>
</template>

<script>
  import MediumEditor from './medium-editor.vue'

  export default {
    name: 'nota-editor',
    props: [ 'editing' ],
    components: { MediumEditor },
  }
</script>

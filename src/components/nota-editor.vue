<template>
  <div am-nota=editor>
    <header am-nota=editor-title v-text='editing.title'></header>

    <nota-editable v-model='editing.content'></nota-editable>
  </div>
</template>

<script>
  import bus from '../bus'
  import NotaEditable from './nota-editable.vue'

  export default {
    name: 'nota-editor',
    props: [ 'editing' ],
    components: { NotaEditable },
  }
</script>

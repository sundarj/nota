<template>
  <div am-nota=editor>
    <header am-nota=editor-title v-text='editing.title'></header>

    <div contenteditable v-for='field of editing.contents' v-html='field'></div>
  </div>
</template>

<script>
  export default {
    name: 'nota-editor',
    props: [ 'editing' ],
  }
</script>

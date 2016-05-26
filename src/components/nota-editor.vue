<template>
  <div am-nota=editor>
    <input am-nota=editor-input v-model='editing.title'>

    <div contenteditable v-for='field of editing.contents' v-html='field'></div>
  </div>
</template>

<script>
  export default {
    name: 'nota-editor',
    props: [ 'editing' ],
  }
</script>

<style lang='stylus'>
  [am-nota=editor-input] {
    display block
  }
</style>

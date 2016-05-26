<template>
  <div am-nota=editor>
    <input am-nota=editor-input v-model='editing.title'>
    
    <textarea v-for='field of editing.contents' v-model='field'></textarea>
  </div>
</template>

<script>
  export default {
    name: 'nota-editor',
    props: [ 'editing' ],
  }
</script>

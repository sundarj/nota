<template>
  <div ref=editor contenteditable v-on:blur=blur></div>
</template>

<script>
  import editable from 'wysiwyg.js'
  import { autolink } from '../util'
  import bus from '../bus'

  const linked = autolink
  let editor

  export default {
    name: 'nota-editable',
    props: [ 'value' ],

    mounted() {
      editor = editable({
        element: this.$refs.editor,
      })
    },

    methods: {
      blur() {
        if ( ! editor ) return

        editor.setHTML( linked(editor.getHTML()) )
      },
    },
  }
</script>

<style lang=stylus>
  [ contenteditable ] a {
    text-decoration underline
    cursor pointer
    display inline-block
    margin 0
  }
</style>

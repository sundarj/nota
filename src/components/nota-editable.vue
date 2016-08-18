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
      keyup( event ) {
        const keyPressed = key( event )
        const activateKeys = [ 'space', 'enter' ]
        if ( ! activateKeys.includes(keyPressed) ) return

        const caretPos = rangy.saveSelection()
        const editorContent = editor.getHTML().replace( /&nbsp;/g, ( match, offset))
        const linkedContent = linked( editorContent )
        console.log( linkedContent )
        editor.setHTML( linkedContent.replace( / /g, '&nbsp;' ) )
        rangy.restoreSelection( caretPos )

      },

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

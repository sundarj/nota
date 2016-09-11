<template>
  <div ref=editor contenteditable v-on:blur=blur v-on:input=input></div>
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
      editor = editable({ element: this.$refs.editor })

      if ( this.value ) editor.setHTML( this.value )
      bus.$on( 'historychange', _ => {                                           setImmediate( _ => editor.setHTML(this.value) )
      })
    },

    methods: {
      blur() {
        if ( ! editor ) return

        const html = linked( editor.getHTML() )
        editor.setHTML( html )
        this.$emit( 'input', html )
      },

      input({ target }) {

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

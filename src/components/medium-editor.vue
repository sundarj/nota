<template>
  <div ref=editor contenteditable></div>
</template>

<script>
  import bus from '../bus'
  import Editor from 'medium-editor'

  export default {
    name: 'medium-editor',
    props: [ 'value' ],

    mounted() {
      const editor = new Editor( this.$refs.editor, {
        toolbar: false,
        autoLink: true,
      })

      if ( this.value ) editor.setContent( this.value )
      bus.$on( 'historychange', _ => {
        setImmediate( _ => editor.setContent( this.value ) )
      })

      editor.subscribe( 'editableInput', ({ target }) => {
        this.$emit( 'input', target.innerHTML )
      })
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

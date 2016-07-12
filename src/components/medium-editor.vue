<template>
  <div ref=editor contenteditable></div>
</template>

<script>
  import debounce from 'lodash.debounce'
  import Editor from 'medium-editor'

  export default {
    name: 'medium-editor',
    props: [ 'value' ],

    mounted() {
      const editor = new Editor( this.$refs.editor, {
        toolbar: false,
        autoLink: true,
      })

      console.log( this.value )

      editor.subscribe( 'editableInput', debounce(({ target }) => {
        this.$emit( 'input', target.innerHTML )
      }, 300))
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

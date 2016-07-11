<template>
  <div class=editable contenteditable ref=editor v-html=value></div>
</template>

<script>
  import Editor from 'medium-editor'

  export default {
    name: 'medium-editor',
    props: [ 'value' ],

    mounted() {
      const editor = new Editor( this.$refs.editor, {
        toolbar: false,
      })

      console.log( editor )
    },
  }
</script>

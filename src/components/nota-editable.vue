<template>
  <div ref=editor contenteditable v-on:keyup=keyup></div>
</template>

<script>
  import editable from 'wysiwyg.js'
  import linked from 'autolink.js'
  import rangy from 'rangy'

  import { key } from '../util'
  import bus from '../bus'

  export default {
    name: 'nota-editable',
    props: [ 'value' ],

    mounted() {
      editable({
        element: this.$refs.editor,
      })

      // const editor = new Editor( this.$refs.editor, {
      //   toolbar: false,
      //   autoLink: true,
      // })

      // setContent( editor, this.value )
      // bus.$on( 'historychange', _ =>
      //   setImmediate( _ => setContent(editor, this.value) )
      // )

      // function setContent( editor, value ) {
      //   editor.origElements.innerHTML = value || ''
      // }

      // editor.subscribe( 'editableInput', ({ target }) => {
      //   console.error(new Error)
      //   this.$emit( 'input', target.innerHTML )
      // })
    },

    methods: {
      keyup( event ) {
        if ( key(event) !== 'space' ) return

        const { target } = event

        const range = rangy.createRange()

        const nodes = target.childNodes
        const lastNode = nodes[nodes.length - 1]
        range.selectNodeContents( lastNode )

        const string = range.toString().trim()
        const lastWord = string.split(/\s/).pop()

        if ( ! lastWord.length ) {
          range.collapse()
          return
        }

        try {
          new URL( lastWord )
        } catch ( err ) {
          range.collapse()
          return
        }

        const start = string.lastIndexOf( lastWord )

        range.setStart( lastNode, start )
        range.setEnd( lastNode, start + lastWord.length )
        range.deleteContents()
        range.insertNode(
          range.createContextualFragment( linked(lastWord) )
        )
        range.collapse()
      }
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

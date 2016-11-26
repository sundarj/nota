<template>
  <textarea :value=value v-on:input=input></textarea>
</template>

<!-- prosemirror, scribe mayhaps? >
Make a util directory and keep different utilities in different files. A single util file will always grow until it is too big and yet too hard to split apart. Using a single util file is unhygienic.

vue router 2, vuex -->

<script>
  export default {
    name: 'nota-editable',
    props: [ 'value' ],

    methods: {
      input({ target }) {
        this.$emit( 'input', target.value )
      },
    },
  }
</script>

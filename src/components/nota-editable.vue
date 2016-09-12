<template>
  <textarea :value=value v-on:input=input></textarea>
</template>

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

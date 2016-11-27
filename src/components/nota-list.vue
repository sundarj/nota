<template>
  <nav>
  </nav>
</template>

<script>
  export default {
    name: 'nota-list',
    props: [ 'items' ],
  }
</script>

<style lang='stylus'>
  .material-icons {
    font-size: inherit
    margin-right: 5px

    &, & + span {
      display: inline-block
      vertical-align: middle
    }
  }

  a {
    color: inherit
    text-decoration: none
    margin: .5em 0
    display: block
  }
</style>

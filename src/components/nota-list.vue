<template>
  <nav am-nota=list
  >
    <a am-nota=list-item
      v-for='item of items'
      data-type='{{ item.type }}'
    >
      {{ item.title }}
      
      <nota-list v-if='item.type === "folder"' :items='item.contents'></nota-list>
    </a>
  </nav>
</template>

<script>
  import { ID } from '../util'

  export default {
    name: 'nota-list',
    props: [ 'items' ],
    
    created() {
      if ( ! this.items ) this.items = this.initial
    },
  }
</script>

<style lang='stylus'>
  [am-nota=list]
  [am-nota=list-item] {
    display block
    padding 1em
  }
</style>

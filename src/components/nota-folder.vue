<template>
  <div am-nota=folder>
    <a am-nota=folder-title
      v-link='{ name: folder.type, params: { path: path } }'
      v-text='folder.title'></a>
       
      <template v-for='child of children'>
        <nota-folder v-if='child.type === folder.type'
          :folder='child'
          :items='items'
        ></nota-folder>
        
        <a am-nota=item v-else
          v-link='{ name: child.type, params: { path: path, id: child.id } }'
          v-text='child.title'></a>
      </template>
  </div>
</template>

<script>
  export default {
    name: 'nota-folder',
    props: [ 'folder', 'items' ],
    
    computed: {
      children() {
        const folder = this.folder
        
        return this.items.filter( item => item.parent === folder.id )
      },
      
      path() {
        if ( this.$parent.$options.name !== this.$options.name ) return this.folder.id
        
        return this.$parent.path + '/' + this.folder.id
      },
    },
  }
</script>

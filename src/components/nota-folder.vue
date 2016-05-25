<template>
  <a am-nota=folder-title
    v-link='{ name: folder.type, params: { path: path } }'
  >
    <span class='material-icons' v-text='icon'></span> {{ folder.title }}
  </a>

  <div am-nota=folder v-bind='{ "am-open": open }'>
      <template v-for='child of children'>
        <nota-folder v-if='child.type === folder.type'
          :folder='child'
          :items='items'
        ></nota-folder>

        <a am-nota=item v-else
          v-link='{ name: child.type, params: { path: path, id: child.id } }'
        >
          <span class='material-icons'> note </span> {{ child.title }}
        </a>
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

      open() {
        return this.$route.path.includes( this.path )
      },

      icon() {
        return this.open ? 'folder_open' : 'folder'
      },
    },
  }
</script>

<style lang="stylus">
  [am-nota=item] {
    display block
  }

  [am-nota=folder] {
    padding-left 1em
    max-height 0
    overflow hidden

    &[am-open] {
      max-height 100%
      overflow auto
    }
  }
</style>

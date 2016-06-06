<template>
  <div>
    <a am-nota=folder-title
      v-link='{ name: "folder", params: { path: path } }'
    >
      <span class='material-icons' v-text='icon'></span> <span>{{ folder.title }}</span>
    </a>

    <div am-nota=folder v-bind='{ "am-open": open }'>
        <template v-for='child of children'>
          <a am-nota=folder-title v-if='child.type === folder.type'
            v-link='{ name: "folder", params: { path: path + "/" + child.id } }'
          >
            <span class='material-icons' v-text='icon'></span> <span>{{ child.title }}</span>
          </a>

          <a am-nota=item v-else
            v-link='{ name: "nota", params: { path: path, id: child.id } }'
          >
            <span class='material-icons'> note </span> <span>{{ child.title }}</span>
          </a>
        </template>
    </div>
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

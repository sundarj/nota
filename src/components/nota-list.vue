<template>
  <!--   <div am-nota=list-item
      v-for='item of items'
      v-bind='{ "data-folder": folderID(item) }'
      data-type='{{ item.type }}'
    >
        <a v-link='getLink(item)' v-if='item.title' am-nota=list-item-title>
          <i class="material-icons" v-text='getIcon(item)'></i> <span v-text='item.title'></span>
        </a>

      <nota-list v-if='item.type === "folder"' :items='item.contents'></nota-list>
    </div> -->

  <nav am-nota=list>
    <template v-for='item in roots'>
      <nota-folder v-if='item.type === "folder"' :folder='item' :items='items'></nota-folder>
      
      <a am-nota=item v-else
          v-link='{ name: "root", params: { id: item.id } }'
          v-text='item.title'></a>
    </template>
  </nav>
</template>

<script>
  import NotaFolder from './nota-folder.vue'

  export default {
    name: 'nota-list',
    props: [ 'items' ],
    components: [ NotaFolder ],
    
    computed: {
      roots() {
        return this.items.filter( item => ! item.parent )
      }
    },

    methods: {
      getIcon({ type, id }) {
        let icon = 'note'

        if ( type === 'folder' ) {
          const $path = this.$route.params.path.split('/')
          icon = $path.includes( id + '' ) ? 'folder_open' : 'folder'
        }

        return icon
      },
    }
  }
</script>

<style lang='stylus'>
  [am-nota=list]
  [am-nota=list-item] {
    display block
  }

  [am-nota=list] a {
    text-decoration none
    color inherit

    padding .25em
  }

  [am-nota=list-item] {
    margin .5em

    &[data-folder=all] {
      margin-left 0
      margin-right 0
    }
  }

  [am-nota=list-item] > [am-nota=list] {
    max-height 0
    overflow hidden
  }
  
  [am-nota=list] {
    [data-folder=all] &
    .v-link-active + & {
      max-height 100%
    }
  }

  .material-icons {
    font-size inherit
    vertical-align middle
    margin-right 5px
  }
</style>

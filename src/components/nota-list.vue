<template>
  <nav am-nota=list>
    <div am-nota=list-item
      v-for='item of items'
      v-bind='{ "data-open": isOpen(item), "data-folder": folderID(item) }'
      data-type='{{ item.$.type }}'
    >
        <a v-link='getLink(item)' v-if='item.title' am-nota=list-item-title>
          <i class="material-icons" v-text='getIcon(item)'></i> <span v-text='item.title'></span>
        </a>

      <nota-list v-if='item.$.type === "folder"' :items='item.contents'></nota-list>
    </div>
  </nav>
</template>

<script>
  import nota from '../app'

  export default {
    name: 'nota-list',
    props: [ 'items' ],

    data() {
      return {
        params: nota.context.params,
      }
    },

    created() {
      if ( ! this.items ) this.items = this.initial
    },

    methods: {
      getLink({ $ }) {
        const $type = $.type
        const $id = $.id

        const isFolder = ( $type === 'folder' )
        const isNota = ( $type === 'nota' )

        console.assert(
          isFolder || isNota,
          'item should be either `folder` or  `nota`'
        )

        const params = {
          folder: null,
          id: null,
        }

        if (isFolder) {
          params.folder = $id
        } else if (isNota) {
          params.folder = $.parent
          params.id = $id
        }

        return {
          name: isFolder ? 'list' : 'edit',
          params,
        }
      },

      isOpen({ $ }) {
        if ( $.type !== 'folder' ) return false

        const $folder = this.params.folder

        return (
         $folder === '*' || $.id === '*' || $folder == $.id
        )
      },
      
      getIcon( item ) {
        let icon = 'insert_drive_file'
        
        if ( item.$.type === 'folder' ) {
          icon = this.isOpen(item) ? 'folder_open' : 'folder'
        }

        return icon
      },
      
      folderID({ $ }) {
        return $.type === 'folder' && $.id
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
    
    &[data-folder='*'] {
      margin-left 0
      margin-right 0
    }
  }
  
  [data-type=nota] {
    opacity 0
    font-size 0
    overflow hidden
    
    [data-open] & {
      opacity 1
      height 100%
      
      font-size inherit
    }
  }
  
  .material-icons {
    font-size inherit
    vertical-align middle
    margin-right 5px
  }
</style>

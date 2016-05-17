<template>
  <nav am-nota=list>
    <div am-nota=list-item
      v-for='item of items'
      v-bind='{ "data-open": isOpen(item) }'
      data-type='{{ item.$.type }}'
    >
        <a v-link='getLink(item)' v-if='item.title'>
          <span am-nota=list-item-title v-text='item.title'>
        </a>
      </span>

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
        nota,
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

        const $folder = this.nota.context.params.folder

        return (
         $folder === '*' || $folder == $.id
        )
      },
    }
  }
</script>

<style lang='stylus'>
  [am-nota=list]
  [am-nota=list-item] {
    display block
  }

  [data-type=folder] > [am-nota=list-item-title]:first-child::before {
    content '- '
    margin-left -1ch
  }

  [am-nota=list-item] {
    margin .5em
  }
</style>

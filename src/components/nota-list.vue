<template>
  <nav am-nota=list>
    <template v-for='item of results'>
      <a am-nota=item v-if='item.type === "nota"'
          v-href='{ name: "root", params: { id: item.id } }'
      >
        <span class='material-icons'> note </span>
        <span>{{ item.title }}</span>
      </a>

      <a am-nota=folder-title v-else
        v-href='{ name: "item", params: { id: item.id } }'
      >
        <!-- v-text='getIcon( item )' -->
        <span class='material-icons'></span>
        <span>{{ item.title }}</span>
      </a>
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
      results() {
        if ( ! (this.location && this.location.name) ) {
          return this.items.filter( item => ! item.parent )
        }

        // const parentID = this.location.params.id
        // return this.items.filter( item => item.parent == parentID )
      }
    },

    methods: {
      getIcon({ type, id }) {
        let icon = 'note'

        if ( type === 'folder' ) {
          const $path = this.location.params.path.split('/')
          icon = $path.includes( id + '' ) ? 'folder_open' : 'folder'
        }

        return icon
      },
    },

    events: {
      historychange( location ) {
        if ( location ) this.location = location
      },
    },
  }
</script>

<style lang='stylus'>
  .material-icons {
    font-size inherit
    margin-right 5px

    &, & + span {
      display inline-block
      vertical-align middle
    }
  }

  a {
    color inherit
    text-decoration none
    margin .5em 0
  }
</style>

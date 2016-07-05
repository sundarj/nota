<template>
  <nav am-nota=list>
    <template v-for='item of roots'>
      <a am-nota=item v-if='item.type === "nota"'
          v-href='{ name: "root", params: { id: item.id } }'
      >
        <span class='material-icons'> note </span> <span>{{ item.title }}</span>
      </a>

      <a am-nota=folder-title v-else
        v-href='{ name: "item", params: { path: item.path, id: item.id } }'
      >
        <span class='material-icons' v-text='icon'></span> <span>{{ item.title }}</span>
      </a>
    </template>
  </nav>
</template>

<script>
  import NotaFolder from './nota-folder.vue'

  export default {
    name: 'nota-list',
    props: [ 'items', 'location' ],
    components: [ NotaFolder ],

    computed: {
      roots() {
        if ( ! this.location ) return this.items.filter( item => ! item.parent )
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
    }
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

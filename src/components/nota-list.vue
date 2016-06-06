<template>
  <nav am-nota=list>
    <template v-for='item of roots'>
      <a am-nota=folder-title v-if='item.type === "folder"'
        v-link='{ name: "folder", params: { path: item.id } }'
      >
        <span class='material-icons' v-text='icon'></span> <span>{{ item.title }}</span>
      </a>

      <a am-nota=item v-else
          v-link='{ name: "root", params: { id: item.id } }'
      >
        <span class='material-icons'> note </span> <span>{{ item.title }}</span>
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

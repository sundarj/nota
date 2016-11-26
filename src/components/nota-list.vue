<template>
  <nav
    v-on:click.capture='edit( $event )'
    v-on:keyup='keyup( $event )'
    v-on:focusout='blur( $event )'
  >
    <template v-for='{ type, id, parent, title } of results'>
      <router-link v-bind:to='getItemLocation({ type, id, parent })'>
        <span class='material-icons'
          v-text='type === "folder" ? "folder" : "note"'
        ></span>

        <span v-text='title' v-bind:data-id='id'></span>
      </router-link>
    </template>
  </nav>
</template>

<script>
  import bus from '../bus'
  import { key } from '../util'

  function isRootItem({ parent }) {
    return ( parent === undefined )
  }

  export default {
    name: 'nota-list',
    props: [ 'items' ],

    data: () => ({
      filter: isRootItem,
      currentFolder: null,
      lastTarget: null,
      lastValue: null,
    }),

    computed: {
      results() {
        return this.items.filter( this.filter )
      },
    },

    created() {
      bus.$on( 'historychange', this.historychange )

      bus.$on( 'newItem', ({ id }) =>
        this.$nextTick( _ =>
          this.focus({ target: document.getElementById(id) })
        )
      )
    },

    methods: {
      isRootItem,
      isChildOf: ( id ) => ({ parent }) => parent === id,

      historychange({ params }) {
        if ( ! params.id ) {  // location: /
          this.filter = this.isRootItem
          return
        }

        const item = this.getItemById( params.id )
        let { id, type, parent } = item

        if ( type === 'nota' ) {
          id = parent
        } else {
          // reset focus to top
          this.$el.tabIndex = 0
          this.$el.focus()
        }

        this.filter = this.isChildOf( id )
      },

      getItemById( itemId ) {
        return this.items.find( ({ id }) => id === itemId )
      },

      getChildrenOf( parentId ) {
        return this.items.filter( this.isChildOf( parentId ) )
      },

      getItemLocation({ type, id, parent }) {
        const location = {
          name: 'item',

          params: {
            [type + 'Id']: id,
            folderId: ( type === 'folder' ) ? id : parent,
          },
        }

        return location
      },

      focus({ target }) {
        if ( target.tagName !== 'INPUT' ) return

        target.readOnly = false
        target.focus()
        target.select()
      },

      blur({ target }) {
        if ( target.tagName !== 'INPUT' ) return

        target.readOnly = true
        target.blur()
      },

      edit( event ) {
        const { target } = event

        if ( this.lastTarget ) {
          this.lastTarget.readOnly = true
          this.lastTarget = null
        }

        if ( target.tagName !== 'INPUT' ) return
        if ( ! event.shiftKey ) return

        event.preventDefault()
        event.stopPropagation()

        this.focus( event )

        this.lastTarget = target
        this.lastValue  = target.value
      },

      cancel({ target }) {
        this.blur( target )

        if ( ! this.lastValue ) return

        this.getItemById( target.dataset.id ).title = this.lastValue
        this.lastValue = null
      },

      keyup( event ) {
        const { target } = event

        if ( target.tagName !== 'INPUT' ) return

        const keyPressed = key( event )

        if ( keyPressed === 'escape' ) {
          this.cancel( event )
        } else if ( keyPressed === 'enter' ) {
          target.parentElement.click()

          if ( event.shiftKey ) {
            this.edit( event )
          }
        }
      },
    },
  }
</script>

<style lang='stylus'>
  nav:focus {
    outline: none
  }

  .material-icons {
    font-size: inherit
    margin-right: 5px

    &, & + span {
      display: inline-block
      vertical-align: middle
    }
  }

  a {
    color: inherit
    text-decoration: none
    margin: .5em 0
    display: block
  }
</style>

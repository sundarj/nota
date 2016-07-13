<template>
  <nav am-nota=list
    v-on:click.capture='edit( $event )'
    v-on:keyup='keyup( $event )'
    v-on:focusout='blur( $event )'
  >
    <template v-for='item of results'>
      <a am-nota=item v-if='item.type === "nota"'
          v-href='{ name: "root", params: { id: item.id } }'
      >
        <span class='material-icons'> note </span>
        <input v-model=item.title :data-id=item.id :id=item.id readonly>
      </a>

      <a am-nota=folder-title v-else
        v-href='{ name: "item", params: { id: item.id } }'
      >
        <span class='material-icons'> folder </span>
        <input v-model=item.title :data-id=item.id :id=item.id readonly>
      </a>
    </template>
  </nav>
</template>

<script>
  import bus from '../bus'
  import { key } from '../util'

  function hasNoParent({ parent }) {
    return ( ! parent )
  }

  export default {
    name: 'nota-list',
    props: [ 'items' ],

    data() {
      return {
        filter: hasNoParent,
        lastTarget: null,
        lastValue: null,
      }
    },

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
      hasNoParent,
      isChildOf: id => ({ parent }) => parent === id,

      historychange({ params }) {
        if ( ! params.id ) {  // location: /
          this.filter = this.hasNoParent
          return
        }

        let { id, type, parent } = this.getItemById( params.id )

        if ( type !== 'folder' ) {
          id = parent
        } else {
          // reset focus to top
          this.$el.tabIndex = 0
          this.$el.focus()
        }

        this.filter = this.isChildOf( id )
      },

      getItemById( $id ) {
        return this.items.find( ({ id }) => id === $id )
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
  [am-nota=list]:focus {
    outline none
  }

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
    display block
  }
</style>

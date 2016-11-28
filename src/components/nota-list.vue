<template>
  <nav>
    <template v-for='{ type, id, parent, title } of items'>
      <router-link
        v-bind:to='getLocation( { id, parent }, items )'
      >
        <span class='material-icons'
          v-text='type === "folder" ? "folder" : "note"'
        ></span>
        <span v-text='title'></span>
      </router-link>
    </template>
  </nav>
</template>

<script>
  export default {
    name: 'nota-list',
    props: [ 'items' ],

    methods: { getLocation },
  }





  function getLocation( { id, parent }, items ) {
    const folderPath = parent ? getFolderPath( parent, items ) : []

    return [ '', ...folderPath, id ].join( '/' )
  }

  function getFolderPath( parent, items ) {
    const path = [ parent ]
    const { parent: grandparent } = items.find( ({ id }) => id === parent )

    if ( grandparent ) path.unshift( ...getFolderPath( grandparent, items ) )

    return path
  }
</script>

<style lang='stylus'>
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

<template>
  <main>
    <aside>
      <router-view v-bind:items='items'></router-view>





      <!--<button type='button' v-on:click='add( "nota" )'>
        <span class='material-icons'>note_add</span> New note
      </button>

      <button type='button' v-on:click='add( "folder" )'>
        <span class='material-icons'>create_new_folder</span> New folder
      </button>-->
    </aside>





   <!--<nota-editor v-show=editing :editing=editing transition=editor></nota-editor>-->
  </main>
</template>

<script>
  import { mapState } from 'vuex'
  // import NotaEditor from './nota-editor.vue'

  export default {
    name: 'nota-app',
    // components: { NotaEditor },

    computed: mapState({
      items: ({ app: { items } }) => items
    }),
  }
</script>

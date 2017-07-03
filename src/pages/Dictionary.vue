<template>
  <v-ons-page>
    <custom-toolbar
      title="Reference"
      :action="toggleMenu"></custom-toolbar>
    <div class="table-wrapper">
      <v-client-table
        :data="getDictionary"
        :columns="columns"
        :options="options"></v-client-table>
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../components/commons/Toolbar'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        columns: ['img', 'en', 'answer'],
        words: [],
        options: {
          templates: {
              img: function(h, src) {
                  return h('img', {
                    attrs: {
                      src: src.img
                    },
                    class: {
                      "img-responsive": true
                    }
                  })
              }
          },
          headings: {
            en: "Question"
          }
        }
      }
    },
    props: ['toggleMenu'],
    components: {
      customToolbar: customToolbar
    },
    computed: mapGetters(['getDictionary'])
  }
</script>

<style>

</style>
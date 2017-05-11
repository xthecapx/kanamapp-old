<template>
  <v-ons-page>
    <custom-toolbar
      title="Reference"
      :action="toggleMenu"></custom-toolbar>
    <div class="form-group">
      <label for="sel1">Check Answers:</label>
      <select
        class="form-control"
        v-model="topic">
        <option
          v-for="(value, key) in getVocabulary"
          :value="key">{{ value.name }}</option>
      </select>
    </div>
    <div class="table-wrapper">
      <v-client-table
        :data="tableData"
        :columns="columns"
        :options="options"></v-client-table>
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../commons/Toolbar'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        columns: ['img', 'question', 'answer'],
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
          }
        },
        topic: 0
      }
    },
    props: ['toggleMenu'],
    components: {
      customToolbar: customToolbar
    },
    computed: {
      ...mapGetters(['getVocabulary']),
      tableData() {
        return this.getVocabulary[this.topic].questions
      }
    }
  }
</script>
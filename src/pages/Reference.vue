<template>
  <v-ons-page>
    <custom-toolbar
      title="Reference"
      :action="toggleMenu"></custom-toolbar>
    <div class="reference-container">
      <div class="form-group">
        <label for="units">Select Unit:</label>
        <select
          id="units"
          class="form-control"
          v-model="unit"
          @change="changeTopic">
          <option
            v-for="(value, key) in getVocabulary"
            :value="key">{{ key }}</option>
        </select>
        <label for="topics">Select Topic:</label>
        <select
          id="topics"
          class="form-control"
          v-model="topic">
          <option
            v-for="(value, key) in getVocabulary[unit]"
            :value="key">{{ value.name }}</option>
        </select>
      </div>
      <div class="table-wrapper">
        <v-client-table
          :data="tableData"
          :columns="columns"
          :options="options"></v-client-table>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../components/commons/Toolbar'
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
        topic: 0,
        unit: 'unitOne'
      }
    },
    props: ['toggleMenu'],
    components: {
      customToolbar: customToolbar
    },
    computed: {
      ...mapGetters(['getVocabulary']),
      tableData() {
        return this.getVocabulary[this.unit][this.topic].questions
      }
    },
    methods: {
      changeTopic() {
        this.topic = 0
      }
    }
  }
</script>

<style>
  .reference-container {
    margin: 11px;
  }
</style>